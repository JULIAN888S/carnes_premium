import './header.css'
import logo from './logo.png'
import Navigation from './navigation/Navigation';
function Header (){
  
    return(
      <header>
        <h1><img src={logo}/></h1>
        <Navigation/>
      </header>
    );
  }

export default Header 