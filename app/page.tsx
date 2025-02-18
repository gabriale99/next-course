import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      {/* 1. Only downloads the content of the target page | 2. Pre-fetches links that are in the viewport | 3. Caches pages on the client */}
      <ProductCard />
    </main>
  );
}
