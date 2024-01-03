import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";

import connect from "@/utils/connect";
import User from "@/models/User";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",

            async authorize(credentials, req) {
                const { name: username, password } = credentials;

                try {
                    await connect();
                    if (!username || !password)
                        return { error: "username and passwords are required" };
                    const user = await User.findOne({ username });

                    if (user === null) {
                        throw new Error("Username is not exists");
                    }
                    const passwordsMatch = await bcrypt.compare(
                        password,
                        user.password,
                    );

                    if (!passwordsMatch)
                        throw new Error("Password dosn't match");

                    return {
                        name: user.username,
                        image: user.image,
                    };
                } catch (error) {
                    console.log("Error occured", error);
                }
            },
        }),
    ],
    session: {
        strateg: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRECT,
    pages: {
        signIn: "/signin",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
