import React from "react";

import { Container, Card, Row, Col, Button } from "react-bootstrap";
import room from "./IMG/room.jpg";
import poolside from "./IMG/poolside.jpg";
import kitchen from "./IMG/kitchen.jpg";
import { Carousel } from "react-bootstrap";
import "./Styles.css";

function Category2({ productItems, handleAddProduct }) {
  return (
    <div>
      <div className=" bg-primary py-2">
        <Container className="categories">
          <h2 className="text-light">FEATURED PRODUCTS</h2>
          <Row className="g-2">
            {productItems.map((product, idx) => {
              return (
                <Col xs={6} md={4} xl={3} key={product.title}>
                  <Card>
                    <Card.Img
                      style={{ height: "220px" }}
                      src={product.image}
                      alt="show image"
                    />
                    <Card.Text>{product.cost}</Card.Text>
                    <Card.Title>{product.title}</Card.Title>
                    <Button onClick={() => handleAddProduct(product)}>
                      Add To Cart
                    </Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className="bg-dark py-3">
        <Container>
          <h2 className="text-light">MORE TO LOVE</h2>
          <Row className="g-2">
            {productItems.map((product) => {
              return (
                <Col xs={6} md={4} xl={3}>
                  <Card>
                    <Card.Img
                      style={{ height: "220px" }}
                      src={product.image}
                      alt
                      rounded
                    />
                    <Card.Text>{product.cost}</Card.Text>
                    <Card.Title>{product.title}</Card.Title>
                    <Button>Add To Cart</Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <Carousel>
        <Carousel.Item interval={0}>
          <img className="d-block w-100" src={poolside} alt="First slide" />
          <Carousel.Caption>
            <h3>POOLSIDE</h3>
            <p className="fw-bold">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={room} alt="Second slide" />
          <Carousel.Caption>
            <h3>ROOM</h3>
            <p className="fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={kitchen} alt="Third slide" />
          <Carousel.Caption>
            <h3>KITCHEN</h3>
            <p className="fw-bold">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Category2;
