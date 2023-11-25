import { Component } from "react"
import { FiSearch, FiPrinter } from "react-icons/fi";
import ItemCard from "../ItemCard";
import "./index.css"

const ItemsList = [
    {
        "id": 1,
        "product_name": "Grilled Salmon",
        "brand": "Ocean Delight",
        "price": "$14.99 / 8lb",
        "quantity": "2 x 8lb",
        "total": "$29.98",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901186/Apple_Green_Smith_vw7h7d.png"
      },
      {
        "id": 2,
        "product_name": "Organic Quinoa",
        "brand": "Nature's Best",
        "price": "$5.49 / 1lb",
        "quantity": "3 x 1lb",
        "total": "$16.47",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901198/Avocado_Hass_xzkgki.jpg"
      },
      {
        "id": 3,
        "product_name": "Roasted Chicken Drumsticks",
        "brand": "Farm Fresh",
        "price": "$8.99 / 4pc",
        "quantity": "1 x 4pc",
        "total": "$8.99",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901186/Apple_Green_Smith_vw7h7d.png"
      },
      {
        "id": 4,
        "product_name": "Sweet Potato Fries",
        "brand": "Crispy Delights",
        "price": "$3.99 / 16lb",
        "quantity": "2 x 16lb",
        "total": "$7.98",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901198/Avocado_Hass_xzkgki.jpg"
      },
      {
        "id": 5,
        "product_name": "Beef Sirloin Steak",
        "brand": "Prime Cuts",
        "price": "$12.99 / 12lb",
        "quantity": "1 x 12lb",
        "total": "$12.99",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901186/Apple_Green_Smith_vw7h7d.png"
      },
      {
        "id": 6,
        "product_name": "Veggie Pizza",
        "brand": "Garden Gourmet",
        "price": "$9.49 / 14in",
        "quantity": "1 x 14in",
        "total": "$9.49",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901198/Avocado_Hass_xzkgki.jpg"
      },
      {
        "id": 7,
        "product_name": "Fresh Blueberries",
        "brand": "Berry Bliss",
        "price": "$2.99 / 6lb",
        "quantity": "3 x 6lb",
        "total": "$8.97",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901186/Apple_Green_Smith_vw7h7d.png"
      },
      {
        "id": 8,
        "product_name": "Spinach and Feta Stuffed Chicken",
        "brand": "Epicurean Delights",
        "price": "$15.99 / 2pc",
        "quantity": "1 x 2pc",
        "total": "$15.99",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901198/Avocado_Hass_xzkgki.jpg"
      },
      {
        "id": 9,
        "product_name": "Chocolate Chip Cookies",
        "brand": "Sweet Indulgence",
        "price": "$4.99 / 12lb",
        "quantity": "2 x 12lb",
        "total": "$9.98",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901186/Apple_Green_Smith_vw7h7d.png"
      },
      {
        "id": 10,
        "product_name": "Crispy Kale Chips",
        "brand": "Healthy Harvest",
        "price": "$3.49 / 4lb",
        "quantity": "3 x 4lb",
        "total": "$10.47",
        "status": "",
        "img_url": "https://res.cloudinary.com/dwgg5pyqk/image/upload/v1700901198/Avocado_Hass_xzkgki.jpg"
      }
]


class ItemsContainer extends Component {

  state = {Items: ItemsList}

  changeStatusAsAprvd = (id) => {
    this.setState((prevState) => {
      const updatedItem = prevState.Items.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, status: "Approved"}
        }
        return eachItem
      })
      return {Items: updatedItem}
    })
  }

  changeStatusAsMissing = (id) => {
      this.setState((prevState) => {
        const updatedItem = prevState.Items.map(eachItem => {
          if (eachItem.id === id) {
            return {...eachItem, status: "Missing"}
          }
          return eachItem
        })
        return { Items: updatedItem}
      })
  }


    render(){
      const {Items} = this.state
        return(
            <div className="items-main-container">
                <div className="search-container">
                    <div className="search">
                        <input className="input" type="search" placeholder="Search..." />
                        <FiSearch className="search-icon" />
                    </div>
                    <div className="print-container">
                        <button className="btn back">Add Item</button>
                        <FiPrinter className="print" />
                    </div>
                </div>
                <div className="products-container">
                    <div className="table-headings-container">
                        <p className="pro1">Product Name</p>
                        <p className="pro2">Brand</p>
                        <p className="pro2">Price</p>
                        <p className="pro2">Quantity</p>
                        <p className="pro2">Total</p>
                        <p className="pro3">Status</p>
                    </div>
                    {
                        Items.map(eachItem => (
                            <ItemCard  key={eachItem.id}
                                       {...eachItem}
                                       changeStatusAsMissing={this.changeStatusAsMissing}
                                       changeStatusAsAprvd={this.changeStatusAsAprvd}
                            />
                        ))
                    }
                </div>
                
            </div>
        )
    }
}


export default ItemsContainer
