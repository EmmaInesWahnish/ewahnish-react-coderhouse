import '../App.css';
import myTitle from '../assets/food-delivery.png';
import delivery from '../assets/delivery.png';
const FoodDelivery=()=> {
  return (
      <div className="flex-container">
        <img className="flex-item" src={myTitle} alt="cocinero"/>
        <h1 className="flex-item">Cocina Internacional - Delivery</h1>
        <img className="flex-item" src={delivery} alt="delivery"/>
      </div>  
  );
}

export default FoodDelivery;
