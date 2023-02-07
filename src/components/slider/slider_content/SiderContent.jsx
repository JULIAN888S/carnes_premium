import style from '../../slider/slider.css'
import { Fragment } from "react";

const SliderContent = (props) => {
  return(
    <div className="slider_content">
      <ul> 
        <li>
        <div className='slide'>
        <img src={require(`../img/foto-${props.imagen}.png`)}/>
          <div className='textSlide'>
          <h4>{props.titulo}</h4>
          <p>{props.descripcion}</p>
          </div>
          </div>
        </li>
      </ul>
      </div>
  
  );
}
export default SliderContent