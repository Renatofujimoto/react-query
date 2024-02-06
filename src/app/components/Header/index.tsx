"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const Header = () => {
  const router = useRouter();

  return (
    <header>
      <Link legacyBehavior href="/">
        <p>Home</p>
      </Link>

      <Link legacyBehavior href="/client-only">
        <p>Client-only</p>
      </Link>

      <style jsx>{`
        header {
          margim-bottom: 25px;
        }
        a {
          font-size: 14px;
          margim-bottom: 15px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
};
