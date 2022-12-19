import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="footer-button">
        <h4 className="footer">4.9 Stars on Trust Pilot</h4>
      </div>
      <Link to="https://www.trustpilot.com/evaluate/www.finewinecollector.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector">
        <AwesomeButton type="danger">Review us on Trust Pilot</AwesomeButton>
      </Link>
      <h5 className="footer-button">
        The Fine Wine Collector LLC &#xA9; 2023 All rights reserved.
      </h5>
    </div>
  );
}
