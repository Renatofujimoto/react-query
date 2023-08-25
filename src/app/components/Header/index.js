"use client"
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
    const { pathname } = useRouter();

    return (
        <header>
            <Link legacyBehavior href="/">
                <a className={pathname === "/" ? "is-active" : ""}>Home</a>
            </Link>

            <Link legacyBehavior href="/client-only">
                <a className={pathname === "/client-only" ? "is-active" : ""}>
                    Client-only
                </a>
            </Link>

            <style jsx>{`
                header {
                    margim-bottom:25px;
                }
                a {
                    font-size:14px;
                    margim-bottom:15px;
                    text-decoration:none;
                }
                .is-active {
                text-decoration: underline;
                }
            `}</style>
        </header>
    )
}