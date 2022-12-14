import CartItem from "../components/CartItem";
import Table from "react-bootstrap/Table";
export default function Cart(props) {
  return (
    <div className="cart-container">
      <h1 className="total-price">Total Price: ${props.price}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((item, index) => (
            <tr>
              <td>
                {item.year} {item.name}
              </td>
              <td>{item.size}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <div className="cart-container">
        {props.cartItems.map((item, index) => (
          <CartItem
            item={item}
            index={index}
            cartItems={props.cartItems}
            setCartItems={props.setCartItems}
            price={props.price}
            setPrice={props.setPrice}
          />
        ))}
      </div> */}
    </div>
  );
}
