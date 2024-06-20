import { useState,useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import rimg from './images/f7.png'

const StuChangePass=()=>{

    const stuid=useSelector(state=>state.stuUser.stuid)
    const myNav=useNavigate();
 
    const [oldPass,setOldPass]=useState("");
    const [newPass,setnewPass]=useState("");
    const [rePass,setrePass]=useState("");

    const submitPass=()=>{
        let url=`http://localhost:4000/student/${stuid}`;
        axios.get(url).then((res)=>{
            console.log(res.data.password)
            if(res.data.password==oldPass)
            {
                if(newPass=="")
                {
                    alert("Enetr valid Pass")
                }
                else{ 
                   if(newPass===rePass)
                   {
                      axios.patch(url,{"password":newPass}).then((res)=>{
                        alert("Password successfully submitted");
                        myNav("/login")
                      })                    
                   }
                   else
                   {
                      alert("Password not matched")
                   }
                }
            }
            else{
                alert("Old Password not matched")
            }
        })
    }

    return(
        <>
        <div id="wrapper">
        <div id="loginImg"><img src={rimg} style={{width:"28vw", height:"60vh"}}/></div>

        <div id="loginBox" className="Stupass">
        <h2 style={{color:"#b8002b"}}>Change student Password</h2>
           Enter Current Password : <input type="text" name="oldPass" value={oldPass} onChange={(e)=>{setOldPass(e.target.value)}}/> <br/>
           Enetr new password :<input type="text" name="newPass" value={newPass} onChange={(e)=>{setnewPass(e.target.value)}}/> <br/>
           Retype password : <input type="text"name="rePass" value={rePass} onChange={(e)=>{setrePass(e.target.value)}}/> <br/>
          
          <br/> <div id="cBtn">
           <button onClick={submitPass}>Submit</button>
           </div>
        </div>
        </div>
           
        </>
    );
}
export default StuChangePass;