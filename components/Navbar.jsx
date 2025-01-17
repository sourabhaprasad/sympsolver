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

      <div className="flex gap-6 items-center font-funnel ">
        <Link href="/" className="text-2xl link">
          Home
        </Link>
        <Link href="/about" className="text-2xl link">
          About
        </Link>
        <Link href="/checker" className="text-2xl link">
          Checker
        </Link>
        <Link href="/chatbot" className="text-2xl link">
          ChatBot
        </Link>
        <Link href="/urgentcare" className="text-2xl link">
          Urgent-Care
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
