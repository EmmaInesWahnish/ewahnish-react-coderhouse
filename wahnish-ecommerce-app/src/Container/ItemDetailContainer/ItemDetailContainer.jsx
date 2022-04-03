import db from '../../firebase.config.js';
import { getDoc, doc } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import '../../App.css';
import ItemDetail from '../../components/ItemDetail.jsx';
import Spinner from '../../components/Spinner.jsx';


const ItemDetailContainer = ({ identification }) => {
    const [bool, setBoolean] = useState(true);
    const [dish, setOneDish] = useState({});

    useEffect(() => {
        const queryDoc = doc(db, 'items', identification)
        getDoc(queryDoc)
            .then(resp => setOneDish({ id: resp.id, ...resp.data() }))
            .catch((err) => console.log(err))
            .finally(() => setBoolean(() => false))
    }, [identification])


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
