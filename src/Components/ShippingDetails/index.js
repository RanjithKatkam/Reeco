import { GiFruitBowl, GiGrapes } from "react-icons/gi";
import { MdOutlineFastfood } from "react-icons/md";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { FaAppleAlt } from "react-icons/fa";
import "./index.css"


function ShippingDetails(){
    return(
        <div className="shipping-main-container">
            <div className="d2">
                <p className="p1">Supplier</p>
                <p className="p2">East coast fruits & vegetables</p>
            </div>
            <div className="d2">
                <p className="p1">Shipping date</p>
                <p className="p2">Thu, Dec 5</p>
            </div>
            <div className="d2">
                <p className="p1">Total</p>
                <p className="p2">$ 14,454.8</p>
            </div>
            <div className="d2">
                <p className="p1">Category</p>
                <div className="grapes-container">
                    <GiFruitBowl />
                    <MdOutlineFastfood />
                    <PiBowlFoodDuotone />
                    <FaAppleAlt />
                    <GiGrapes />
                </div>
            </div>
            <div className="d2">
                <p className="p1">Department</p>
                <p className="p2">300-444-788</p>
            </div>
            <div className="d21">
                <p className="p1">Status</p>
                <p className="p2">Awaiting your approvel</p>
            </div>
        </div>
    )
}

export default ShippingDetails