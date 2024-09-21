import MobileNav from "@/components/shared/SidebarComponents/MobileNav";
import Sidebar from "@/components/shared/SidebarComponents/Sidebar";
import Image from "next/image";
import mainLogo from '@/public/icons/logo.svg'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Adrian", lastName: "Invernizzio" };
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src={mainLogo}
            alt="menu icon"
            width={30}
            height={30}
          />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
