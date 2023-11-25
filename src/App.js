import Navbar from "./Components/Navbar"
import SectionBar from "./Components/SectionBar";
import ShippingDetails from "./Components/ShippingDetails"
import ItemsContainer from "./Components/ItemsContainer";
import './App.css';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <SectionBar />
      <ShippingDetails />
      <ItemsContainer />
    </div>
  );
}

export default App;
