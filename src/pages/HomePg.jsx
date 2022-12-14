import "react-awesome-button/dist/styles.css";
import SidePane from "../components/SidePane";
import WineItem from "../components/WineItem";
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
      </div>
    </div>
  );
}
