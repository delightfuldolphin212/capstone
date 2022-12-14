import CartItem from "../components/CartItem";
export default function Cart(props) {
  return (
    <div>
      <h1 className="total-price">Total Price: ${props.price}</h1>
      <div className="half-container">
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
      </div>
    </div>
  );
}
