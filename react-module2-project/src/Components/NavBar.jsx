import { Link } from "react-router-dom";


function NavBar () {

return (
    <nav>
          <ul>
            < Link to = "/">HomePage </Link>
            < Link to = "/list/:bookId">BookDetailsPage </Link>
            { /*AINDA EM TESTES:*/}
            < Link to = "/listName/:bookName">BookDetailsbyISBNPage </Link>
           { /*< Link to = "/beers">AllBeersPage </Link>
            < Link to = "/random-beer">RandomBeerPage </Link>
            < Link to = "/new-beer">AddBeerPage </Link>
            < Link to = "/beers/:beerId">BeerDetailsPage </Link> */}
          </ul>
        </nav>
        )
}

export default NavBar;