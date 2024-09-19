"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <main className="w-[80%] mx-auto border-b-2 border-gray-200">
      <header className="relative h-20 w-20">
        <Link href="/">
          <Image src="./icon.svg" alt="logo" fill />
        </Link>
      </header>
    </main>
  );
}
