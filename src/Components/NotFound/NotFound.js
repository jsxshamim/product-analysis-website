import React from "react";
import { Link } from "react-router-dom";
import imo from "../../Assets/Images/not-found-emo.gif";

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center ">
            <img className="w-1/6" src={imo} alt="" />
            <h1 className="text-9xl font-bold font-mono mb-5">404</h1>
            <h4 className="text-4xl">Page not found</h4>
            <p className="text-xl mt-3 w-1/2 text-center">
                The Page you are looking for doesn't exist or an other error occurred . Go back, or head over to{" "}
                {
                    <Link className="hover:text-title text-secondary" to={"/"}>
                        www.thedigitaldudes.com
                    </Link>
                }{" "}
                to choose a new direction
            </p>
        </div>
    );
};

export default NotFound;
