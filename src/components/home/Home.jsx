import style from './home.css'
import Slider from '../slider/Slider'
import ProductsCard from '../products_card/ProductsCard';
import Map from '../map/Map';
import DescriptionReview from '../description_review/DescriptionReview';
function Home (){
  
  
  return(
    <section>
        <Slider/>
        <ProductsCard/>
        <DescriptionReview/>
        <Map></Map>
    </section>
  );
}

export default Home