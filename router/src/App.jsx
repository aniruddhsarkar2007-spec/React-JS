import { Route,  Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Contact from "./contact"
import Navbar from "./navbar"
import "./App.css"
import Structure from "./structure"


function App()
{
  return(
    
    <>

     <Routes>
      <Route path="/" element={<Structure/>}>
     <Route index element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Route>
     </Routes>
    </>
  )
}  
export default App