import React from "react";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarStroke } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";

const Review = ({ review }) => {
    const { name, company, picture, rating, reviewText } = review;
    const location = useLocation();
    return (
        <div className="mb-12 md:mb-0">
            <div className="flex justify-center mb-6">
                <img src={picture} className="rounded-full shadow-lg w-32 h-32 object-cover object-top" alt="" />
            </div>
            <h5 className="text-xl font-semibold mb-4">{name}</h5>
            <h6 className="font-semibold text-blue-600 mb-4">{company}</h6>
            <div className="flex justify-center items-center gap-2 mb-4">
                <div className="flex justify-center mb-0 text-yellow-500 text-[15px]">
                    <FontAwesomeIcon icon={rating >= 1 ? faStar : faStarStroke} />
                    <FontAwesomeIcon icon={rating >= 2 ? faStar : faStarStroke} />
                    <FontAwesomeIcon icon={rating >= 3 ? faStar : faStarStroke} />
                    <FontAwesomeIcon icon={rating > 3 && rating < 4 ? faStarHalfStroke : rating >= 4 ? faStar : faStarStroke} />
                    <FontAwesomeIcon icon={rating > 4 && rating < 5 ? faStarHalfStroke : rating >= 5 ? faStar : faStarStroke} />
                </div>
                <div className="rating-in-text">
                    <p>( {rating.toFixed(1)} )</p>
                </div>
            </div>
            <p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        fill="currentColor"
                        d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                    ></path>
                </svg>
                {location.pathname === "/" ? reviewText.slice(0, 150) + "..." : reviewText}
            </p>
        </div>
    );
};

export default Review;
