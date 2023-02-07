import styles from './products.css'
import ProductsFull from '../products_full/ProductsFull';
import { Fragment } from 'react';
const ProducDescription  = (props) =>{
  return(
    <Fragment>
      <ProductsFull
        titulo_producto='Carnes'
        imagen='carne'
        descripcion= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit dolor aliquam voluptates labore voluptas quos? Mollitia numquam libero commodi molestiae possimus doloremque, vero excepturi blanditiis enim nihil ratione fugit.'
        producto_boton='Pedir ahora'
      />   
      <ProductsFull
        titulo_producto='Pollos'
        imagen='pollo'
        descripcion= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit dolor aliquam voluptates labore voluptas quos? Mollitia numquam libero commodi molestiae possimus doloremque, vero excepturi blanditiis enim nihil ratione fugit.'
        producto_boton='Pedir ahora'
      />      
      <ProductsFull
        titulo_producto='Vinos'
        imagen='vino'
        descripcion= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit dolor aliquam voluptates labore voluptas quos? Mollitia numquam libero commodi molestiae possimus doloremque, vero excepturi blanditiis enim nihil ratione fugit.'
        producto_boton='Pedir ahora'
      />  
      <ProductsFull
        titulo_producto='Salsamentaria'
        imagen='salsamentaria'
        descripcion= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit dolor aliquam voluptates labore voluptas quos? Mollitia numquam libero commodi molestiae possimus doloremque, vero excepturi blanditiis enim nihil ratione fugit.'
        producto_boton='Pedir ahora'
      />  
    </Fragment>
  );
}

export default ProducDescription