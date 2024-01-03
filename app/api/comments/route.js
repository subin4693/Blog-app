import { NextResponse } from "next/server";
import Comment from "@/models/Comment";
import Blog from "@/models/Blog";

import connect from "@/utils/connect";

export async function POST(req) {
    await connect();
    try {
        const { comment_text, username, post_slug } = await req.json();
        const commentResponse = new Comment({
            username,
            comment_text,
            slug: post_slug,
        });
        const commentRet = await commentResponse.save();

        return new NextResponse(
            JSON.stringify(
                { message: "success", comments: commentRet },
                { status: 201 },
            ),
        );
    } catch (error) {
        console.error(error);
        return new NextResponse(
            JSON.stringify({ message: "Failed" }, { status: 500 }),
        );
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const postSlug = searchParams.get("slug");

    try {
        const comments = await Comment.find({ slug: postSlug })
            .maxTimeMS(20000)
            .populate({
                path: "username",
                select: "username image",
                localField: "username",
                foreignField: "username",
            })
            .exec();

        return new NextResponse(
            JSON.stringify({ message: "success", comments }),
            { status: 200 },
        );
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "Field" }, { status: 500 }),
        );
    }
}
