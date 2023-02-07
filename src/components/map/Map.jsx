import style from './map.css'
function Map (){
  return(
  <div className='map_container'>
    <iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=plazuelas%20del%20virrey&t=&z=19&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
  </div>  
  );
}
export default Map