import style from './products_full.css'
import Products from '../products/Products'
function ProductsFull (props){
  return(
    <div className='product_description_container'>
        <h3>{props.titulo_producto}</h3>
          <div className='product_description'>
          <img className='foto-producto' src={require(`../../img/foto-${props.imagen}.png`)} alt='producto carne'/>
          <p>{props.descripcion}</p>
          </div>
          <div className='boton'>{props.producto_boton}</div>
    </div>
  );
}
export default ProductsFull