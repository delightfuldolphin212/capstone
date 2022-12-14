import HomePg from "./pages/HomePg";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Selling from "./pages/Selling";
import Header from "./components/Header";
import "./App.css";
import wineData from "./assets/wine-data.json";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  let [cartItems, setCartItems] = useState([]);
  let [price, setPrice] = useState(0);
  let [filteredItems, setFilteredItems] = useState(wineData);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route
          exact
          path="/about"
          render={(props) => (
            <About
              {...props}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              price={price}
              setPrice={setPrice}
            />
          )}
        />
        <Route
          exact
          path="/cart"
          render={(props) => (
            <Cart
              {...props}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              price={price}
              setPrice={setPrice}
            />
          )}
        />
        <Route
          exact
          path="/contact"
          render={(props) => (
            <Contact
              {...props}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              price={price}
              setPrice={setPrice}
            />
          )}
        />
        <Route
          exact
          path="/selling"
          render={(props) => (
            <Selling
              {...props}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              price={price}
              setPrice={setPrice}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={(props) => (
            <Login
              {...props}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              price={price}
              setPrice={setPrice}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={(props) => (
            <HomePg
              {...props}
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              price={price}
              setPrice={setPrice}
            />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
