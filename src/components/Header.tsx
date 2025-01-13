import Image from "next/image";
import logo from "/public/logo.png";

export default function Header() {
  return (
    <div className="shadow">
      <nav className="flex justify-center gap-2 items-center p-2">
        <Image src={logo} alt="next-seo-logo" width={28} height={28} />
        <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-pink-500 sm:text-xl">
          Next seo
        </span>
      </nav>
    </div>
  );
}
