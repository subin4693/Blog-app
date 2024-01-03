"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";

const CommentCard = ({ comment }) => {
    const date = new Date(comment.createdAt);

    return (
        <div className="my-8">
            <div className="flex  items-center">
                <div className="w-[2rem] h-[2rem] rounded-full relative">
                    <Image
                        src={comment.username.image}
                        fill="true"
                        className="rounded-full object-fit absolute"
                    />
                </div>

                <div className="font-bold ml-2 my-1">
                    <span className="">{comment.username.username}</span>

                    <br />
                    <span className="text-xs font-thin ">
                        {comment.createdAt && date.toLocaleDateString()}
                    </span>
                </div>
            </div>
            <p className="font-bold">{comment.comment_text}</p>
        </div>
    );
};

const Comments = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState(null);
    const { data: session, status } = useSession();
    const { slug } = useParams();

    const getComments = async () => {
        if (!slug) return;

        try {
            const res = await fetch(
                `http://localhost:3000/api/comments?slug=${slug}`,
            );
            const data = await res.json();

            setComments(data.comments);
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!slug) return;
        if (!session && !session.user && !session.user.name)
            return alert("Only loged user can add new comments...");
        const res = await fetch("http://localhost:3000/api/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                comment_text: comment,
                username: session.user.name,
                post_slug: slug,
            }),
        });
        getComments();
        setComment("");
    };

    useEffect(() => {
        getComments();
    }, []);

    return (
        <>
            <div className=" my-7">
                {status === "authenticated" ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Add comment"
                            className="w-[60vh] lg:w-full bg-gray-200 p-2"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="px-3 py-2 bg-orange-200 mt-2"
                        >
                            Add
                        </button>
                    </form>
                ) : (
                    <Link href="/login">Login to write a comment</Link>
                )}
            </div>
            <div className="my-10">
                <h1 className="text_title">comments</h1>
                {/*<WriteComment />*/}

                {comments ? (
                    comments.map((comment) => (
                        <CommentCard comment={comment} key={comment._id} />
                    ))
                ) : (
                    <p>No comments available</p>
                )}
            </div>
        </>
    );
};

export default Comments;
