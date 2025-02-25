"use client";
import { useState } from "react";
// import { Metadata } from "next";
// only use dynamic to load components when the size of the component is significantly large
export default function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}

// export const metadata: Metadata = {
//   title: "...",
//   description: "...",
// };

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch("");

//   return {
//     title: "product.title",
//     description: "....",
//   };
// }
