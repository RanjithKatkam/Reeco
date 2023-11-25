import "./index.css"
import { GrCart } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

function Navbar(){
    return(
        <div className="navbar-main-container">
            <div className="navbar-sub-container">
                <h1 className="reeco">Reeco</h1>
                <h1 className="nav-heading">Store</h1>
                <h1 className="nav-heading">Orders</h1>
                <h1 className="nav-heading">Analytics</h1>
                <GrCart className="icon" />
                <h1 className="user">Hello, Ranjith</h1>
                <IoIosArrowDown  className="arrow"/>
            </div>
        </div>
    )
}

export default Navbar