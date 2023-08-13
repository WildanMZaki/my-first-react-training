import { Link } from "react-router-dom";
import { rating } from "../../utils/text.js";
import "./searchItem.css";

const SearchItem = ({hotel}) => {
  return (
    <div className='searchItem'>
      <img src={hotel.photos[0]} alt="" className="siImg"/>
      <div className="siDesc">
        <h1 className="siTitle">{hotel.name}</h1>
        <span className="siDistance">{hotel.distance} from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          {hotel.desc}
        </span>
        <span className="siCancelOp">Free Cancelation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        { hotel.rating && <div className="siRating">
          <span>{rating(hotel.rating)}</span>
          <button>{hotel.rating}</button>
        </div>}
        <div className="siDetailTxts">
          <span className="siPrice">${hotel.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${hotel._id}`}>
            <button className="siCheckBtn">See Avaibility</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
