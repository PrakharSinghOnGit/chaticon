"use client";
import React from "react";
import { setTheme } from "../service/themes/theme.provider";

const Page = () => {
  return (
    <main className="flex min-h-screen p-3 gap-3 items-center">
      <h1>Hello WOrld</h1>
      <div className="bg-backgroundColor flex w-3/12 min-w-min p-3 flex-col items-center gap-3 flex-shrink-0 self-stretch rounded-xl">
        <button onClick={() => setTheme("dark")} className="text-textColor">
          Theme Dark
        </button>
        <button onClick={() => setTheme("light")} className="text-textColor">
          Theme Light
        </button>{" "}
        <button onClick={() => setTheme("lava")} className="text-textColor">
          {" "}
          Theme Lava
        </button>
      </div>
    </main>
  );
};

export default Page;
