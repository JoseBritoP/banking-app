import MobileNav from "@/components/shared/SidebarComponents/leftSidebar/MobileNav";
import Sidebar from "@/components/shared/SidebarComponents/leftSidebar/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";


export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = await getLoggedInUser()

  if(!loggedIn) redirect('/sign-in')
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src={'/icons/logo.svg'}
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
