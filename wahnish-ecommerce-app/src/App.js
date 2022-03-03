/*import logo from './logo.svg';*/
import './App.css';
import NavBar from './components/NavBar.jsx';
import FoodDelivery from './components/FoodDelivery.jsx';
import FooterInfo from './components/FooterInfo.jsx';
import ItemListContainer from './Container/ItemListContainer.jsx';
import ModalComponent from './Container/ModalComponent.jsx';
function App() {
  return (
    <div className="asBody">
      <header>
        <NavBar />
        <FoodDelivery />
      </header>
      <div className="asBody">
        <ItemListContainer />
      </div>
      <FooterInfo />
      <ModalComponent />
    </div>
  );
}

export default App;
