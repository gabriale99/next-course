import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users">Users</Link>
      {/* 1. Only downloads the content of the target page | 2. Pre-fetches links that are in the viewport | 3. Caches pages on the client */}
      <ProductCard />
    </main>
  );
}
