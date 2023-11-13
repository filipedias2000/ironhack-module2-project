import { Link } from "react-router-dom";


function NavBar () {

return (
    <nav>
          <ul>
            < Link to = "/">HomePage </Link>
            { /*AINDA EM TESTES:*/}
            < Link to = "/ViewList">View List </Link>

          
           { /*< Link to = "/beers">AllBeersPage </Link>
            < Link to = "/random-beer">RandomBeerPage </Link>
            < Link to = "/new-beer">AddBeerPage </Link>
            < Link to = "/beers/:beerId">BeerDetailsPage </Link> */}
          </ul>
        </nav>
        )
}

export default NavBar;