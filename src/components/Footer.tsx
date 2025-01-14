import Link from "next/link";
import Image from "next/image";
import github from "/public/github.png";

export default function Footer() {
  return (
    <div className="mx-4 p-4">
      <div className="flex justify-center gap-3 text-gray-400 text-xs sm:text-lg">
        <Link className="hover:text-gray-200" href="/">
          Home
        </Link>{" "}
        {"|"}
        <Link className="hover:text-gray-200" href="/about">
          About
        </Link>{" "}
        {"|"}
        <Link className="hover:text-gray-200" href="/privacy-policy">
          Privacy Policy
        </Link>{" "}
        {"|"}
        <Link className="hover:text-gray-200" href="/terms-of-service">
          Terms of service
        </Link>
      </div>
      <div className="text-center flex justify-center itesm-center gap-2 p-3 text-xs sm:text-base md:text-xl">
        &copy;{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
          Next seo;
        </span>{" "}
        {new Date().getFullYear()}
        <Link className="flex items-center gap-2" href="https://github.com/StevenMODIMO/next-seo" target="_blank">
          <p className="text-gray-500 font-semibold">Source code:</p>
          <Image src={github} alt="github" width={20} height={20} />
        </Link>
      </div>
    </div>
  );
}
