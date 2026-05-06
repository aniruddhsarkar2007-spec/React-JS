import { Route,  Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Navbar from "./navbar"
import "./App.css"

function App()
{
  return(
    
    <>
    <Navbar/>
     <Routes>
     <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
    </>
  )
}  
export default App