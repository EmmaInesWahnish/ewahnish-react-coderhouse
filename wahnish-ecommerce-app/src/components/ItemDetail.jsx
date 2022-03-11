import '../App.css';
const ItemDetail = ({item}) => {
  return (<>
  <div>
      <h3>{item.descripcion}</h3> 
      <h3>p/porcion {item.precio}$</h3>
  </div>
  <div className="image-size centrar">
      {item.imagen}
  </div>
  </>);
}

export default ItemDetail;
