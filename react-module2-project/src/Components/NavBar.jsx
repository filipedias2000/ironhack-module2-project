import { Link } from "react-router-dom";


function NavBar () {

return (
    <nav className = "navbar">
          <ul className="nav-list">
            < Link to = "/">HomePage </Link>
            <Link to="/ViewList">
            <img
              src=" "
              alt="View List"
              height="50px"
            />
            {/* View List */}
          </Link>

          </ul>
        </nav>
        )
}

export default NavBar;