import { Link } from "react-router-dom";
import SearchBar from "./SearchBy_ISBN";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        {/* You can place the SearchBar or other content on the left side */}
        {/* <SearchBar /> */}
        <Link to="/">HomePage</Link>
      </div>

      <div className="nav-right">
        {/* Place the View List link and its associated content on the right side */}
        <Link to="/ViewList">
          View List
          <img src="./star.png" alt="View List" height="40px" />
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
