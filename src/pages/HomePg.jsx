import "react-awesome-button/dist/styles.css";
import SidePane from "../components/SidePane";
import WineItem from "../components/WineItem";
import CartItem from "../components/CartItem";
import "../App.css";
import wineData from "../assets/wine-data.json";

export default function HomePg(props) {
  return (
    <div>
      <div className="gallery-container">
        <div className="button-container">
          <SidePane
            filteredItems={props.filteredItems}
            setFilteredItems={props.setFilteredItems}
            wineData={wineData}
          />
        </div>
        <div className="half-container">
          {props.filteredItems.map((item) => (
            <WineItem
              item={item}
              cartItems={props.cartItems}
              setCartItems={props.setCartItems}
              price={props.price}
              setPrice={props.setPrice}
            />
          ))}
        </div>
        <img
          src={require("../assets/my-cart.png")}
          alt="My Cart"
          className="cart-header"
        />
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
    </div>
  );
}
