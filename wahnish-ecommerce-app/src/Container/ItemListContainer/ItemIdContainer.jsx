import db from '../../firebase.config.js';
import { onSnapshot, collection, getDocs, getDoc, limit, query, where, setDoc, doc, addDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import '../../App.css';
import getFetch from '../../helpers/getFetch.js';
import OneItem from '../../components/OneItem.jsx';
import ItemDetailContainer from '../../Container/ItemDetailContainer/ItemDetailContainer.jsx'
import Greeting from '../../components/Greeting.jsx';
import Spinner from '../../components/Spinner.jsx';

const ItemListContainer = () => {
    const { id } = useParams();
    return (
        <div className="asBody centrar">
            <OneItem identificacion={id} />
        </div>
    );
}



export default ItemListContainer;
