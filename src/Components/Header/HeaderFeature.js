import React from "react";
import headerImage from "../../Assets/Images/header-images.png";

const HeaderFeature = () => {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center container mx-auto">
            <div>
                <h1 className="text-6xl font-bold mb-8 leading-snug text-title">Our goal is to achieve success</h1>
                <p className="mb-8 text-lg text-paragraph">Belonging in september no am immediate newspaper. september she conveying did eat may extensive.</p>
                <button className="dude-btn">Reviews</button>
            </div>
            <div className="flex justify-end">
                <img className="w-11/12" src={headerImage} alt="" />
            </div>
        </div>
    );
};

export default HeaderFeature;
