"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 shadow-lg">
      <div className="container flex items-center justify-between mx-auto px-4 py-4">
        <Link href={"/"} className="text-3xl md:text-4xl text-white font-bold">
          WISDOM DZONTOH
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="text-white focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className={`md:flex ${navbarOpen ? "block" : "hidden"} w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="my-2 md:my-0">
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
