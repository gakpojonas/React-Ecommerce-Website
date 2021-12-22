import React from "react";

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./Styles.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbars({ cartItems }) {
  return (
    <div className="fixed-top">
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand className="text-light fw-bolder" href="#home">
          REACT-WEBSITE
        </Navbar.Brand>
        <Navbar.Toggle
          className="menu bg-light"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="Navbar mx-auto my-4 align-items-start fw-bold">
            <Link className="link text-light" to="/">
              Home
            </Link>
            <Link className="link text-light" to="/product">
              Product
            </Link>
            <Link className="link text-light" to="/blog">
              Blog
            </Link>
            <Link className="link text-light" to="/contact">
              Contact
            </Link>
            <Link className="link text-light" to="/cart">
              Cart
            </Link>
          </Nav>
          <Form className="form d-flex">
            <Form.Group className="search mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter search" />
            </Form.Group>
            <Button
              className="button"
              variant="light text-light border-light bg-primary"
              type="search"
            >
              Search
            </Button>
            <AiOutlineShoppingCart
              style={{ fontSize: "40px" }}
              className="mb-3 ms-2 text-light"
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbars;
