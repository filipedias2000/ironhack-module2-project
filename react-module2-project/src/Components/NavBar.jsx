import { Link } from "react-router-dom";
import SearchBar from "./SearchBy_ISBN";


function NavBar () {

return (
    <nav className = "navbar">
          <ul className="nav-list">
{/*             <SearchBar/>
 */}            <Link to = "/">HomePage </Link>
            <Link to="/ViewList">
            View List
            <img
              src="../public/like.png "
              alt="View List"
              height="40px"
            />
            
          </Link>

          </ul>
        </nav>
        )
}

export default NavBar;