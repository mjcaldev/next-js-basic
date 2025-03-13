'use client'

import Link from "next/link";
import { useState } from 'react';

export default function Header() {
  const [search, setSearch] = useState("");
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <h1>Header H1</h1>
      <h5>{search}</h5>
      <input 
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
    </header>
  );
}