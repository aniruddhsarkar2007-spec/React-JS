import { useState } from "react"

function App(){

 let [demo,setDemo] =useState("hii")
 let [color,setColor] = useState()

 function fun(){
  setDemo("Kya bolti public!!!")
 }

  function red()
  {
   setColor("red") 
  }
  return(
    <>
    <div style={{backgroundColor:color}}>
    <h1>This is from App page -{demo}</h1>
    <button onClick={fun}>Click here</button>
    <br /><br />
    <button onClick={red}>RED</button>
    <button>Blue</button>
    <button>Green</button>
    </div>


    </>
  )
  
}
export default App