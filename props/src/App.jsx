import Child1 from "./child1"
import Child2 from "./child2"



function App()
{
  return(
    <>
    <h1>This is home page</h1>
    <Child1 name="jay" age={20}/>
    <Child2 city="Bhopal"/>
    
    </>
  )
}

export default App