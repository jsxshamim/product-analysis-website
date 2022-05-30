import { faBox, faBullseye, faFingerprint, faSquarePollVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhatWeDo = () => {
    return (
        <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4">
                <h4 className="mb-5 text-1xl font-semibold text-secondary">WHAT WE DO</h4>
                <h2 className="mb-5 font-semibold text-4xl text-title">Let's Check our scientific Digital solutions</h2>
                <p className="mb-5 text-paragraph">
                    Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so
                    life past. Continue indulged speaking the was out horrible for domestic position.
                </p>
                <button className="dude-btn">Discover More</button>
            </div>
            <div className="col-span-8 grid grid-cols-2">
                <div className="item">
                    <FontAwesomeIcon icon={faFingerprint} />
                    <h4>Digital Products</h4>
                    <p>Preferred joy agreement put continual felicity elsewhere delivered now collect authority.</p>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faSquarePollVertical} />
                    <h4>Digital Products</h4>
                    <p>Preferred joy agreement put continual felicity elsewhere delivered now collect authority.</p>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faBullseye} />
                    <h4>Digital Products</h4>
                    <p>Preferred joy agreement put continual felicity elsewhere delivered now collect authority.</p>
                </div>
                <div className="item">
                    <FontAwesomeIcon icon={faBox} />
                    <h4>Digital Products</h4>
                    <p>Preferred joy agreement put continual felicity elsewhere delivered now collect authority.</p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
