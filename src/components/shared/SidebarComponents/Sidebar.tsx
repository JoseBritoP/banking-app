import Image from "next/image";
import Link from "next/link";
import React from "react";
import SidebarLinks from "./SidebarLinks";
import logo from '../../../public/icons/logo.svg'

export default function SideBar({ user }: SiderbarProps) {
  // TODO: Fix src logo
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href={"/"} className="mb-12 curspor-pointer items-center gap-2">
          <Image
            src={logo}
            width={34}
            height={34}
            alt="Horizon Logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        <SidebarLinks/>
        USER
      </nav>
      FOOTER
    </section>
  );
}
