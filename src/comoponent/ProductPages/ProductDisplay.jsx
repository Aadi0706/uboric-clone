import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./styles/ProductDisplay.css";
// import { Navbar } from '../Navbar';

const ProductDisplay = () => {
  const [productsData, setproductsData] = useState([]);
  // console.log(productsData);

  useEffect(() => {
    const fetchData = async () => {
      const products = await axios.get(
        "https://uborics-backend.herokuapp.com/footwears"
      );
      setproductsData(products.data);
      console.log(products)
    };
    fetchData();
  }, []);

  return (
    <div className="ProductDisplay">
      {/* <Navbar/> */}
      {productsData.map((e) => {
        return (
          <Link className="card" to={`/footwear/${e.id}`}>
            <img src={e.imgURL} alt="" />
            <h3>{e.title}</h3>
            <h3>₹{e.price}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductDisplay;
