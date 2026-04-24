import Child3 from "./child3"


function Child2(p)
{
    return(
        <>
        <Child3 data={p.data}/>
        </>
    )
}
export default Child2