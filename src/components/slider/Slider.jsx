import style from '../slider/slider.css'
import { Fragment } from 'react';
import SliderContent from './slider_content/SiderContent';
const Slider = (props) => {
  return(
    <section className='mainSlider'>

      <Fragment>
        <SliderContent
        imagen='carne'
        titulo='Las mejores carnes Premium de Engativa'
        descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem a c'
        />
        <SliderContent
        imagen='pollo'
        titulo='Delicioso Pollo fresco de alta calidad'
        descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem a c'
        />
        <SliderContent
        imagen='vino'
        titulo='Vinos para acompañar sus comidas'
        descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem a c'
        />
        
        
      </Fragment>
      </section>  
  );
}

export default Slider