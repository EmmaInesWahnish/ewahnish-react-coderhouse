import '../App.css';
import AwaitData from '../components/AwaitData.jsx';
const ItemListContainer = ({ saludo }) => {
    saludo = "Bienvenidos!! Conozcan nuestros Platos Internacionales!!"
    return (
        <div>
            <div className="flex-container">
                <h2>{saludo}</h2>
            </div>
            <div className="flex-container-card py-10">
                <div className="flex-container-card">
                    <AwaitData />
                </div>
            </div>
        </div>
    );
}

export default ItemListContainer;
