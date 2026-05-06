import { Link } from "react-router-dom"
function Contact()
{
  return(
    <>
     <h1 className="cont">This is Contact page</h1>
      <button> <Link to='/about' className="hiiii">About</Link> </button>
    </>
  )
}
export default Contact