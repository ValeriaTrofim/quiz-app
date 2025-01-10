import Link from "next/link";
import { GiCapybara } from "react-icons/gi";

const NavBar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Questions", href: "/questions" },
  ];

  return (
    <nav className="flex space-x-6 border-b border-slate-400 mb-5 px-5 h-14 items-center">
      <Link href="/">
        <GiCapybara />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className="text-slate-300 hover:text-white transition-colors"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
