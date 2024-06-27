'use client';
import { usePathname } from "next/navigation";

const { default: Link } = require("next/link");

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <>
      <Link href={href} className={path.startsWith(href) ? " text-amber-300 transition duration-300" : undefined}>
        {children}
      </Link>
    </>
  );
};
export default NavLink;
