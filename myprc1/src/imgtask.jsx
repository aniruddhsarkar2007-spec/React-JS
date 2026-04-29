import { useState } from "react"
import img1 from "./assets/download (3).jpg"
import img2 from "./assets/download (4).jpg"
import img3 from "./assets/download (5).jpg"
import img4 from "./assets/download (6).jpg"
function Img(){

let [img,setImage]=useState(img1)

    return(
        <>
        <img src={img1} height={"150px"} onMouseEnter={()=>setImage(img1)} alt=""/>
         <img src={img2} height={"150px"}  onMouseEnter={()=>setImage(img2)}alt="" />
          <img src={img3} height={"150px"} onMouseEnter={()=>setImage(img3)}alt="" />
           <img src={img4} height={"150px"} onMouseEnter={()=>setImage(img4)} alt="" />
           <div>
             <img src={img} height={"200px"} alt="" />
           </div>

        </>
    )

}

export default Img
