import Link from "next/link";
import React from "react";
import logo from "@/assets/book.ico";
import Image from "next/image";

const Navbar = () => {
  const link = (
    <>
      <li className="btn btn-outline btn-success">
        <Link href="/"> Home</Link>
      </li>

      <li>
        <Link href="/Listed-Books"> Listed Books</Link>
      </li>
      <li>
        <Link href="/Pages-to-Read">Pages to Read</Link>
      </li>
    </>
  );
  return (
    <nav className=" bg-base-100 shadow-s">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="Brand Logo"></Image>
            <a className="btn btn-ghost text-xl">BookVibe</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-1.5">
          <button className="btn btn-primary">Sign In</button>
          <button className="btn btn-secondary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
