import { Metadata } from "next";

export default async function Home() {
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
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
