"use client";
// Path: app\components\Navbar.jsx
import Link from "next/link";
import {signOut} from "next-auth/react";

export default function Navbar({session}) {
  console.log(session);
  return (
    <nav className="bg-gray-300 flex justify-between px-8">
      <div>
        <h2>Logo</h2>
      </div>
      <div>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-4">
        <p>{session?.user?.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    </nav>
  );
}
