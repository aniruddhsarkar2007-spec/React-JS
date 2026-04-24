import Child2 from "./child2"


function Child1(p)
{
    return(
        <>
        <Child2 data={p.name}/>
        </>
    )
}
export default Child1