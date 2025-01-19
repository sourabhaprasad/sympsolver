import React from "react";
import Link from "next/link";

const Button = ({ text, href }) => {
  return (
    <Link href={href} passHref>
      <button className="bg-blue-500 text-white text-[26px] m-20 font-semibold py-2 px-6 rounded shadow transition duration-300 ease-in-out hover:bg-blue-600">
        {text}
      </button>
    </Link>
  );
};

export default Button;
