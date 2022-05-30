import React from "react";
import NavBar from "./NavBar";
import headerImage from "../../Assets/Images/header-images.png";
import "./Header.css";

const Header = () => {
    return (
        <header className="header-bg">
            <div className="shape-bg"></div>
            <NavBar />
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center container">
                <div className="w-4/5">
                    <h1 className="text-6xl font-bold mb-8 leading-snug text-title">Our goal is to achieve success</h1>
                    <p className="mb-8 text-lg text-paragraph">Belonging in september no am immediate newspaper. september she conveying did eat may extensive.</p>
                    <button className="dude-btn">Reviews</button>
                </div>
                <div className="flex justify-end">
                    <img className="w-10/12" src={headerImage} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
