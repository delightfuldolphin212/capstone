import HomePg from "./pages/HomePg";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Selling from "./pages/Selling";
import WineItem from "./components/WineItem";
import CartItem from "./components/CartItem";
import Header from "./components/Header";
import "./App.css";
import wineData from "./assets/wine-data.json";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios, {isCancel, AxiosError} from 'axios';

function App() {
  let [cartItems, setCartItems] = useState([]);
  let [price, setPrice] = useState(0);
  let [filteredItems, setFilteredItems] = useState(wineData);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <HomePg
              filteredItems={filteredItems}
              setFilteredItems={setFilteredItems}
              cartItems={cartItems}
              setCartItems={setCartItems}
              price={price}
              setPrice={setPrice}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selling" element={<Selling />} />
      </Routes>
    </div>
  );
}

export default App;
