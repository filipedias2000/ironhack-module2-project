
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import ListPage from './Components/ListPage';
import List from './Components/List';

function App() {
 

  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/list/:bookId" element={<ListPage/>}/>
      </Routes>

    </div>
  )
}

export default App
