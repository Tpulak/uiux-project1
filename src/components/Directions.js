import './css/Directions.css';
import train from './img/train.jpg'
import bus from './img/bus.jpg'

function Directions(){
    return (
        <div className='main'>
            <div className='header'>
                <h1>Directions</h1>
                <h3>Here you can find directions on how to get to Coney Island!</h3>
            </div>
            <div className='boxes'>
              <div className='train'>
                <img src={train} alt="Train" />
                <p>
                take train :D
                </p>
              </div>

              <div className='bus'>
                <img src={bus} alt="Bus" />
                <p>
                take bus :D    
                </p>
            </div>
            </div>

            <h3>Heres a link to google maps!</h3>
        </div>
        
    )
}

export default Directions;