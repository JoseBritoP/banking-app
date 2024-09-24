import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function AuthHeaderForm({user,type}:{user:any,type:string}) {
  return (
    <header className="flex flex-col">
      <Link href={"/"} className={`mb-12 cursor-pointer items-center justify-center pt-6 gap-2 flex `}>
        <Image
          src={"/icons/logo.svg"}
          width={34}
          height={34}
          alt="Horizon Logo"
          className={`'size-[24px] max-xl:size-14' }`}
        />
        <h1 className={`font-semibold text-3xl text-center`}>Horizon</h1>
      </Link>
      <div className="flex flex-col gap-1 md:gap-3">
        <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
          {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-16 font-normal text-gray-600">
          {user
            ? "Link your account to get started"
            : "Please enter your details"}
        </p>
      </div>
    </header>
  );
}
