import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
function Product(props) {
  const { product } = props;
  return (
    <Card className="product">
      <Link to={`/product/${product.slug}`}>
        <img src={product.gambar} className="card-img-top" alt={product.nama} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.nama}</Card.Title>
        </Link>
        <Rating rating={product.rating} ulasan={product.ulasan} />
        <Card.Text>Rp.{product.harga}</Card.Text>
        <Button>Masukan Ke keranjang</Button>
      </Card.Body>
      {/* {console.log(product.gambar)} */}
      {/* <div className="product-info">
        <div>
        </div>
        <button>Add to Cart</button>
      </div> */}
    </Card>
  );
}
export default Product;
