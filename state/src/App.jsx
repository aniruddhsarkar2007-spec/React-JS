import { useState } from "react"
import Home from "./home"
import Contact from "./contact"
import Img from "./imgtask"



function App()
{
  // let [variable,function]=useState(initial state/ value)
  let [data,setData]=useState(10.56)
  let [data1,setData1]=useState(["aniruddh",18])
  let [data2,setData2]=useState({name:"Aniruddh"})
  let [color,setColor] = useState()

  function red()
  {
    setColor("red")
  }

  function blue()
  {
    setColor("blue")
  }

   function pink()
  {
    setColor("pink")
  }

   function green()
  {
    setColor("green")
  }

  


  return(
    <>
    <div style={{backgroundColor:color}}>
    <h1>Lorem ipsum dolor sit amet. {data}</h1>
    <h1>Lorem ipsum dolor sit amet. {data1[0]}</h1>
    <h1>Lorem ipsum dolor sit amet. {data2.name}</h1>
    <Home />
    <inc/>
    <decc/>
    <button onClick={red}>Red</button>
    <button onClick={blue}>Blue</button>
    <button onClick={pink}>Pink</button>
    <button onClick={green}>Green</button>
    <button onClick={()=>setColor('black')}>black</button>
    </div>
    <Contact/>
    <br /><br />
    <Img/>
    </>
  )
}

export default App   