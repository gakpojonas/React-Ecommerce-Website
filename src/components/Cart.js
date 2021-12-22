import React from "react";
import "./Styles.css";
import { Row, Col, Card, Container, Button } from "react-bootstrap";

function Cart({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) {
  const totalPrice = cartItems.reduce(
    (cost, item) => cost + item.quantity * item.cost,
    0
  );
  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty text-light">No items are added</div>
      )}
      <Container>
        <Row>
          {cartItems.map((item) => (
            <Col xs={6} md={4} xl={3} key={item.id} className="cart-items-list">
              <Card className="m-2">
                <Card.Img
                  style={{ height: "220px" }}
                  className="cart-items-image"
                  src={item.image}
                  alt={item.name}
                />
                <Card.Text style={{ color: "black" }}>{item.title}</Card.Text>
                <div className="btns">
                  <Button
                    className="cart-items-add"
                    onClick={() => handleAddProduct(item)}
                  >
                    +
                  </Button>
                  <Button
                    className="cart-items-remove m-1"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    -
                  </Button>
                </div>
                <div className="cart-items-price">
                  {item.quantity} * ${item.cost}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="cart-items-total-price-name text-light">
          Total price
          <div className="cart-items-total-price">${totalPrice.toFixed(2)}</div>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
