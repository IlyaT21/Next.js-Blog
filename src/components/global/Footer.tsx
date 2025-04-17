import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col items-center w-full max-w-[1360px] mx-auto gap-8 mt-16 mb-8">
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Made by{" "}
        <Link
          className="text-lg font-semibold"
          href="https://ilijatoskovic.com/"
          target="_blank"
        >
          IlyaT21
        </Link>
      </p>
    </div>
  );
}

export default Footer;
