import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import connect from "@/utils/connect";
import { v4 as uuidv4 } from "uuid";

export async function POST(req) {
    await connect();
    try {
        let { title, content, username, category, image } = await req.json();

        const cleanedTitle = title
            .replace(/[^\w\s-]/g, "")
            .trim()
            .toLowerCase();
        let slug = cleanedTitle.replace(/\s+/g, "-");
        slug += "-" + uuidv4();

        const blog = new Blog({
            title,

            content,
            username,
            category,
            image,
            slug,
        });

        await blog.save();

        return new NextResponse(
            JSON.stringify({ message: "success" }, { status: 200 }),
        );
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "faild" }, { status: 500 }),
        );
    }
}

export async function GET(req) {
    await connect();
    try {
        let blogs;
        const { searchParams } = new URL(req.url);
        const param = searchParams && searchParams.get("cat");

        if (param.length !== 0) {
            blogs = await Blog.find({ category: { $in: [param] } });

            if (blogs.length <= 0) {
                return new NextResponse(
                    JSON.stringify(
                        { message: "No blog exists" },
                        { status: 500 },
                    ),
                );
            }
            return new NextResponse(
                JSON.stringify({ message: "success", blogs }, { status: 200 }),
            );
        }

        blogs = await Blog.find();

        return new NextResponse(
            JSON.stringify({ message: "success", blogs }, { status: 200 }),
        );
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "faild" }, { status: 500 }),
        );
    }
}
