import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { CategoriesData } from "./CategoryData";
import "./Categories.css";
import Reviewsection from "../Reviewsection/Reviewsection";
import "../Reviewsection/Reviewsection.css";
import CategoriesPageFilter from "../Filters/CategoriesPageFilter";

const Categories = () => {
  return (
    <>
      <div className="categoryPagecontainer">

        <CategoriesPageFilter/>
        <div className="cardsContainer">
          {CategoriesData.map((e) => (
            <Link className="cards" to={"/footwear"}>
              <img src={e.imgData} alt="" />
              <h4>{e.name}</h4>
            </Link>
          ))}
        </div>
      </div>
      <Reviewsection />
    </>
  );
};

export default Categories;
