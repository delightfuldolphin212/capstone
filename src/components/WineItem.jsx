import "react-awesome-button/dist/styles.css";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function WineItem(props) {
  const handleClick = () => {
    var match = false;
    props.item.quantity = props.item.quantity - 1;
    for (let i = 0; i < props.cartItems.length; i++) {
      if (props.cartItems[i].name === props.item.name) {
        console.log("inside if ");
        props.cartItems[i].quantity += 1;
        match = true;
      }
    }
    if (!match) {
      console.log("outside if ");
      const newList = props.cartItems.concat(
        JSON.parse(JSON.stringify(props.item))
      );
      newList[newList.length - 1].quantity = 1;
      props.setCartItems(newList);
      props.setPrice(props.price + props.item.price);
    } else {
      props.setCartItems(props.cartItems.concat());
    }
  };
  return (
    <div className="tile">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.item.image} />
        <Card.Body>
          <Card.Title>
            {props.item.year} {props.item.name}
          </Card.Title>
          <Card.Text>{props.item.size}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{props.item.quantity} available</ListGroup.Item>
          <ListGroup.Item>${props.item.price} per bottle</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Button
            variant="primary"
            disabled={props.item.quantity == 0 ? true : undefined}
            onClick={handleClick}
          >
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
