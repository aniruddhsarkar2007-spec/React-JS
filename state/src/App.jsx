import { useState } from "react"

function App()
{
  // let [variable,function]=useState(initial state/ value)
  let [data,setData]=useState(10.56)
  let [data1,setData1]=useState(["aniruddh",18])
  let [data2,setData2]=useState({name:"Aniruddh"})

  return(
    <>
    <h1>Lorem ipsum dolor sit amet. {data}</h1>
    <h1>Lorem ipsum dolor sit amet. {data1[0]}</h1>
    <h1>Lorem ipsum dolor sit amet. {data2.name}</h1>
    </>
  )
}

export default App