import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import NavigationBar from "../components/NavigationBar";

export default function Header() {
  return (
    <div>
      <img
        src={require("../assets/logo.png")}
        alt="Fine Wine Collector logo"
        className="logo"
      />
      <NavigationBar style="padding-bottom: 20px;" />
    </div>
  );
}
