// import AliceCarousel from "react-alice-carousel";
import '../comoponent/Reviewsection.css';

import React from 'react';

export const Reviewsection = () => {
 
  return (
    <div className="reviewContainer">
      <h1 className="reviewHeading">What Our Customer Says</h1>
      <div className="carousel">
          <div className="reviewCard">
          <p>"Nice shop for specific shoes. Variety is large.. and the quality is also good. Price is average matched to other shoppers"</p>
          <p> "Sanket Anadani"</p>
          <img src="https://www.uboric.com/wp-content/uploads/2020/07/star.png" alt="" />
            
          </div>
          <div className="reviewCard">
          <p> "Best Quality"</p>
          <p> "Asish Vaghasiya"</p>
          <img src="https://www.uboric.com/wp-content/uploads/2020/07/star.png" alt="" />
            
          </div>
          <div className="reviewCard">
          <p>"Best Place for Buying Shoes"</p>
          <p> "Dhaval Patel"</p>
          <img src="https://www.uboric.com/wp-content/uploads/2020/07/star.png" alt="" />  
          </div>  
      </div>
      <button className='btn101'>Add Your Review</button>
    </div>
  );
};

// export default Reviewsection;
