// done=============================
import "./Css/Login.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import rimg from './images/f3.png'

const Registration = () => {
    const [input, setInput]= useState({});
    const myNav= useNavigate();

  const handleInput=(e)=>
  {
    let name=e.target.name;
    let value=e.target.value;
    setInput(values=>({...values, [name]:value}));
  }
  const handleSubmit=()=>
  {

        console.log(input)
        let url="http://localhost:4000/student";  
                   
            axios.post(url, input).then((res)=>{
                console.log(res.data.password)
                console.log(res.data.email)
                if(res.data.name==undefined)
                {
                    alert("must enter your name")
                }
                else if(res.data.name=="")
                {
                    alert("name cant be blank")
                }
                else if(res.data.email==undefined)
                {
                    alert("must enter email")
                }
                else if(res.data.email=="")
                {
                    alert("email cant be blanck")
                }
                else if(res.data.password=="")
                {
                    alert("password cant be blanck")
                }
                else if(res.data.password==undefined)
                {
                    alert("must enter password")
                }
                else{
                    alert("You are Succesfully Regsitered!!!");
                    myNav("/login");

                }
        });
  }
    return (
        <>
            <div id="wrapper">
            <div id="loginImg"><img src={rimg} style={{width:"30vw"}}/></div>
           
                <div id="loginBox">               
                <p className="Logintext">Create New Account</p> <br/>
               <center> <h1>f      G      In</h1></center> <br/>
                      <input type="text" placeholder="Enter Your Name "   name="name" value={input.name} onChange={handleInput}/> <br /> <br/>

                      <input type="email" placeholder="Enter Email "   name="email" value={input.email} onChange={handleInput}/> <br /> <br/>

                      <input type="number" placeholder="Enter phone no. "   name="phone" value={input.phone} onChange={handleInput}/> <br /> <br/>

                      <div style={{display:"flex", gap:"10px"}}>
                           <input type="password" placeholder="Create Password "  name="password" value={input.password} onChange=      {handleInput} style={{borderRadius:"10px"}}/> <br /> <br/>
                           <input type="password" placeholder="Repeat Password "  name="password1" value={input.password1} onChange=      {handleInput} style={{borderRadius:"10px"}}/> <br /> <br/>                      
                      </div>
                      <br/>
                      <br/>

                    <center><button onClick={handleSubmit} className="Lbtn">Login</button></center>
                </div>
            </div>
        </>
    );
}
export default Registration;