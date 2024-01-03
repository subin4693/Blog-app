import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import connect from "@/utils/connect";

export async function GET(req) {
    await connect();
    try {
        const topViewedBlogs = await Blog.find()
            .sort({ views: -1 })
            .limit(5)
            .select(
                "title category username createdAt content slug image content",
            )
            .exec();

        return new NextResponse(
            JSON.stringify(
                { message: "success", topViewedBlogs },
                { status: 200 },
            ),
        );
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({ message: "faild" }, { status: 500 }),
        );
    }
}
