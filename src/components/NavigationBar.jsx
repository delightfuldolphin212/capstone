import { AwesomeButton } from "react-awesome-button";
import { Link } from "react-router-dom";
import "react-awesome-button/dist/styles.css";

export default function NavigationBar() {
  return (
    <div>
      <Link to="/">
        <AwesomeButton type="danger">Home</AwesomeButton>
      </Link>
      &#8195;
      <Link to="/about">
        <AwesomeButton type="danger">About</AwesomeButton>
      </Link>
      &#8195;
      <Link to="/selling">
        <AwesomeButton type="danger">Selling</AwesomeButton>
      </Link>
      &#8195;
      <Link to="/contact">
        <AwesomeButton type="danger">Contact</AwesomeButton>
      </Link>
      &#8195;
      <Link to="/login">
        <AwesomeButton type="danger">Login</AwesomeButton>
      </Link>
      &#8195;
      <Link to="/cart">
        <AwesomeButton type="danger">Cart</AwesomeButton>
      </Link>
    </div>
  );
}
