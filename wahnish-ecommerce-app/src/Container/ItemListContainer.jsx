import '../App.css';
import ItemCount from '../components/ItemCount.jsx';
const ItemListContainer=( {saludo})=> {
    saludo = "Bienvenidos!! Conozcan nuestros Platos Internacionales!!"
    let order = 1;
    let portions = 20;
    let portionPrice = 500; 
    return (
        <div>
            <div class="flex-container">
                <h2>{saludo}</h2>  
            </div>
            <div className="centrar">
                <ItemCount order={order} portions={portions} portionPrice={portionPrice} />
            </div>
        </div>   
    );
}

export default ItemListContainer;
