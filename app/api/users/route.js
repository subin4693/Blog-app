import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import connect from "@/utils/connect";
import User from "@/models/User";

export async function POST(req) {
    const { username, password, image } = await req.json();
    try {
        await connect();
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            password: hashedPassword,
            image,
        });
        await user.save();
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
