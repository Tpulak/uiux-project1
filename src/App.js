import './App.css';

import Homepage from './components/Homepage';
import Food from './components/Food';
import Attractions from './components/Attractions';
import Directions from './components/Directions';
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      {/*<h1>Welcome to Project 1! Coney Island</h1>*/}
      {/*<h2>This text stays on top for every page</h2>*/}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="food" element={<Food />} />
          <Route path="directions" element={<Directions />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

const navStyle = {textDecoration: "none", color: "black"};
function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link style={navStyle}to="/">Home</Link>
          </li>
          <li>
            <Link style={navStyle} to="/attractions">Attractions</Link>
          </li>
          <li>
          <Link style={navStyle} to="/food">Food</Link>
          </li>
          <li>
            <Link style={navStyle} to="/directions">Directions</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

