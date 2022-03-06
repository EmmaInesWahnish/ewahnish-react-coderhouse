import { useState, useEffect } from 'react';
import '../App.css';
import getFetch from '../helpers/getFetch.js';
import ItemList from '../components/ItemList';
import Greeting from '../components/Greeting.jsx';
import circle from '../assets/circle.png'

const ItemListContainer = () => {
    const saludo = "Bienvenidos!! Conozcan nuestros platos Internacionales!!"
    const [dishes, setDishes] = useState([{}]);
    const [bool, setBoolean] = useState(true);
    console.log(bool)

    useEffect(() => {
        getFetch()
            .then((response) => setDishes(() => response))
            .catch((err) => console.log(err))
            .finally(() => setBoolean(() => false))
    }, []);

    if (bool) {
        return (
            <div className="flex-container">
                <div className="flex-item">
                    <img id="circle" src={circle} alt="circle" />
                </div>
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
