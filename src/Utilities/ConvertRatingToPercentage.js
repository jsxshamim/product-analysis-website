const ratingToPercentage = (numberOfRatings, totalReviews) => {
    if (numberOfRatings) {
        const percentage = (numberOfRatings * 100) / totalReviews;
        const percentageNumber = parseInt(percentage).toString();
        return percentageNumber;
    }
};
export { ratingToPercentage };
