import { Link } from "react-router-dom";


function NavBar () {

return (
    <nav>
          <ul>
            < Link to = "/">HomePage </Link>
            < Link to = "/ViewList">View List </Link>
          </ul>
        </nav>
        )
}

export default NavBar;