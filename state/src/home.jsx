import { useState } from "react";

function Home(){
    let[demo,setDemo] = useState("Hello")
    let[sum,setSum] = useState(0)
   
    

    function fun(){
        setDemo("Working")
    }

    function inc(){
        setSum(sum+1)
    }

    function decc(){
        if(sum>0){
        setSum(sum-1)
        }
        else{
            alert("Not less than 0")
        }
        
    }

    return(
        <>
        <h1>This is Home page -{demo}</h1>
        <button onClick={fun}>Click here</button>

        <h1>{sum}</h1>
        <button onClick={decc}>-</button>
        <button onClick={inc}>+</button>
        </>
    )
    
}

export default Home