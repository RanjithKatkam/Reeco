import "./index.css"
import { HiChevronRight } from "react-icons/hi2";

function SectionBar(){
    return(
        <div className="sectionbar-main-container">
            <div className="top-section">
                <p className="order-heading">Orders</p>
                <HiChevronRight className="rght-arrow" />
                <p className="order-num">Order 32457ABC</p>
            </div>
            <div className="bottom-section">
                <h1 className="btm-ord-heading">Order 32457ABC</h1>
                <div className="d1">
                    <button className="btn back">Back</button>
                    <button className="btn approve">Approve Order</button>
                </div>
            </div>
        </div>
    )
}

export default SectionBar