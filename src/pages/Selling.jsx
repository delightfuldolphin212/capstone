export default function Selling() {
  return ( 
  <div className="gallery-container">
    <div className="about-container1">
      <img src={require("../assets/lafiteBottle.jpeg")}
      alt="Wine Bottle"
      className="img-small"
      />
    </div>
    <div className="about-container2">
      <h3>FineWineCollector Purchasing Services</h3>

      <p>
      FineWineCollector.com. acquires our wine from collectors across the entire United States (US only). No collection of fine wine 
      is too large or too small. If you have one special bottle or one thousand bottles and they have been properly stored, we would 
      like to purchase your wine.
      </p>

      <p>
      FineWineCollector will pay cash for your wine and we will also pay for the shipping to our San Diego, California facility. 
      There is no need to put your wines at auction where there may be months of delay and some of the bottles may not sell at all. 
      We will pay cash for your wine at a price comparable to what you would receive from auction.
      </p>

      <p>
      If you have properly cellared wine that you would like to sell, please send us a list of the wines that you are offering. 
      An email to jim@FineWineCollector.com is preferred. Please include details (photos if possible) of how your wines have been 
      stored. For all large purchases, be prepared for us to personally visit and inspect your cellar and wine collection. If you 
      are unable to email your list, please fax it to 619-955-8784.
      </p>

      <p>
      If you would like to utilize the FineWineCollector Purchasing Services pre-formatted Excel spreadsheet to inventory your wine, 
      click here: Seller’s Form. Please download the Instructions for Seller’s Form whether or not you utilize our pre-formatted 
      spreadsheet. You will find it helpful in evaluating the condition of your wine.
      </p>
    </div>
    <div className="review-container">
      <div className="review-box">
        <h3>Leave a Review Below !</h3>
        <button>Review us on Yelp</button>
      </div>
    </div>
  </div>
  
  );
}
