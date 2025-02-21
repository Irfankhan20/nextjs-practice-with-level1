"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (!pathname.includes("dashboard")) {
    return (
      <div>
        <nav className="flex justify-center items-center">
          <ul className="flex justify-between w-1/2">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/about">
              <li>About </li>
            </Link>
            <Link href="/posts">
              <li>Posts </li>
            </Link>
            <Link href="/meals">
              <li>Meals </li>
            </Link>
            <Link href="/products">
              <li>Products </li>
            </Link>
            <Link href="/products/add">
              <li>Add Products </li>
            </Link>
            <Link href="/login">
              <li>
                <button onClick={() => signIn()} className="btn btn-accent">
                  Login
                </button>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
