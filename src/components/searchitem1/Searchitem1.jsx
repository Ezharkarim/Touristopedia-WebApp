import { Link } from "react-router-dom"
import "./searchItem1.css"

const SearchItem1=({item1})=>{
    return(
        <div className="searchItem1">
            <img src={item1.photos[0]} alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">{item1.name}</h1>
                <span className="siDistance">{item1.distance} KM from Airport</span>
                <span className="siTaxiOp">Free Airport Taxi</span>
                <span className="siSubtitle">Apartment with AC</span>
                <span className="siFeatures">{item1.desc}</span>
                <span className="siFeatures"><h5>Type:</h5>{item1.type}</span>
                <span className="siCancelOp">Free Cancellation</span>
                <span className="siCancelOpSubtitle">You can cancel later,so lock in this great price today!</span>
            </div>
            <div className="siDetails">
                { item1.rating && <div className="siRating">
                    <span>Excellent</span>
                    <button>{item1.rating}</button>
                </div>}
                <div className="siDetailTexts">
                    <span className="siPrice">{item1.cheapestPrice}/-</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <Link to={`/rentacars/${item1._id}`}>
                    <button className="siCheckButton">See availabilty</button></Link>
                </div>
                
            </div>


        </div>

    )
}
export default SearchItem1