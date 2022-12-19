import "react-awesome-button/dist/styles.css";
import SidePane from "../components/SidePane";
import WineItem from "../components/WineItem";
import "../App.css";
import wineData from "../assets/wine-data.json";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Successful Order Completion
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Thank you for your order!</h5>
        <p>
          <i>A message from the deveopers: </i>Since a backend was out of the
          scope of this project, we've outputted your order info to the consoole
          as a proof of concept that we can access and store order info. This
          includes your personal information as well as the details of the items
          in your order.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Continue shopping</Button>
      </Modal.Footer>
    </Modal>
  );
}

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
      <MyVerticallyCenteredModal
        show={props.modalShow}
        onHide={() => props.setModalShow(false)}
      />
    </div>
  );
}
