import './css/Food.css';
import nathan from './img/nathan.webp'
import rubys from './img/rubys.jpg'
import cones from './img/cones.jpg'

function Food() {
    return (
      <div className="main">
      <div className='header'>
        <h1>Food</h1>
        <h3>Eat the best food Coney Island has to offer!</h3>
        
      </div>
      <div className='boxes'>
        <div className='nathan'>
          <img src={nathan} alt = "Nathans" />
          <p>
          Come and taste the most famous hotdogs at Nathan's Famous in Coney Island! With over a century of history, we serve you the most delicious hotdogs and hand-cut fries that will satisfy your cravings. Our hotdogs are made from 100% beef and grilled to perfection, and our signature secret spices give them an unforgettable flavor. Whether you're a New Yorker or just visiting, Nathan's Famous is a must-visit location for anyone looking to experience the best hotdogs in the world.
          </p>
        </div>
        <div className='rubys'>
          <img src={rubys} alt = "Rubys" />
          <p>
          Experience the taste of Coney Island at Ruby's Cafe and Grill! Located on the iconic boardwalk, we offer a wide variety of delicious food options that are perfect for a day at the beach. From classic burgers and fries to fresh seafood and salads, there's something for everyone at Ruby's. Enjoy a cold beer or cocktail with your meal while taking in the stunning ocean views. Whether you're a local or just visiting, Ruby's Cafe and Grill is the perfect place to relax and enjoy great food in a beautiful location.
          </p>
        </div>
        <div className='cones'>
          <img src={cones} alt="coneys cones" />
          <p>
          Indulge in a sweet treat at Coneys Cones, the best ice cream shop in Coney Island! We offer a wide variety of ice cream flavors that are made in-house with only the freshest ingredients. From classic flavors like vanilla and chocolate to unique options like cotton candy and strawberry cheesecake, there's something for everyone to enjoy. Our homemade waffle cones are the perfect complement to any flavor of ice cream. With our friendly service and unbeatable quality, Coneys Cones is the perfect place to satisfy your sweet tooth on a hot summer day.
          </p>
        </div>      
      </div>
      </div>
    );
  }
  
  export default Food;