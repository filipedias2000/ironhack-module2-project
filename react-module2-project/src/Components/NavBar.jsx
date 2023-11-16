import { Link } from "react-router-dom";
import SearchBar from "./SearchBy_ISBN";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* You can place the SearchBar or other content on the left side */}
        {/* <SearchBar /> */}
        <Link to="/" style={{textDecoration: 'none', color: 'white'}}>HomePage</Link>
      </div>
      <div className="app-name">
        <h2>OpenStories</h2>
      </div>

      <div className="nav-right">
        {/* Place the View List link and its associated content on the right side */}
        <Link to="/ViewList" style={{textDecoration: 'none', color: 'white'}}>
          View List
          {/* <img src="./star.png" alt="" height="40px" /> */}
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
