import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <h1>Header H1</h1>
      <SearchBar />
    </header>
  );
}