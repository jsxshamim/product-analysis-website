import React from "react";
import "./Features.css";
import WhatWeDo from "./WhatWeDo";

const Features = () => {
    const features = [
        { id: 1, title: "Management", description: "Years use place decay sax worth drift point table lasting end article express fortune demands own charmed.", icon: "https://i.ibb.co/G2F6bmH/branding.png" },
        { id: 2, title: "Analytic Solutions", description: "Years use place decay sax worth drift point table lasting end article express fortune demands own charmed.", icon: "https://i.ibb.co/0rdXKSw/Interaction.png" },
        { id: 3, title: "Digital Branding", description: "Years use place decay sax worth drift point table lasting end article express fortune demands own charmed.", icon: "https://i.ibb.co/p3q5Jzc/management.png" },
    ];
    return (
        <section className="feature-section container">
            <div className="features grid lg:grid-cols-3 grid-cols-1 gap-10 py-12">
                {features.map((feature) => (
                    <div className={`bg-white text-center p-10 rounded-lg h-fit ${feature.id === 1 ? "mt-10" : feature.id === 2 ? "mt-32" : "mt-52"} shadow-xl`}>
                        <h4 className="text-2xl font-bold mb-5 text-title">{feature.title}</h4>
                        <p className="text-paragraph mb-5">{feature.description}</p>
                        <img className="w-44 h-44 m-auto" src={feature.icon} alt="" />
                    </div>
                ))}
            </div>
            <WhatWeDo></WhatWeDo>
        </section>
    );
};

export default Features;
