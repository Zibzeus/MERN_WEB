import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
  return (
    <div>
      <h1>Product</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.gambar} alt={product.nama} />
            </Link>
            {console.log(product.gambar)}
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <h2>{product.nama}</h2>
              </Link>
              <div>
                <strong>Rp.{product.harga}</strong>
              </div>
              <button>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
