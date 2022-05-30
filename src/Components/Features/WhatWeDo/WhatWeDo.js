import { faBox, faBullseye, faFingerprint, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhatWeDo = () => {
    const serviceItems = [
        { id: 1, title: "Digital Products", description: "Preferred joy agreement put continual felicity elsewhere delivered now collect authority.", icon: faFingerprint, iconColor: "#2eacfc" },
        { id: 2, title: "Marketing Strategy", description: "Preferred joy agreement put continual felicity elsewhere delivered now collect authority.", icon: faSquarePollVertical, iconColor: "#ea4c89" },
        { id: 3, title: "Digital branding", description: "Preferred joy agreement put continual felicity elsewhere delivered now collect authority.", icon: faBullseye, iconColor: "#3578ff" },
        { id: 4, title: "Social Media", description: "Preferred joy agreement put continual felicity elsewhere delivered now collect authority.", icon: faBox, iconColor: "#ea4c89" },
    ];
    return (
        <div className="grid grid-cols-12 gap-10 items-center py-10">
            <div className="col-span-5 w-10/12">
                <h4 className="mb-5 text-1xl font-semibold text-secondary">WHAT WE DO</h4>
                <h2 className="mb-5 font-semibold text-4xl text-title">Let's Check our scientific Digital solutions</h2>
                <p className="mb-5 text-paragraph">
                    Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so
                    life past. Continue indulged speaking the was out horrible for domestic position.
                </p>
                <button className="dude-btn">Discover More</button>
            </div>
            <div className="col-span-7 grid grid-cols-2">
                {serviceItems.map((item) => (
                    <div className="item mb-10">
                        <FontAwesomeIcon className={`bg-[${item.iconColor}] text-white text-4xl p-5 w-10 h-10 rounded-full mb-5`} icon={item.icon} />
                        <h4 className="text-2xl text-title font-semibold mb-5">{item.title}</h4>
                        <p className="text-paragraph">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhatWeDo;
