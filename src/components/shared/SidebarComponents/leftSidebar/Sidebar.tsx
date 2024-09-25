import React from "react";
import SidebarContent from "./SidebarContent";
import FooterLS from "./FooterLS";

export default function Sidebar({ user }: SiderbarProps) {
  // TODO: Fix src logo
  return (
    <section className="sidebar">
     <SidebarContent user={user}/>
      <FooterLS user={user}/>
    </section>
  );
}
