import '../App.css';
const ItemListContainer=( {saludo})=> {
    saludo = "Bienvenidos!! Conozcan nuestros Platos Internacionales!!"
    return (
        <div class="flex-container">
            <h2>{saludo}</h2>
        </div>   
    );
}

export default ItemListContainer;
