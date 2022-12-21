import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function Checkout(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [shipping, setShipping] = useState("");
  const [payment, setPayment] = useState("");

  const handleClick = (event) => {
    onFormSubmit();
    props.setModalShow(true);
  };

  const onFormSubmit = () => {
    const data = [
      ["name", "email", "shipping", "payment", "total price"],
      [
        name,
        email,
        shipping,
        payment,
        (props.price * 1.08625 + 9.99).toFixed(2),
      ],
      ["item", "quantity", "price"],
    ];
    props.cartItems.map((item) =>
      data.push([item.year + " " + item.name, item.quantity, item.price])
    );
    console.log(data);
    props.setCartItems([]);
    props.setPrice(0);
    setName("");
    setEmail("");
    setShipping("");
    setPayment("");
  };

  return (
    <div className="cart-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((item, index) => (
            <tr>
              <td>
                {item.year} {item.name}
              </td>
              <td>{item.size}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h5 className="total-price">Subtotal: ${props.price.toFixed(2)}</h5>
      <h5 className="total-price">Shipping: $9.99</h5>
      <h5 className="total-price">
        Tax (8.625%): ${(props.price * 0.08625).toFixed(2)}
      </h5>
      <h4 className="total-price">
        Grand total: ${(props.price * 1.08625 + 9.99).toFixed(2)}
      </h4>
      <Form className="form-container">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter first and last name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Shipping adress</Form.Label>
          <Form.Control
            type="name"
            onChange={(e) => setShipping(e.target.value)}
            placeholder="Enter complete street address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Payment information</Form.Label>
          <Form.Control
            type="name"
            onChange={(e) => setPayment(e.target.value)}
            placeholder="Enter credit card number"
          />
        </Form.Group>
        <Link to="/">
          <Button variant="danger" onClick={handleClick} type="submit">
            Submit
          </Button>
        </Link>
      </Form>
    </div>
  );
}
