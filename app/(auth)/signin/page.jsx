"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Signin = () => {
    const [showPassword, setShowPassword] = useState("password");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    //https://picsum.photos/200

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usernameRegex = /^[a-zA-Z0-9._-]{3,30}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
        const isValidUsername = usernameRegex.test(name);
        const isValidPassword = passwordRegex.test(password);

        if (!isValidUsername) {
            alert(`Your name can contain 
                                        Lowercase and uppercase letters (a-z and A-Z)
                                        Numbers (0-9)
                                        Underscore (_)
                                        Hyphen (-)`);
            return;
        } else if (!isValidPassword) {
            alert(`Your password must contains
                        At least one uppercase letter (A-Z)
                        At least 8 characters long
                         And password lenght don't exists 15 characters
                    `);
            return;
        }
        try {
            console.log("working");
            const res = await signIn("credentials", {
                name,
                password,

                redirect: false,
            });
            if (res.ok) {
                router.replace("/");
            }
        } catch (error) {
            alert("Signin faild");
            console.log(error);
        }
    };

    return (
        <section className="grid place-items-center ">
            <div className="mt-20 p-10 flex justify-center items-center flex-col bg-gray-300">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="my-2 py-2 px-3 bg-white">
                        <input
                            type="text"
                            placeholder="Username"
                            className=" border-none outline-none "
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label className="border-none bg-white py-2 px-3  mb-2  flex items-center">
                        <input
                            type={showPassword}
                            placeholder="Password"
                            className="border-none outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className="ml-1"
                            type="button"
                            onClick={() =>
                                setShowPassword((prev) =>
                                    prev === "password" ? "text" : "password",
                                )
                            }
                        >
                            {showPassword === "password" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>
                            )}
                        </button>
                    </label>

                    <button
                        type="submit"
                        className="bg-green-100 p-2 mt-5 hover:bg-red-100 text-xs"
                    >
                        Signin
                    </button>
                </form>
                <p className="text-xs mt-5 ">
                    Don't have an account{" "}
                    <Link href="/signup">
                        <b>Signup</b>
                    </Link>
                </p>
            </div>
        </section>
    );
};

export default Signin;
