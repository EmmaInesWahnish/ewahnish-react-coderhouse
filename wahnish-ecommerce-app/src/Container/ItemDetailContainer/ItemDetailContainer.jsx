import db from '../../firebase.config.js';
import { onSnapshot, collection, getDocs, getDoc, limit, query, where, setDoc, doc, addDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import '../../App.css';
import getItem from '../../helpers/getItem.js';
import ItemDetail from '../../components/ItemDetail.jsx';
import Spinner from '../../components/Spinner.jsx';


const ItemDetailContainer = ({ identificacion }) => {
    const [bool, setBoolean] = useState(true);
    const [dish, setOneDish] = useState({});

    {/*useEffect(() => {
        getItem(identificacion)
            .then((response) => setOneDish(() => response))
            .catch((err) => console.log(err))
            .finally(() => setBoolean(() => false))
    }, [identificacion]);*/}

    useEffect(() => {
        const queryDoc = doc(db, 'items', identificacion)
        getDoc(queryDoc)
            .then(resp => setOneDish({ id: resp.id, ...resp.data() }))
            .catch((err) => console.log(err))
            .finally(() => setBoolean(() => false))
    }, [identificacion])


    if (bool) {
        return (
            <div className="flex-container">
                <Spinner />
            </div>)
    } else {
        return (
            <div className="asBody cebtrar">
                <ItemDetail item={dish} />
            </div>
        );
    }

}


export default ItemDetailContainer;
