"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "@/utils/firebase";

const Write = () => {
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [cat, setCat] = useState("style");
    const [file, setFile] = useState(null);

    const router = useRouter();

    const { data: session, status } = useSession();

    useEffect(() => {
        const storage = getStorage(app);

        const uploadFile = () => {
            const name = new Date().getTime + file.name;
            const storageRef = ref(storage, name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                    }
                },
                (error) => {
                    console.log("Error occured while uploading image");
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(
                        (downloadURL) => {
                            setUrl(downloadURL);
                        },
                    );
                },
            );
        };
        file && uploadFile();
    }, [file]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!session && session.user) router.push("/login");
        const res = await fetch("http://localhost:3000/api/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                content: value,
                username: session.user.name,
                category: cat,
                image: url,
            }),
        });
        router.push("/");
    };

    return (
        <section className="h-[80vh] px-10 py-7">
            <h1 className="text_title">Write blog</h1>
            <br />
            <select onChange={(e) => setCat(e.target.value)}>
                <option value="style">style</option>
                <option value="fashion">fashion</option>
                <option value="food">food</option>
                <option value="culture">culture</option>
                <option value="travel">travel</option>
                <option value="coding">coding</option>
            </select>
            <br />
            <br />
            <label
                htmlFor="image"
                className="bg-yellow-200 px-3 py-2 cursor-pointer"
            >
                {file ? "Change image" : "Cover image"}
            </label>
            <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                className="hidden"
            />

            {file && (
                <>
                    <br />
                    <br />
                    <Image
                        src={url}
                        height="200"
                        width="200"
                        alt="blog image"
                    />
                </>
            )}

            <br />
            <br />

            <input
                type="text"
                placeholder="Title..."
                className="text-xl border-2 outline-none p-2 w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <br />
            <br />

            <ReactQuill
                theme="bubble"
                value={value}
                onChange={setValue}
                placeholder="Start blog here..."
                className="w-full h-[9rem] border-2"
            />
            <div className="text-right mt-5">
                <button
                    className="bg-green-500  text-white py-2 rounded-sm px-5 "
                    onClick={handleSubmit}
                >
                    Post
                </button>
            </div>
        </section>
    );
};

export default Write;
