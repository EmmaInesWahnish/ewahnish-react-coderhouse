import '../App.css';
import RenderItems from './RenderItems.jsx';
const ItemListContainer=()=> {
    return (
        <div className="table-responsive-sm">
            <table id="items-table" className="table table-sm table-bordered table-striped">
                <thead id="headTable">
                    <tr id="topRow">
                        <th id="toppRow00">Identificacion</th>
                        <th id="topRow01">Categoria</th>
                        <th id="topRow02">Descripcion</th>
                        <th id="topRow03">Imagen</th>
                        <th id="topRow04">Precio por porcion</th>
                        <th id="topRow05">Acciones</th>
                    </tr>
                </thead>
                <tbody id="myItems">
                    <RenderItems/>
                </tbody>
            </table>
        </div>
    );
}

export default ItemListContainer;
