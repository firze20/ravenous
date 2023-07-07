import React from "react";

const styledStar = {
  color: "orange",
};

export const Stars = (props) => {
  const { rating } = props;

  const starCount = Math.floor(rating);
  const stars = 5;
  const blackStars = stars - starCount;

  return (
    <div>
      {Array.from({ length: starCount }, (_, index) => (
        <span
          key={index}
          className="fa fa-star checked"
          style={styledStar}></span>
      ))}
      {starCount < stars && (
        Array.from({ length: blackStars }, (_, index) => (
            <span 
            key={index}
            className="fa fa-star"
            >
            </span>
        ))
      )}
    </div>
  );
};
