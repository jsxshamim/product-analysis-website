import React from "react";

const Feature = ({ feature }) => {
    return (
        <div>
            <div className={`bg-white text-center lg:p-10 p-6 rounded-lg h-fit ${feature.id === 1 ? "lg:mt-10" : feature.id === 2 ? "lg:mt-32" : "lg:mt-52"} shadow-xl`}>
                <h4 className="text-2xl font-bold mb-5 text-title">{feature.title}</h4>
                <p className="text-paragraph mb-5">{feature.description}</p>
                <img className="w-36 h-36 m-auto" src={feature.icon} alt="" />
            </div>
        </div>
    );
};

export default Feature;
