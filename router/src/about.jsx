import { Link } from "react-router-dom"
function About()
{
  return(
    <>
     <h1>This is About page</h1>
     <button> <Link to='/contact' className="hwl">Contact</Link> </button>
    </>
  )
}
export default About