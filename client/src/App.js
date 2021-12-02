import {Route, Routes} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Apples from './components/Apples';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Pears from "./components/Pears";
import AppleShow from "./components/AppleShow";
import PearShow from "./components/PearShow";

function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/apples" element = {<Apples/>}/>
      <Route path = "/about" element = {<About />}/>
      <Route path = "/apples/:id" element = {<AppleShow/>}/>
      <Route path = "/pears" element = {<Pears/>}/>
      <Route path = "/pears/:id" element = {<PearShow/>}/>
    </Routes>
    </div>
  );
}

export default App;
