import React from "react";
import Seperator from "../components/Seperator";
import UserCard from "./UserCard";

const Page = () => {
  return (
    <main className="bg-backgroundColor flex min-h-screen p-3 gap-3 items-center">
      <div className="bg-sectionColor w-3/12 min-w-min flex p-3 flex-col items-center gap-3 flex-shrink-0 self-stretch rounded-xl">
        <div className="bg-backgroundColor w-full min-w-min flex p-3 flex-col items-center gap-3 self-stretch rounded-xl">
          <input type="text" placeholder="Serach Here ..." />
        </div>
        <Seperator />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
      <div className="bg-sectionColor min-w-min flex p-3 flex-col items-center gap-3 flex-grow self-stretch rounded-xl"></div>
    </main>
  );
};

export default Page;
