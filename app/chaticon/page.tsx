"use client";
import React from "react";

const Page = () => {
  return (
    <main
      className="flex min-h-screen p-3 gap-3 items-cente"
      style={{ backgroundColor: "var(--backgroundColor)" }}
    >
      <h1>Hello WOrld</h1>
      <div className="flex w-3/12 min-w-min p-3 flex-col items-center gap-3 flex-shrink-0 self-stretch rounded-xl"></div>
    </main>
  );
};

export default Page;
