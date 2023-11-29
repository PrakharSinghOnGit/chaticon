"use client";
import React, { useState } from "react";
import Seperator from "../components/Seperator";
import UserCard from "./UserCard";

const Page = () => {
  const [sidebarWidth, setSidebarWidth] = useState(300); // Initial width of the sidebar

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const newWidth = e.clientX;
    const clampedWidth = Math.min(Math.max(newWidth, 250), 500);

    setSidebarWidth(clampedWidth);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <main className="bg-backgroundColor flex min-h-screen py-3 gap-0 items-center">
      <div
        style={{ width: sidebarWidth }}
        className="bg-sectionColor flex p-3 flex-col items-center gap-3 flex-shrink-0 self-stretch rounded-r-xl"
      >
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
            "Hello thsi is a  lorem ipsum message thsi is a  lorem ipsum message liash fasldf ladhsfljhas dlfh lasd hfl asdlf"
          }
          time={"Yesterday"}
          unread={10}
        />
      </div>
      <div
        onMouseDown={handleMouseDown}
        className="p-2 resizerCon cursor-col-resize"
      >
        <div className="resizer transition-all w-1 h-10 rounded-full bg-black"></div>
      </div>
      <div className="bg-sectionColor min-w-min flex p-3 flex-col items-center gap-3 flex-grow self-stretch rounded-l-xl"></div>
    </main>
  );
};

export default Page;
