import './css/Homepage.css';
import logo from './img/coneylogo.png'
import coney from './img/coneyisland.jpg'
import drawing from './img/drawing.jpg'

function Homepage() {
    return (
      <div className="content">
        <div className="face">
          <img src={logo} alt="logo" />
        </div>
        <div className="content"></div>
        <h1>Welcome to Coney Island  </h1>
        <img src={coney} alt="Coney" />
        <img src={drawing} alt="drawing" />
      </div>
    );
  }
  
  export default Homepage;