import style from './products_card.css'
import ProductEspecific from '../product_especific/ProductEspecific'
import React, {Fragment} from 'react';
const ProductCard = (props) => {

  
  return(
    <div className='products_card'>
    <Fragment>
      <ProductEspecific
          producto='Carne'
          imagen='carne'
          boton='Pedir ahora'
      />
      <ProductEspecific
          producto='Pollo'
          imagen='pollo'
          boton='Pedir ahora'
      />
      <ProductEspecific
          producto='Vinos'
          imagen='vino'
          boton='Pedir ahora'
      />

    <ProductEspecific
          producto='Salsamentaria'
          imagen='salsamentaria'
          boton='Pedir ahora'
      />
    </Fragment>
    </div>
  );
}

export default ProductCard