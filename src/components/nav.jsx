import React from "react";
import { ModeToggle } from "./mode-toggle";
import { useTranslation } from "react-i18next";
import logo from "../../public/images/logo.png";
import { Button } from "./ui/button";
import { Link, NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Nav = () => {
  const { t, i18n } = useTranslation();

  function changeLang(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <nav className="fixed bg-gray-200 dark:bg-black z-10 top-0 left-0 right-0">
      <div className="max-w-7xl flex justify-between items-center m-auto p-5">
        <Link to={'/'}>
        <img width={200} className="drop-shadow-lg" src={logo} alt="logo" />
        </Link>

        <ul className="hidden lg:flex font-medium items-center gap-5">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-[#8c00ff]" : "text-foreground"}>{t("nav.0")}</NavLink>
          <NavLink to="/tarif" className={({ isActive }) => isActive ? "text-[#8c00ff]" : "text-foreground"}>{t("nav.1")}</NavLink>
          <NavLink to="/work" className={({ isActive }) => isActive ? "text-[#8c00ff]" : "text-foreground"}>{t("nav.2")}</NavLink>
          <NavLink to="/check" className={({ isActive }) => isActive ? "text-[#8c00ff]" : "text-foreground"}>{t("nav.3")}</NavLink>
          <NavLink to="/s" className={({ isActive }) => isActive ? "text-[#8c00ff]" : "text-foreground"}>{t("nav.4")}</NavLink>
          <NavLink to="/a" className={({ isActive }) => isActive ? "text-[#8c00ff]" : "text-foreground"}>{t("nav.5")}</NavLink>
        </ul>


        <div className="flex relative font-bold gap-1">
          <span onClick={() => changeLang("en")}>en</span>
          <span>|</span>
          <span onClick={() => changeLang("ru")}>ru</span>
          <span>|</span>
          <span onClick={() => changeLang("tj")}>tj</span>
        </div>
        <ModeToggle />
        <Button className="bg-[#00000000] hidden lg:flex text-black dark:text-white py-5 px-10 border-2 border-[#07DBB4]">
          {t("nav.6")}
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="lg:hidden">
            ☰
          </DropdownMenuTrigger>
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
              <NavLink to="/s">{t("nav.4")}</NavLink>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <NavLink to="/a">{t("nav.5")}</NavLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Nav;
