import "react-awesome-button/dist/styles.css";

export default function WineItem(props) {
  const handleClick = () => {
    const newList = props.cartItems.concat(props.item);
    props.setCartItems(newList);
    props.setPrice(props.price + props.item.price);
  };
  return (
    <div
      className="gallery-item"
      style={{
        backgroundImage: `url(${props.item.image})`,
      }}
    >
      <svg className="strip" width="160" height="100%">
        <rect className="rectangle" width="100%" height="100%" />
      </svg>
      <p className="title-text">
        {props.item.year} {props.item.name}
      </p>
      <p className="size-text">{props.item.size}</p>
      <p className="price-text">${props.item.price}</p>
      <img
        src="cart.svg"
        className="cart"
        alt="Add to cart"
        onClick={handleClick}
      />
    </div>
  );
}
