import SidePane from "./components/SidePane";
import WineItem from "./components/WineItem";
import CartItem from "./components/CartItem";
import "./App.css";
import wineData from "./assets/wine-data.json";
import { useState } from "react";

function App() {
  let [cartItems, setCartItems] = useState([]);
  let [price, setPrice] = useState(0);
  let [filteredItems, setFilteredItems] = useState(wineData);

  return (
    <div className="App">
      <img
        src={require("./assets/logo.png")}
        alt="Fine Wine Collector logo"
        className="logo"
      />
      <div className="gallery-container">
        <div className="button-container">
          <SidePane
            filteredItems={filteredItems}
            setFilteredItems={setFilteredItems}
            wineData={wineData}
          />
        </div>
        <div className="half-container">
          {filteredItems.map((item) => (
            <WineItem
              item={item}
              cartItems={cartItems}
              setCartItems={setCartItems}
              price={price}
              setPrice={setPrice}
            />
          ))}
        </div>
        <img
          src={require("./assets/my-cart.png")}
          alt="My Cart"
          className="cart-header"
        />
        <h1 className="total-price">Total Price: ${price}</h1>
        <div className="half-container">
          {cartItems.map((item, index) => (
            <CartItem
              item={item}
              index={index}
              cartItems={cartItems}
              setCartItems={setCartItems}
              price={price}
              setPrice={setPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
