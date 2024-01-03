import Category from "@/models/Category";
import connect from "@/utils/connect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connect();

        const categorys = await Category.find();

        return new NextResponse(
            JSON.stringify(
                {
                    message: "success",
                    categorys,
                },
                { status: 200 },
            ),
        );
    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify(
                {
                    message: "faild",
                },
                { status: 500 },
            ),
        );
    }
}
