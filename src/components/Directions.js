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
                By subway, take the D line, F line, N Line or Q line to station "Coney Island- Stillwell Avenue". The subway station is just a 5-minute walk away from the subway to the most famous Coney Island sites. 
                </p>
              </div>

              <div className='bus'>
                <img src={bus} alt="Bus" />
                <p>
                Take the B36 toward Coney Island-West 37 St, the B64 or the B68 toward Coney Island-Mermaid Av, or the B82 toward Mermaid Av-Stillwell Av.   
                </p>
            </div>
            </div>

            <div className='map'>
                <p>Here is a <a target="_blank" href="https://www.google.com/maps/dir//Coney+Island,+Brooklyn,+NY/@40.590702,-73.9871953,14z/data=!4m9!4m8!1m0!1m5!1m1!1s0x89c24448979d75cb:0x54745adc3c8f1179!2m2!1d-73.9707016!2d40.5755438!3e0">link</a> that leads to google maps!</p>
            </div>
        </div>
        
    )
}

export default Directions;