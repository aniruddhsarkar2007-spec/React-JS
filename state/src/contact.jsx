function Contact(){
 function fun(a){
    alert(a)
 }
return(
    <>
    <h1>Contact page</h1>
    <button onClick={()=>fun("data")}>Click here</button>
    </>
)
}

export default Contact