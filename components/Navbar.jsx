"use client";
import Link from "@node_modules/next/link";
import Image from "@node_modules/next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full mb-16 p-3  bg-[#EBDAD2]">
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

      <div className="flex gap-4 items-center text-[20px] font-funnel ">
        <Link href="/" className="link">
          Home
        </Link>
        <Link href="/about" className="link">
          About
        </Link>
        <Link href="/checker" className="link">
          Checker
        </Link>
        <Link href="/chatbot" className="link">
          ChatBot
        </Link>
        <Link href="/urgentcare" className="link">
          Urgent-Care
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
