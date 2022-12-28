import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import data from "../data";
import axios from "axios";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Product</h1>
      <div className="products">
        {products.map((product) => (
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
