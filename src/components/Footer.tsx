import Link from "next/link";

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
      <p className="text-center">
        &copy;{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500">
          Next seo;
        </span>{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  );
}
