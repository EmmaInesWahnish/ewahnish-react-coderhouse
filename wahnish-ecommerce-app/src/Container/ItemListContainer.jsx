import '../App.css';
import ItemList from '../components/ItemList.jsx';
const ItemListContainer=( {saludo})=> {
    saludo = "Bienvenidos!! Conozcan nuestros Platos Internacionales!!"
    return (
        <div>
            <div className="flex-container">
                <h2>{saludo}</h2>  
            </div>
            <div className="centrar">
                <ItemList />
            </div>
        </div>   
    );
}

export default ItemListContainer;
