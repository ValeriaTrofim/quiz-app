"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoCodescan } from "react-icons/go";
import classnames from "classnames";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Categories", href: "/categories" },
  ];

  return (
    <nav className="flex space-x-6 border-b border-slate-400 mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GoCodescan />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-indigo-100": link.href === currentPath,
              "text-indigo-200": link.href !== currentPath,
              "hover:text-indigo-100 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default NavBar;
