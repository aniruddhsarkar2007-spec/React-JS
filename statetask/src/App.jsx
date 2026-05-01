import { useState } from "react"
import img1 from "./assets/virat.jpg"
function App()
{

let[name,setName]=useState()

  return(
    <>


    <img src={img1} alt="" onMouseEnter={()=>setName("virat kohli")} onMouseLeave={()=>setName(" ")} />
    <h1 style={{position:"absolute",top:"10px",color:"white",fontSize:"50px"}}>{name}</h1>
    
    </>
  )
}

export default App