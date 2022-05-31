import React from "react";
import { Link } from "react-router-dom";
import headerImage from "../../Assets/Images/header-images.png";

const HeaderFeature = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 items-center container mx-auto">
            <div>
                <h1 className="lg:text-6xl text-4xl font-bold mb-8 leading-snug text-title">Our goal is to achieve success</h1>
                <p className="mb-8 text-lg text-paragraph">Belonging in september no am immediate newspaper. september she conveying did eat may extensive.</p>
                <Link to={"/reviews"} className="dude-btn">
                    Reviews
                </Link>
            </div>
            <div className="md:flex justify-end md:mt-0 mt-10">
                <img className="md:w-11/12 w-full" src={headerImage} alt="" />
            </div>
        </div>
    );
};

export default HeaderFeature;
