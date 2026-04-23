import Child1 from "./child1"
import Child2 from "./child2"
import Child3 from "./child3"
import Child4 from "./child4"



function App(value)
{
   let person={
        "name":"Abc",
        "contact":1234    
    }

  return(
    <>
    <h1>This is home page</h1>
    <Child1 name="jay" age={20}/>
    <Child2 city="Bhopal"/>
    <Child3 name="Aniruddh" contact={1234}/>
    <Child4 value={person}/>
    </>
  )
}

export default App