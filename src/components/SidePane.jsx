import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { SortDescIcon, FilterIcon } from "@primer/octicons-react";
import { useState } from "react";

export default function SidePane(props) {
  let [typeFilter, setTypeFilter] = useState("secondary");
  let [priceFilter, setPriceFilter] = useState("secondary");

  const handleReset = () => {
    setTypeFilter("secondary");
    setPriceFilter("secondary");
    props.setFilteredItems(props.wineData);
  };
  const handleUnder100 = () => {
    setPriceFilter("disabled");
    props.setFilteredItems(
      props.filteredItems.filter((item) => item.price < 100)
    );
  };
  const handleOver100 = () => {
    setPriceFilter("disabled");
    props.setFilteredItems(
      props.filteredItems.filter((item) => item.price >= 100)
    );
  };
  const handleCabernets = () => {
    setTypeFilter("disabled");
    props.setFilteredItems(props.filteredItems.filter((item) => item.cabernet));
  };
  const handleReds = () => {
    setTypeFilter("disabled");
    props.setFilteredItems(
      props.filteredItems.filter((item) => !item.cabernet)
    );
  };
  const handleSortYear = () => {
    props.setFilteredItems(
      [...props.filteredItems].sort((a, b) => a.year - b.year)
    );
  };
  const handleSortPrice = () => {
    props.setFilteredItems(
      [...props.filteredItems].sort((a, b) => a.price - b.price)
    );
  };
  return (
    <div>
      <h1>Filters:</h1>
      <AwesomeButton
        type="primary"
        before={<FilterIcon />}
        class="nav-button"
        onPress={handleReset}
      >
        Reset Filters
      </AwesomeButton>
      <h3>---</h3>
      <AwesomeButton
        type={priceFilter}
        before={<FilterIcon />}
        class="nav-button"
        onPress={priceFilter === "secondary" ? handleUnder100 : undefined}
      >
        Under $100
      </AwesomeButton>
      <br />
      <br />
      <AwesomeButton
        type={priceFilter}
        before={<FilterIcon />}
        class="nav-button"
        onPress={priceFilter === "secondary" ? handleOver100 : undefined}
      >
        $100 +
      </AwesomeButton>
      <h3>---</h3>
      <AwesomeButton
        type={typeFilter}
        before={<FilterIcon />}
        class="nav-button"
        onPress={typeFilter === "secondary" ? handleCabernets : undefined}
      >
        Cabernets
      </AwesomeButton>
      <br />
      <br />
      <AwesomeButton
        type={typeFilter}
        before={<FilterIcon />}
        class="nav-button"
        onPress={typeFilter === "secondary" ? handleReds : undefined}
      >
        Red Blends
      </AwesomeButton>
      <h1>Sorting:</h1>
      <AwesomeButton
        type="secondary"
        before={<SortDescIcon />}
        class="nav-button"
        onPress={handleSortPrice}
      >
        Sort by Price
      </AwesomeButton>
      <br />
      <br />
      <AwesomeButton
        type="secondary"
        before={<SortDescIcon />}
        class="nav-button"
        onPress={handleSortYear}
      >
        Sort by Year
      </AwesomeButton>
    </div>
  );
}
