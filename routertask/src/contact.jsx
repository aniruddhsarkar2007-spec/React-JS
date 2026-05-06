import { Link } from "react-router-dom"

function Contact(){
  return(
    <>
    <h1>This is Contact Page</h1>
    <button><Link to='/about'>About</Link></button>
    </>
  )
}
export default Contact