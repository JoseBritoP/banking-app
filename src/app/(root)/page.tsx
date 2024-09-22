import HeaderBox from "@/components/shared/HeaderBox";
import TotalBalanceBox from "@/components/shared/HomeComponents/TotalBalanceBox";
import RightSidebar from "@/components/shared/SidebarComponents/rigthSidebar/RightSidebar";
import React from "react";

export default function HomePage() {
  const loggedIn = { firstName: "Adrian", lastName:'Perez',email:'adrian@gmail.com' };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
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


