import db from '../../firebase.config.js';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../../App.css';
import ItemList from '../../components/ItemList.jsx';
import Greeting from '../../components/Greeting.jsx';
import Spinner from '../../components/Spinner.jsx';

const ItemListContainer = () => {
    const greeting = "Bienvenidos!! Conozcan nuestros platos Internacionales!!"
    const [dishes, setDishes] = useState([]);
    const [bool, setBoolean] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const queryCollection = collection(db, "items");
        if (id) {
            const queryFilter = query(queryCollection,
                where('categoria', '==', id))
            getDocs(queryFilter)
                .then(resp => setDishes(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setBoolean(() => false))
        }
        else {
            getDocs(queryCollection)
                .then(resp => setDishes(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
                .catch(err => console.log(err))
                .finally(() => setBoolean(() => false))
        }
    }, [id])

    if (bool) {
        return (
            <div className="flex-container">
                <Spinner />
            </div>)
    } else {
        return (
            <div>
                <div className="flex-container">
                    <Greeting greeting={greeting} />
                </div>
                <div className="flex-container-card py-10">
                    <ItemList item={dishes} />
                </div>
            </div>
        );
    }

}


export default ItemListContainer;
