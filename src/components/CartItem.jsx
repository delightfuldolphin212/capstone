import "react-awesome-button/dist/styles.css";

export default function CartItem(props) {
  const handleClick = () => {
    props.setPrice(props.price - props.cartItems[props.index].price);
    console.log(props.cartItems.length);
    const newList = [];
    for (let i = 0; i < props.cartItems.length; i++) {
      if (i !== props.index) {
        newList.push(props.cartItems[i]);
      }
    }
    props.setCartItems(newList);
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
        src="icons/trash.svg"
        className="cart"
        alt="Delete item"
        onClick={handleClick}
      />
    </div>
  );
}
