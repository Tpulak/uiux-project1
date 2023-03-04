import './css/Homepage.css';
import logo from './img/coneylogo.png'
import coney from './img/coneyisland.jpg'
import drawing from './img/drawing.jpg'

function Homepage() {
    return (
      <div className="homepage">
        <div className="face">
          <img src={logo} alt="logo" />
        </div>

        <div className="content">
        <h1>Welcome to Coney Island  </h1>
        <h4>Welcome to Coney Island! This iconic New York destination has been delighting visitors for over a century with its unique blend of history, fun, and entertainment. With its legendary boardwalk, thrilling amusement parks, and sandy beaches, Coney Island is the perfect destination for a day of adventure, relaxation, and good old-fashioned fun. Whether you're looking to ride the iconic Cyclone roller coaster or sample some of the famous Nathan's hot dogs, there's something for everyone at Coney Island. So come on down and experience the magic of this one-of-a-kind destination for yourself!</h4>
        <img src={drawing} alt="drawing" />
      </div>
      </div>
    );
  }
  
  export default Homepage;