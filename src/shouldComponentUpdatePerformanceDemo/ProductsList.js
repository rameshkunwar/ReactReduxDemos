import React from "react";
import Product from "./Product";

const ProductList = (props) => {
  const products = props.products.map((product, index) => {
    return (
      <Product
        key={index}
        product={product}
        onProductChange={props.onProductChange}
      />
    );
  });

  return <ul>{products}</ul>;
};
export default ProductList;
