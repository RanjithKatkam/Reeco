import { Component } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsCheck2 } from "react-icons/bs";
import "./index.css"

class ItemCard extends Component {

    onClickRightMark = () => {
        const {changeStatusAsAprvd, id} = this.props
        changeStatusAsAprvd(id)
    }

    onClickCrossMark = () => {
        const {changeStatusAsMissing, id} = this.props
        changeStatusAsMissing(id)
    }


    render(){
        const {product_name, brand, price, quantity, total, status, img_url} = this.props
        return(
            <div className="list-container">
                <div className="img-productName">
                    <img className="product-img" alt="product img" src={img_url} />
                    <p className="product-name">{product_name}</p>
                </div>
                <p className="pro21">{brand}</p>
                <p className="pro21">{price}</p>
                <p className="pro21">{quantity}</p>
                <p className="pro21">{total}</p>
                <div className="status-container">
                    {
                        status !== "" ? <p className={status === "Approved" ? "product-status-green" : "product-status-red"}>{status}</p> : null
                    }
                    <button onClick={this.onClickRightMark} className="status-buttons extra"><BsCheck2 /></button>
                    <button onClick={this.onClickCrossMark} className="status-buttons"><RxCross2 /></button>
                </div>
            </div>
        )
    }
}

export default ItemCard