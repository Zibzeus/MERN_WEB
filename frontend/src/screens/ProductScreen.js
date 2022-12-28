import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useReducer, useEffect } from "react";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Badge,
  Button,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Helmet } from "react-helmet-async";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import { getError } from "../utils";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
function ProductScreen() {
  const param = useParams();
  const { slug } = param;
  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
      // setProducts(result.data);
    };
    fetchData();
  }, [slug]);
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <Image src={product.gambar} alt={product.nama} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Helmet>
                <title>{product.nama}</title>
              </Helmet>
              <h1>{product.nama}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                ulasan={`${product.ulasan} reviews`}
                color={"#f8e825"}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Harga: Rp.{product.harga}</ListGroup.Item>
            <ListGroup.Item>
              Deskripsi :<p>{product.deskripsi}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Harga:</Col>
                    <Col>
                      <strong>Rp.{product.harga}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.stok > 0 ? (
                        <Badge bg="success">Tersedia</Badge>
                      ) : (
                        <Badge bg="danger">Tidak Tersedia</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.stok > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button variant="primary">Masukan ke Keranjang</Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
