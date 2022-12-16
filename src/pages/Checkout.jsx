import CartItem from "../components/CartItem";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";

export default function Cart(props) {
  const handleClick = (index) => {
    props.setPrice(props.price - props.cartItems[index].price);
    console.log(props.cartItems.length);
    const newList = [];
    for (let i = 0; i < props.cartItems.length; i++) {
      if (i !== index) {
        newList.push(props.cartItems[i]);
      }
    }
    props.setCartItems(newList);
  };

  return (
    <div className="cart-container">
      <h1 className="total-price">Total Price: ${props.price}</h1>
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
      <button type="button" class="btn btn-primary">
        Checkout
      </button>
    </div>
  );
}
