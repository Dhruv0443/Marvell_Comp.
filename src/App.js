import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from "react-router-dom";
import './style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Index from "./pages/index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Service from "./pages/Service";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="Service" element={<Service/>}/>
        <Route path="/Team" element={<Team/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  );
} 

export default App;
