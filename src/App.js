import HomePg from "./pages/HomePg";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

import Checkout from "./pages/Checkout";

import Registration from "./pages/Registration"

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
<<<<<<< HEAD
          path="/checkout"
          render={(props) => (
            <Checkout
=======
          path="/Registration"
          render={(props) => (
            <Registration
>>>>>>> 7b49ddfed19d2d451aa2f008e96e1749bbdb322f
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
