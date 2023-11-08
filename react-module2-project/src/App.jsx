
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./Components/HomePage";
import ListPage from './Components/ListPage';

function App() {
 

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/list" element={<ListPage/>}/>
      </Routes>
    </div>
  )
}

export default App
