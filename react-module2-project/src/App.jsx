
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import BookDetailsPage from './Components/BookDetailsPage';
import NavBar from './Components/NavBar';
import AllBooksPage from './Components/AllBooksPage';


import SearchBar from './Components/TESTES';
import SearchByNameBar from './Components/SearchByNameBar';

function App() {
 

  return (
    <div>
      
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/allBooks" element={<AllBooksPage/>}/>
        <Route path="/list/:bookId" element={<BookDetailsPage/>}/>


        <Route path="/Testes/apagar no fim" element={<SearchBar/>}/>
        <Route path="/Testes/apagar no fim" element={<SearchByNameBar/>}/>




      </Routes>

    </div>
  )
}

export default App
