import '../App.css';
import { memo } from "react";
import Item from './Item.jsx';
const ItemList = ({item}) => {
        return (<div className="flex-container-card py-10">
                <div className="flex-container-card">
                    {item.map(element => <Item element = {element} key={element.id}/>)}
                </div>
            </div>);
}

export default memo(ItemList);
