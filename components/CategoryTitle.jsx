"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useColor } from "@/hooks/color";
const CategoryTitle = ({ title, image }) => {
    const colorsArr = [
        "bg-purple-200",
        "bg-blue-200",
        "bg-yellow-200",
        "bg-rose-200",
        "bg-green-300",
        "bg-gray-200",
        "bg-lime-300",
        "bg-indigo-300",
        "bg-pink-300",
    ];

    // const color = colorsArr[Math.floor(Math.random() * colorsArr.length)];

    const color = useColor();
    return (
        <Link
            href={`/blog?cat=${title}`}
            className={`${color} capitalize  flex justify-center items-center px-4 py-1 rounded-md w-full ssm:w-fit`}
        >
            {image && (
                <div className="relative w-[2rem] h-[2rem] mr-2 ">
                    <Image
                        src={image}
                        fill="true"
                        className="rounded-full object-fit absolute"
                        alt="image"
                    />
                </div>
            )}
            {title}
        </Link>
    );
};

export default CategoryTitle;
