import HeaderBox from "@/components/shared/HeaderBox";
import TotalBalanceBox from "@/components/shared/HomeComponents/TotalBalanceBox";
import RightSidebar from "@/components/shared/SidebarComponents/rigthSidebar/RightSidebar";
import { getLoggedInUser } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import React from "react";

export default async function HomePage() {
  const loggedIn = await getLoggedInUser()
  if(!loggedIn) redirect('/sign-in')
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext={"Access and manage your account and transactions efficiently"}
          />
          
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.5}
          />
        </header>

        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:500.20}]}
      />
    </section>
  );
}


