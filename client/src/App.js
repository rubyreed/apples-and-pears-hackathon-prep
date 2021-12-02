import {Route, Routes} from "react-router-dom";
import './App.css';
import About from "./components/About";
import Apples from './components/Apples';
import NavBar from "./components/NavBar";
import Apple from "./components/Apple";

function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path = "/" element = {<Apples />}/>
      <Route path = "/about" element = {<About />}/>
      <Route path = "/apples/:id" element = {<Apple/>}/>
    </Routes>
    </div>
  );
}

export default App;
