import styles from './product_especific.css'

function ProductEspecific (props) {
  return(
    <div  className='product_especific' >
        <h3>{props.producto}</h3>
        <img className='imagen-producto' src={require(`../../img/producto-${props.imagen}.png`)} alt='producto carne' />
        <div className='boton'>{props.boton}</div>
    </div>
  );
}

export default ProductEspecific