import React from "react";
import Seperator from "../components/Seperator";
import UserCard from "./UserCard";

const Page = () => {
  return (
    <main className="bg-backgroundColor flex min-h-screen py-3 gap-3 items-center">
      <div className="bg-sectionColor w-3/12 min-w-min flex p-3 flex-col items-center gap-3 flex-shrink-0 self-stretch rounded-r-xl">
        <div className="bg-backgroundColor w-full min-w-min flex p-3 flex-col items-center gap-3 self-stretch rounded-xl">
          <input type="text" placeholder="Serach Here ..." />
        </div>
        <Seperator />
        <UserCard
          img={
            "https://lh3.googleusercontent.com/a/ACg8ocJy2t4C7jxhf1Q1-vB9_ykVZXPIwNjZiOeHR3kH7jthWJvr=s576-c-no"
          }
          name={"Shaan Singh"}
          msg={
            "Hello thsi is a  lorem ipsum message thsi is a  lorem ipsum message liash fasldf ladhsfljhas dlfh lasd hfl asdlf "
          }
          time={"Yesterday"}
          unread={10}
        />
      </div>
      <div className="bg-sectionColor min-w-min flex p-3 flex-col items-center gap-3 flex-grow self-stretch rounded-xl "></div>
    </main>
  );
};

export default Page;
