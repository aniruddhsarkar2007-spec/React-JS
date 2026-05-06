import { Route,  Routes } from "react-router-dom"
import About from "./about"
import Contact from "./contact"
import Home from "./home"
import Join from "./join"
import Navbar from "./nav"
import "./App.css"


function App(){
  return(
    <>
    <Navbar/>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/join" element={<Join/>}/>
    </Routes>
    </>
  )
}
export default App


