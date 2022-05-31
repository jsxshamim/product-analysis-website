import React from "react";
import Feature from "./Feature/Feature";
import "./Features.css";
import WhatWeDo from "./WhatWeDo/WhatWeDo";

const Features = () => {
    const features = [
        { id: 1, title: "Management", description: "Years use place decay sax worth drift point table lasting end article express fortune demands own charmed.", icon: "https://i.ibb.co/G2F6bmH/branding.png" },
        { id: 2, title: "Analytic Solutions", description: "Years use place decay sax worth drift point table lasting end article express fortune demands own charmed.", icon: "https://i.ibb.co/0rdXKSw/Interaction.png" },
        { id: 3, title: "Digital Branding", description: "Years use place decay sax worth drift point table lasting end article express fortune demands own charmed.", icon: "https://i.ibb.co/p3q5Jzc/management.png" },
    ];
    return (
        <section className="feature-section">
            <div className="features grid md:grid-cols-3 grid-cols-1 lg:gap-10 gap-5 py-12 px-4 lg:container mx-auto">
                {features.map((feature) => (
                    <Feature key={feature.id} feature={feature}></Feature>
                ))}
            </div>
            <div className="what-we-do">
                <WhatWeDo></WhatWeDo>
            </div>
        </section>
    );
};

export default Features;
