import './App.css'
import Cont from "./cont.jsx"
import { Gallery,Gallery1 } from './gallery.jsx'

function Task()
{
  return(
  <>
     <nav>
    <div className="navbar">
    <h1> Aniruddh</h1>
     
    <ul className="list">
        <li className="Home">Home</li>
          <li className="About">About us</li>
            <li className="Course">Course</li>
              <li className="Contact ">Contact us</li>

              <button className="Join">Join Now</button>
    </ul>
    
    </div>


    <div className='hii'></div>
 </nav>

 <Cont/>
 <Gallery/>
  <Gallery1/>
 </>
  )
 
}
export default Task