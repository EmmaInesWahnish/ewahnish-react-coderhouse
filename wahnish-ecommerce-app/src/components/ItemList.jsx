import '../App.css';
import Item from './Item.jsx';
const ItemList = ({item}) => {
        return (<div className="flex-container-card py-10">
                <div className="flex-container-card">
                    {item.map(item => <Item item = {item} />)}
                </div>
            </div>);
}

export default ItemList;
