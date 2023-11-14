
import './App.css'
import {Routes, Route} from "react-router-dom";

import HomePage from "./Components/HomePage";
import NavBar from './Components/NavBar';

import BookByISBN from './Components/BookDetailsPage/DetailsByISBN';
import BookByName from './Components/BookDetailsPage/DetailsByName';
import SearchBar from './Components/SearchBy_ISBN';

import ViewList from './Components/ViewList';
import AddBookForm from './Components/AddBook';




function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>

        <Route path="/list/:bookId" element={<BookByISBN/>}/>
        <Route path="/listName/:bookName" element={<BookByName/>}/>
        <Route path="/ViewList" element={<ViewList/>}/>
        <Route path="/AddBookManually" element={<AddBookForm/>}/>



        <Route path="/Testes/apagar no fim" element={<SearchBar/>}/>
      </Routes>
    </div>
  )
}

export default App
