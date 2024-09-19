import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-200 w-[80%] mx-auto flex items-center font-semibold gap-4">
      <header className="relative h-20 w-20">
        <Link href="/">
          <Image src="./icon.svg" alt="logo" fill />
        </Link>
      </header>
      <section className="flex gap-4">
        <Link href="/terms-of-service">Terms of service</Link>
        <Link href="/privacy-policy">Privacy policy</Link>
        <Link href="/user-agreement">User agreements</Link>
      </section>
      <section className="font-thin ml-24">
        &copy; 2024, <span className="font-semibold">Random blogs.io</span> All rights reserved.
      </section>
    </footer>
  );
}
