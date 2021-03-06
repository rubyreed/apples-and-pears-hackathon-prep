import {Route, Routes} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import About from "./components/About";
import Apples from './components/Apples';
import AppleShow from "./components/AppleShow";
import AppleForm from "./components/AppleForm";
import NavBar from "./components/NavBar";
import Pears from "./components/Pears";
import PearShow from "./components/PearShow";
import PearForm from "./components/PearForm";
import Worms from "./components/Worms";
import WormShow from "./components/WormShow";
import WormForm from "./components/WormForm";

function App() {
  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/about" element = {<About />}/>
      <Route path = "/apples" element = {<Apples />}/>
      <Route path = "/apples/:id" element = {<AppleShow />}/>
      <Route path = '/apples/:id/edit' element = {<AppleForm />}/>
      <Route path = "/pears" element = {<Pears />}/>
      <Route path = "/pears/:id" element = {<PearShow />}/>
      <Route path = "/pears/:id/edit" element = {<PearForm />}/>
      <Route path = "/apples/:id/worms" element = {<Worms />}/>
      <Route path = "/apples/:apple_id/worms/:id" element = {<WormShow />}/>
      <Route path = "/apples/:apple_id/worms/:id/edit" element = {<WormForm />}/>
    </Routes>
    </div>
  );
}

export default App;
