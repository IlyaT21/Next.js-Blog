import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full max-w-[1360px] mx-auto gap-8 mb-16 mt-8">
      <Link className="flex flex-row items-center gap-4" href="/">
        <Image src="/logo.svg" alt="Logo" width={48} height={48} />
        Next Blog
      </Link>
    </div>
  );
}

export default Header;
