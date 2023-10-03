import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Arts from "./routes/Arts";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";

export default function App(){
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/arts" element={<Arts/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/SignUP" element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
}