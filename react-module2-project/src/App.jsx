
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";

import BookByISBN from './Components/BookDetailsPage/DetailsByISBN';
import NavBar from './Components/NavBar';
import SearchBar from './Components/SearchBy_ISBN';

import BookByName from './Components/BookDetailsPage/DetailsByName';
import ListPage from './Components/ListPage';

function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/list/:bookId" element={<BookByISBN/>}/>
        <Route path="/listName/:bookName" element={<BookByName/>}/>

        <Route path="/myList" element={<ListPage/>}/>
        <Route path="/Testes/apagar no fim" element={<SearchBar/>}/>
      </Routes>
    </div>
  )
}

export default App
