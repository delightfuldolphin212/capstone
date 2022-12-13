import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function NavigationBar() {
  return (
    <div>
      <AwesomeButton type="danger" href="/">
        Home
      </AwesomeButton>
      &#8195;
      <AwesomeButton type="danger" href="/about">
        About
      </AwesomeButton>
      &#8195;
      <AwesomeButton type="danger" href="/selling">
        Selling
      </AwesomeButton>
      &#8195;
      <AwesomeButton type="danger" href="/contact">
        Contact
      </AwesomeButton>
      &#8195;
      <AwesomeButton type="danger" href="/login">
        Login
      </AwesomeButton>
      &#8195;
      <AwesomeButton type="danger" href="/cart">
        Cart
      </AwesomeButton>
    </div>
  );
}
