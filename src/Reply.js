import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";

const Reply=()=>{
    const [input, setInput] = useState("")
    const {id}=useParams();
    const myNav=useNavigate();

    const handleSubmit=()=>{
        const url=`http://localhost:4000/stucomplain/${id}`
        axios.patch(url,{"ans":input}).then((res)=>{
            console.log(res.data)
            alert("you have sucessfully reply to student")   
            myNav("/adminDB/seeComplain")       
        })
    }
    return(
        <>
         <div id="stuComplain">
         <div id="c2">

</div>
<div id="c1">
            <h1>Reply to Student's Complain{id}</h1>
            <div id="textbox">
                    <h2> Your complain :- </h2><br /> <textarea type="" placeholder="Write your complain here" name="area" value={input} onChange={(e)=>setInput(e.target.value)} style={{ height: "150px", width: "350px" }} /> <br />
                    <div id="cBtn"><button onClick={handleSubmit}>Submit Answer</button></div>
                </div>
                </div>

                </div>
        </>
    );
}
export default Reply;