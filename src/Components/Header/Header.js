import React from "react";
import NavBar from "./NavBar";
import "./Header.css";
import HeaderFeature from "./HeaderFeature";
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <header className="header-bg">
            <div className="shape-bg"></div>
            <NavBar />
            {location.pathname === "/" && <HeaderFeature />}
        </header>
    );
};

export default Header;
