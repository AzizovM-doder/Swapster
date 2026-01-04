import React from "react";
import { ModeToggle } from "./mode-toggle";
import logo from "../../public/images/logo.png";
import { Button } from "./ui/button";
import { Link, NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import LanguageSelect from "./s";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const {t, i18n} = useTranslation()
  return (
    <nav className="fixed bg-gray-200 dark:bg-black z-10 top-0 left-0 right-0">
      <div className="max-w-7xl flex justify-between items-center m-auto p-5">
        <Link to={"/"}>
          <img width={120}  className="drop-shadow-lg mt-1 lg:w-50" src={logo} alt="logo" />
        </Link>

        <ul className="hidden lg:flex font-medium items-center gap-5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#8c00ff]" : "text-foreground"
            }
          >
            {t("nav.0")}
          </NavLink>
          <NavLink
            to="/tarif"
            className={({ isActive }) =>
              isActive ? "text-[#8c00ff]" : "text-foreground"
            }
          >
            {t("nav.1")}
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              isActive ? "text-[#8c00ff]" : "text-foreground"
            }
          >
            {t("nav.2")}
          </NavLink>
          <NavLink
            to="/check"
            className={({ isActive }) =>
              isActive ? "text-[#8c00ff]" : "text-foreground"
            }
          >
            {t("nav.3")}
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-[#8c00ff]" : "text-foreground"
            }
          >
            {t("nav.4")}
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? "text-[#8c00ff]" : "text-foreground"
            }
          >
            {t("nav.5")}
          </NavLink>
        </ul>

        <LanguageSelect />
        <ModeToggle />
        <Link to={'/bitcoin'}>
          <Button className="bg-[#00000000] hidden lg:flex text-black dark:text-white py-5 px-10 border-2 border-[#07DBB4]">
            {t("nav.6")}
          </Button>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden">☰</DropdownMenuTrigger>
          <DropdownMenuContent className="w-40">
            <DropdownMenuItem asChild>
              <NavLink to="/">{t("nav.0")}</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/tarif">{t("nav.1")}</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/work">{t("nav.2")}</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/check">{t("nav.3")}</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/blog">{t("nav.4")}</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/support">{t("nav.5")}</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Nav;
