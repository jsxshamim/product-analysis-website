import { faBox, faBullseye, faFingerprint, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhatWeDo = () => {
    const serviceItems = [
        { id: 1, title: "Digital Products", description: "Preferred joy agreement put continual felicity elsewhere delivered now collect authority.", icon: faFingerprint, iconColor: "bg-sky-400" },
        { id: 2, title: "Marketing Strategy", description: "Preferred joy agreement put continual felicity elsewhere delivered now collect authority.", icon: faSquarePollVertical, iconColor: "bg-pink-600" },
        { id: 3, title: "Digital branding", description: "Preferred joy agreement put continual felicity elsewhere delivered now collect authority.", icon: faBullseye, iconColor: "bg-blue-500" },
        { id: 4, title: "Social Media", description: "Preferred joy agreement put continual felicity elsewhere delivered now collect authority.", icon: faBox, iconColor: "bg-orange-500" },
    ];
    return (
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-16 items-center py-10 container mx-auto">
            <div className="lg:col-span-5 lg:text-left text-center">
                <h4 className="mb-5 text-1xl font-semibold text-secondary">WHAT WE DO</h4>
                <h2 className="mb-5 font-semibold text-4xl text-title leading-snug">Let's Check our scientific Digital solutions</h2>
                <p className="mb-5 text-paragraph">
                    Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so
                    life past. Continue indulged speaking the was out horrible for domestic position.
                </p>
                <button className="dude-btn">Discover More</button>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 lg:text-left text-center">
                {serviceItems.map((item) => (
                    <div key={item.id} className="item mb-10">
                        <FontAwesomeIcon className={`${item.iconColor} text-white text-4xl p-5 w-10 h-10 object-cover rounded-full mb-5`} icon={item.icon} />
                        <h4 className="text-2xl text-title font-semibold mb-5">{item.title}</h4>
                        <p className="text-paragraph">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeDo;
