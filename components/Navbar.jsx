"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

import { useColor } from "@/hooks/color";

const Navbar = () => {
    const logoutBg = useColor();
    const hoverBg = useColor();
    const { status: isLogin } = useSession();

    return (
        <nav className="flex_between py-5">
            <Link href="/" className="font-bold text-lg">
                <span className="text-green-500">B</span>-LOG
            </Link>
            <ul className="flex_between gap-2 md:gap-5">
                <li>
                    <Link href="/" className="nav_item">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/blog" className="nav_item">
                        Blog
                    </Link>
                </li>
                {isLogin === "authenticated" ? (
                    <>
                        <li>
                            <Link href="/write" className="nav_item">
                                Write
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    console.log("loging out...");
                                    signOut();
                                }}
                                className={`${logoutBg} px-2 py-1 rounded-sm`}
                            >
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link href="/signin" className="nav_item">
                            Login
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
