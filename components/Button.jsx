import React from "react";
import Link from "next/link";

const Button = ({ text, href }) => {
  return (
    <Link href={href} passHref>
      <button className="bg-blue-500 text-white text-lg m-20 font-semibold p-2 px-3 rounded shadow transition duration-300 ease-in-out hover:bg-blue-600">
        {text}
      </button>
    </Link>
  );
};

export default Button;
