"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  {
    text: "Nyayo View suites One",
    href: "https://www.nyayoviewsuites.com/nyayoone",
  },
  { text: "Nyayo View Suites Two", href: "https://www.nyayoviewsuites.com/" },
  { text: "Balozi Suites", href: "https://www.balozisuites.com/" },
  // { text: "The Reveal", href: "https://www.thereveal.co.ke/" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <Image
            src={Logo}
            className="nav-image"
            priority="true"
            height={70}
            alt="reveal logo"
          />
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
