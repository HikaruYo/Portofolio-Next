'use client'

import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex gap-8 text-lg">
      <Link
        href="/"
        className={`nav-link ${pathname === "/" ? "active" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`nav-link ${pathname === "/about" ? "active" : ""}`}
      >
        About
      </Link>
      <Link
        href="/skills"
        className={`nav-link ${pathname === "/skills" ? "active" : ""}`}
      >
        Skills
      </Link>
      <Link
        href="/project"
        className={`nav-link ${pathname === "/project" ? "active" : ""}`}
      >
        Project
      </Link>
    </div>
  )
}