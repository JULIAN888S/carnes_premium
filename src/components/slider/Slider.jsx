import style from '../slider/slider.css'
import { Fragment } from 'react';
import SliderContent from './slider_content/SiderContent';
const Slider = (props) => {
  return(
    <section className='mainSlider'>

      <Fragment>
        <SliderContent
        imagen='carne'
        titulo='Las mejores carnes Premium'
        descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem a c'
        />
        <SliderContent
        imagen='pollo'
        titulo='Las mejores carnes Premium'
        descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem a c'
        />
        <SliderContent
        imagen='pollo'
        titulo='Las mejores carnes Premium'
        descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. exercitationem a c'
        />
        
        
      </Fragment>
      </section>  
  );
}

export default Slider