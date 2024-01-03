import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import connect from "@/utils/connect";

export async function GET(req, { params }) {
    const { slug } = params;
    console.log(slug);
    await connect();

    try {
        const blog = await Blog.findOne({ slug })
            .populate({
                path: "username",
                select: "username image",
                localField: "username",
                foreignField: "username",
            })
            .exec();
        blog.views = blog.views + 1;
        blog.save();

        return new NextResponse(
            JSON.stringify({ message: "success", blog }, { status: 200 }),
        );
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "faild" }, { status: 500 }),
        );
    }
}
