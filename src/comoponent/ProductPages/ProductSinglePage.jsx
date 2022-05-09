import './styles/ProductSinglePage.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import {
  Link,
  useParams,
} from 'react-router-dom';

import Button from '@mui/material/Button';

const ProductSinglePage = () => {
  const [singleProducts, setSingleProducts] = useState({});
  const [related, setRelated] = useState([]);
  const { id } = useParams();

  const fetchData = async () => {
    const products = await axios.get(
      `https://uborics-backend.herokuapp.com/footwears/${id}`
    );

    setSingleProducts(products.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const relatedData = async () => {
      const relatedProducts = await axios.get(
        `https://uborics-backend.herokuapp.com/footwears`
      );
      setRelated(relatedProducts.data);
    };
    relatedData();
  }, []);
  // console.log(singleProducts);
  console.log("related", related);

  return (
    <>
    {/* <Navbar/> */}
    
      <div className="SinglePagecontainer">
        <div className="productImage">
          <img src={singleProducts.imgURL} alt="" />
        </div>
        <div className="productDetails">
          <h3 className="prod_title">{singleProducts.title}</h3>
          <br />
          <p className="prod_title" style={{ marginRight: "380px" }}>
            ₹{singleProducts.price}(Inclusive of all taxes)
          </p>
          <div className="badges"></div>

          <select value="Choose " id="options">
            <option value="Choose an option">Choose an option</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>

          <div className="purchasediv">
            {/* <button>Buy now</button> */}
            <Button sx={{backgroundColor:'orange', color:'black'}}  variant="contained">Buy now</Button>
            <input type="number" min="1" name="quantity" id="quantity" />
            {/* <button>Add to Cart</button> */}

            <Button  sx={{backgroundColor:'orange', color:'black'}}> Add to Cart</Button>
          </div>

          <Button  sx={{backgroundColor:'orange', color:'black', borderColor:'black'}} variant="contained"> SEND ENQUIRY</Button>

          {/* <div className="details">
            <p>{singleProducts.product_desc.desc1}</p>
          </div> */}
        </div>

      </div>

      <h1>Related product</h1>
      <div className="relatedProducts">
        {related.map((e) => {
          return (
            <Link className="relatedcards" to={`/footwear/${e.id}`}>
              <img src={e.imgURL} alt="" />
              <h3>{e.title}</h3>
              <h3>₹{e.price}</h3>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ProductSinglePage;

// ProductSinglePage
