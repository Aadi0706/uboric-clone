import './styles/ProductPage.css';

import React from 'react';

import Sidebar from '../Filters/ProductDisplayFilter';
import ProductDisplay from './ProductDisplay';

// import Reviewsection from "../Reviewsection/Reviewsection";
// import { Navbar } from '../Navbar';

const ProductPage = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div className="container">
    <div className="productcontainer">
        <Sidebar/>
        <ProductDisplay/> 
      </div>
    </div>
    
    </>
  );
};

export default ProductPage;
