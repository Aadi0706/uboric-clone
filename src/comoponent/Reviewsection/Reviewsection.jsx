import React from "react";
// import AliceCarousel from "react-alice-carousel";
import "./Reviewsection.css";
import { reviewData } from "./review";

const Reviewsection = () => {
  
  return (
    <div className="reviewContainer">
      <h1 className="reviewHeading">What Our Customer Says</h1>

      <div className="carousel">
        {reviewData.map((e) => (
          <div className="reviewCard">
            <p>{e.review}</p>
            <p>{e.name}</p>
            <img src={e.starimage} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviewsection;
