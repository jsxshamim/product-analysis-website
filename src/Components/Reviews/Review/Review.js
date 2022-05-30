import React from "react";
import Rating from "../../HomeReviews/HomeReview/Rating";
import "./Review.css";

const Review = ({ review }) => {
    const { name, company, picture, rating, reviewText } = review;
    return (
        <div className="mb-10 border-b pb-10">
            <div className="review-header flex items-center gap-4">
                <img className="w-20 h-20 object-cover object-top rounded-full shadow" src={picture} alt="" />
                <div className="review-rating">
                    <h4 className="font-bold">{name}</h4>
                    <h4>{company}</h4>
                    <Rating rating={rating} />
                </div>
            </div>
            <div className="review-text mt-5 italic">
                <blockquote>"{reviewText}"</blockquote>
            </div>
        </div>
    );
};

export default Review;
