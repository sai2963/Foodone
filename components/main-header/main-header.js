import Link from "next/link";
import MainLogo from "@/assets/logo.png"; // Make sure to import your logo properly
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className="relative z-10 pt-5 ">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image src={MainLogo} alt="Logo" className="w-16 h-18" />
            <span className="text-2xl font-semibold text-amber-300 transition duration-300">
              Next Level Food
            </span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li className="text-gray-100 hover:text-amber-300 transition duration-300">
                <NavLink
                  href="/meals"
                  className="text-gray-100 hover:text-amber-300 transition duration-300"
                >
                  Meals
                </NavLink>
              </li>
              <li className="text-gray-100 hover:text-amber-300 transition duration-300">
                <NavLink
                  href="/community"
                  className="text-gray-100 hover:text-amber-300 transition duration-300"
                >
                  Community
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
