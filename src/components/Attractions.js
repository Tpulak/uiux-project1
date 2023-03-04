import './css/Attractions.css';
import cyclone from './img/Cyclone.jpg'
import ferris from './img/Wonderwheel.jpg'
import boardwalk from './img/Boardwalk.jpg'
import beach from './img/Beach.jpg'


function Attractions() {
    return (
      <div className='main'>
      <div className='header'> 
        <h1>Attractions</h1>
        <h3>See what the best of Coney Island has to offer for your stay!</h3>
      </div>
      <div className="boxes">
        <div className="cyclone">
          <img src={cyclone} alt="Cyclone" />
          <p>
          The Cyclone roller coaster, located at Luna Park in Coney Island, New York City, is a historic wooden coaster known for its steep drops, sharp turns, and thrilling speed. It reaches a height of 85 feet and speeds up to 60 mph. As a National Historic Landmark and featured in various films and TV shows, the Cyclone offers an unforgettable experience for anyone seeking an adrenaline rush or a taste of history.
          </p>
        </div>
        <div className="ferris">
          <img src={ferris} alt="ferris wheel" />
          <p>
          The Wonder Wheel is a towering Ferris wheel located at Deno's Wonder Wheel Amusement Park in Coney Island, New York City. It stands at 150 feet tall and offers stunning panoramic views of the Atlantic Ocean, the Coney Island boardwalk, and the surrounding cityscape. The Wonder Wheel is a classic attraction that has been in operation since 1920 and is considered an iconic symbol of the city. Anyone seeking a unique and breathtaking perspective of New York should ride the Wonder Wheel.
          </p>
        </div>
        <div className="boardwalk">
          <img src={boardwalk} alt="boardwalk" />
          <p>
          The Coney Island Boardwalk is a legendary beachfront promenade located in Brooklyn, New York City. It stretches for 2.7 miles along the Atlantic Ocean and is home to a range of attractions, including amusement parks, eateries, and entertainment venues. Visitors can take a dip in the ocean, walk along the boardwalk, or catch a breathtaking view of the sunset. The Coney Island Boardwalk is a must-visit destination for anyone seeking a quintessential New York experience, full of fun, history, and stunning coastal scenery. 
          </p>
        </div>
        <div className="beach">
          <img src={beach} alt="beach" />
          <p>
          Coney Island Beach is a vibrant and iconic stretch of sand located in Brooklyn, New York City. It offers visitors a range of activities, from sunbathing and swimming to surfing and fishing. The beach is also home to a historic boardwalk and several amusement parks, making it a popular destination for families, couples, and thrill-seekers alike. With its lively atmosphere, stunning views of the Atlantic Ocean, and array of attractions, Coney Island Beach is a must-visit spot for anyone looking to experience the quintessential New York beach day.
          </p>
        </div>
      </div>
    </div>
  );
}
  
  export default Attractions;