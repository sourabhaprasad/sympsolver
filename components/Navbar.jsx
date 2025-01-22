"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-between w-full mb-16 p-3 bg-[#EBDAD2]">
      <Link href="/" className="flex gap-2 items-center">
        <Image
          src="/images/logo.png"
          width={70}
          height={70}
          className="object-contain"
          alt="SympSolver Logo"
        />
        <p className="font-handlee text-3xl font-bold">SympSolver</p>
      </Link>
      <div className="flex gap-4 items-center text-[20px] font-funnel">
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Checker", href: "/checker" },
          { name: "ChatBot", href: "/chatbot" },
          { name: "Urgent-Care", href: "/urgentcare" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`link ${pathname === link.href ? "text-blue-500" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
