import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-T_o06x2bVxX1TEzaZBMlUubDxgyKgxdKw&usqp=CAU" alt="" className="siImg"/>
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free Airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio ~ 1 Bathroom
        </span>
        <span className="siCancelOp">Free Cancelation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTxts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckBtn">See Avaibility</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
