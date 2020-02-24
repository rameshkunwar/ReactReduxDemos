import React, { Component } from "react";
class Product extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.product.isFavorite != this.props.product.isFavorite;
  }
  render() {
    const { product } = this.props;
    //to demonstrate how reder is run
    console.log("Product::render");
    return (
      <li>
        <h4>{product.title}</h4>
        <input
          type='checkbox'
          checked={product.isFavorite}
          onChange={() =>
            this.props.onProductChange({
              ...product,
              isFavorite: !product.isFavorite
            })
          }
        />
      </li>
    );
  }
}

export default Product;
