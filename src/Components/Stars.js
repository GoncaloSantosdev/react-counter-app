import React from "react";

const Stars = ({ count }) => {
  const starsSpan = (count) => {
    const stars = [];

    for (let index = 0; index < count; index++) {
      {stars.push(<span key={index} className="fa fa-star checked fa-lg"></span>)};
    }

    return stars;
  };

  return (
    <>
    {starsSpan(count)}
    </>
  )
};

export default Stars;
