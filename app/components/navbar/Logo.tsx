"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        alt="Logo"
        className="hidden md:block cursor-pointer"
        src="/images/logo.png"
        width="100"
        height="100"
      ></Image>
    </div>
  );
};

export default Logo;
