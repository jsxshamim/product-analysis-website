import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ReviewProgress = ({ starPercentage, numberOfRate }) => {
    return (
        <div className="flex items-center gap-2 mb-3">
            <span>{numberOfRate}</span>
            <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`bg-yellow-400 h-2.5 rounded-full w-[${starPercentage}%]`}></div>
            </div>
            <span>{starPercentage}%</span>
        </div>
    );
};

export default ReviewProgress;
