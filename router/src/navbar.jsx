import { Link } from "react-router-dom"
const Navbar=()=>{
    return(
        <>
        <nav>
            <h1 className="hi">LOGO</h1>
            <ul>
                <li><Link to='/' className="home">Home</Link></li>
                
                <li><Link to='/about' className="about">About</Link></li>
                
                <li><Link to='/contact' className="contact">Contact</Link></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar