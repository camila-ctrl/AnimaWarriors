import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBarButton from "./NavBarButton";

export default function NavBar() {
  const location = useLocation();

  return (
    <nav className="w-full fixed top-0 px-14 h-20 flex justify-between items-center">
      <Link to="/">
        <img src="/icon.svg" alt="Logo"></img>
      </Link>
      <div className="flex gap-20">
        <Link to="/">
          <NavBarButton title="Home" active={location.pathname === "/"} />
        </Link>
        <Link to="/games">
          <NavBarButton
            title="Games"
            active={location.pathname.includes("/games")}
          />
        </Link>
        <Link to="/about-us">
          <NavBarButton
            title="About us"
            active={location.pathname.includes("/about-us")}
          />
        </Link>
        <Link to="/contact">
          <NavBarButton
            title="Contact"
            active={location.pathname.includes("/contact")}
          />
        </Link>
      </div>
    </nav>
  );
}
