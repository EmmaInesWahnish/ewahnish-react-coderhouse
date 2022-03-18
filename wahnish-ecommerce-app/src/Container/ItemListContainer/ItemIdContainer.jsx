import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../../App.css';
import getFetch from '../../helpers/getFetch.js';
import ItemList from '../../components/ItemList.jsx';
import Greeting from '../../components/Greeting.jsx';
import Spinner from '../../components/Spinner.jsx';

const ItemListContainer = () => {
    const saludo = "Bienvenidos!! Conozcan nuestros platos Internacionales!!"
    const [dishes, setDishes] = useState([]);
    const [bool, setBoolean] = useState(true);
    const {id} = useParams();

    useEffect(() => {
        if (id) {
        getFetch()
            .then(response => setDishes(response.filter(d => d.id === id)))
            .catch((err) => console.log(err))
            .finally(() => setBoolean(() => false))
        } else {
            getFetch()
            .then((response) => setDishes(() => response))
            .catch((err) => console.log(err))
            .finally(() => setBoolean(() => false))
        }
    }, [id]);
    
    console.log(id);

    if (bool) {
        return (
            <div className="flex-container">
                <Spinner />
            </div>)
    } else {
        return (
            <div>
                <div className="flex-container">
                    <Greeting saludo={saludo} />
                </div>
                <div className="flex-container-card py-10">
                    <ItemList item={dishes} />
                </div>
            </div>
        );
    }

}


export default ItemListContainer;
