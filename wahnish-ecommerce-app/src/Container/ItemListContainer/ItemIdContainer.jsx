import { useParams } from "react-router-dom";
import '../../App.css';
import OneItem from '../../components/OneItem.jsx';

const ItemListContainer = () => {
    const { id } = useParams();
    return (
        <div className="asBody centrar">
            <OneItem identificacion={id} />
        </div>
    );
}



export default ItemListContainer;
