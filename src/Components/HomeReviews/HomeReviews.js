import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../Hooks/useReviews";
import HomeReview from "./HomeReview/HomeReview";

const HomeReviews = () => {
    const [reviews] = useReviews();

    // for set onClick path
    const navigate = useNavigate();

    return (
        <section className="text-gray-700 container mx-auto py-24">
            <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                <h4 className="text-1xl font-bold mb-3 text-secondary">REVIEW</h4>
                <h2 className="text-3xl font-bold mb-6 text-title">Happy Customers</h2>
                <p className="mb-6 pb-2 md:mb-12 md:pb-0">
                    We offer the best customer service for all your tech needs. We are committed to providing the best customer service experience possible. We are not just your average customer service team, we are Digital Dudes!
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-12 text-center">
                {reviews.slice(0, 3).map((review) => (
                    <HomeReview key={review._id} review={review} />
                ))}
            </div>
            <button onClick={() => navigate("/reviews")} className="dude-btn flex mx-auto mt-10">
                See All Reviews
            </button>
        </section>
    );
};

export default HomeReviews;
