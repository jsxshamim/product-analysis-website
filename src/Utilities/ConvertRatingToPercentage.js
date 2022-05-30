const ratingToPercentage = (numberOfRatings, totalReviews) => {
    const parentage = (numberOfRatings * 100) / totalReviews;
    return parseInt(parentage);
};
export { ratingToPercentage };
