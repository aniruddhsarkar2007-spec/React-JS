import reactimg from "./assets/react.svg"
function Cont()
{
    let mystyle ={
        backgroundColor:"blue",padding:"20px"
    }
    return(
        <>
        <h1 style={{backgroundColor:"purple",color:"white"}}>Aniruddh</h1>
        <h1 style={{backgroundColor:"pink",color:"white"}}>Aniruddh</h1>
        <h1 style={{backgroundColor:"blue",color:"white"}}>Aniruddh</h1>
        <h1 style={{backgroundColor:"red",color:"white"}}>Aniruddh</h1>
        <h1 style={{backgroundColor:"brown",color:"white",padding:"20px"}}>Aniruddh</h1>
       
        <h2 style={mystyle}>Do your Own thing</h2>

        <img src={reactimg} alt="" />

        </>
    )
}

export default Cont