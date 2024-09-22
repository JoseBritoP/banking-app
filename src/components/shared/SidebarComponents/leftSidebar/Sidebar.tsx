import React from "react";
import SidebarContent from "./SidebarContent";

export default function Sidebar({ user }: SiderbarProps) {
  // TODO: Fix src logo
  return (
    <section className="sidebar">
     <SidebarContent user={user}/>
      FOOTER
    </section>
  );
}
