import Image from "next/image";
import parse from "html-react-parser";

import RecentPosts from "@/components/RecentPosts";
import Sidebar from "@/components/Sidebar";
import Comments from "@/components/Comments";

const getData = async (slug) => {
    try {
        const res = await fetch(`http://localhost:3000/api/blogs/${slug}`);

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const Post = async ({ params }) => {
    const { slug } = params;

    const { blog } = await getData(slug);
    const date = new Date(blog.createdAt);

    return (
        <>
            <header className="flex">
                <div className="w-1/2 p-10  ">
                    <h1 className="text-3xl font-extrabold">
                        {blog && blog.title}
                    </h1>
                    <div className="flex justify-center items-center w-fit mt-10">
                        <div className="w-[2rem] h-[2rem] relative  mr-3 text-lg font-bold">
                            <Image
                                src={blog && blog.username.image}
                                fill="true"
                                className="absolute object-fit"
                            />
                        </div>
                        <p className="font-bold">
                            <span className="flex justify-center items-center gap-1">
                                {blog && blog.username.username}
                            </span>

                            <span className="text-xs font-thin ">
                                {blog && date.toLocaleDateString()}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="w-1/2 h-[20rem] bg-black    relative">
                    <Image
                        src={blog && blog.image}
                        fill="true"
                        className="absolute object-contain"
                    />
                </div>
            </header>
            <section className="flex  justify-between mt-10">
                <div className=" lg:w-2/3 h-fit">
                    {blog && parse(blog.content)}
                    <Comments />
                </div>

                <div className=" border-l-2 pl-5 hidden lg:flex h-fit ">
                    <Sidebar />
                </div>
            </section>
        </>
    );
};

export default Post;
