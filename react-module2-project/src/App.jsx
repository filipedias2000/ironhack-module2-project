
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import ListPage from './Components/ListPage';
import NavBar from './Components/NavBar';

function App() {
 

  return (
    <div>
      
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/list/:bookId" element={<ListPage/>}/>
      </Routes>

    </div>
  )
}

export default App
