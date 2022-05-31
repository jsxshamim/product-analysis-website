import React from "react";
import { ratingToPercentage } from "../../Utilities/ConvertRatingToPercentage";
import Rating from "../HomeReviews/HomeReview/Rating";
import useReviews from "../Hooks/useReviews";
import Review from "./Review/Review";
import ReviewProgress from "./ReviewProgress";

const Reviews = () => {
    const [reviews] = useReviews();

    const star5 = reviews.filter((review) => review.rating === 5);
    const star4 = reviews.filter((review) => review.rating >= 4 && review.rating < 5);
    const star3 = reviews.filter((review) => review.rating >= 3 && review.rating < 4);
    const star2 = reviews.filter((review) => review.rating >= 2 && review.rating < 3);
    const star1 = reviews.filter((review) => review.rating >= 1 && review.rating < 2);

    const totalReviews = reviews.length;

    const star5percentage = ratingToPercentage(star5.length, totalReviews);
    const star4percentage = ratingToPercentage(star4.length, totalReviews);
    const star3percentage = ratingToPercentage(star3.length, totalReviews);
    const star2percentage = ratingToPercentage(star2.length, totalReviews);
    const star1percentage = ratingToPercentage(star1.length, totalReviews);

    const averageRating = (1 * star1.length + 2 * star2.length + 3 * star3.length + 4 * star4.length + 5 * star5.length) / totalReviews;

    return (
        <section>
            <div className="container mx-auto grid md:grid-cols-12 grid-cols-1 lg:gap-20 md:gap-10 gap-y-10 mt-5">
                <div className="xl:col-span-4 lg:col-span-4 md:col-span-5 col-span-12">
                    <h3 className="text-2xl font-bold">Customer Reviews</h3>
                    <span className="flex xl:flex-row flex-col gap-2 xl:mt-4 xl:mb-5 font-semibold py-5 my-5 xl:border-0 border">
                        <Rating rating={averageRating} /> <span className="text-center">Based on {totalReviews} Reviews</span>
                    </span>
                    <ReviewProgress starPercentage={star5percentage} numberOfRate={5} />
                    <ReviewProgress starPercentage={star4percentage} numberOfRate={4} />
                    <ReviewProgress starPercentage={star3percentage} numberOfRate={3} />
                    <ReviewProgress starPercentage={star2percentage} numberOfRate={2} />
                    <ReviewProgress starPercentage={star1percentage} numberOfRate={1} />

                    <div className="review-footer mt-8">
                        <h4 className="text-lg font-semibold mb-2">Share your thoughts</h4>
                        <p>If you've used our service, share your thoughts with other customers.</p>
                        <button className="dude-btn mt-6">Write a Review</button>
                    </div>
                </div>
                <div className="xl:col-span-8 lg:col-span-8 md:col-span-7 col-span-12 grid grid-cols-1">
                    {reviews.map((review) => (
                        <Review key={review._id} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
