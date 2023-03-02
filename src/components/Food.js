import './css/Food.css';
import nathan from './img/nathan.webp'
import rubys from './img/rubys.jpg'
import cones from './img/cones.jpg'

function Food() {
    return (
      <div className="main">
      <div className='header'>
        <h1>Food</h1>
        <h3>Eat the best food Coney Islan has to offer!</h3>
      </div>
      <div className='boxes'>
        <div className='nathan'>
          <img src={nathan} alt = "Nathans" />
          <p>
            DESRIPTION FOR Nathans
          </p>
        </div>
        <div className='rubys'>
          <img src={rubys} alt = "Rubys" />
          <p>
            DESSCRIPTION FOR RUBYS
          </p>
        </div>
        <div className='cones'>
          <img src={cones} alt="coneys cones" />
          <p>
            DESSCRIPTION FOR CONEYS CONES
          </p>
        </div>      
      </div>
      </div>
    );
  }
  
  export default Food;