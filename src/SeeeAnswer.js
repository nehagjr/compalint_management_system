import { useState,useEffect } from "react";
import axios from "axios";
import {  useSelector } from "react-redux";


const SeeeAnswer=()=>{
    let sno=0;
    const [mydata,setData]=useState([]);
    const stuid=useSelector((state)=>state.stuUser.stuid)
    const loadData=()=>{
        let url=`http://localhost:4000/stucomplain/?stuid=${stuid}`;
        axios.get(url).then((res)=>{          
            setData(res.data)
            // console.log(res.data)
        })
    } 
    useEffect(()=>{
        loadData();
    },[])

    const ans=mydata.map((key)=>{
        sno++;
        return(
            <>
               <tr>
                  <td>{sno}</td>
                  <td> {key.complain} </td>
                  <td> {key.ans} </td>
               </tr>
            </>
        );
    })
    return(
        <>
        <div id="tablee">
        <h1 id="ansHead">See your Answers here..!!!! </h1>
           <table width="700px" align="center" bgcolor=" #b8002b" >
              <tr>
                <th>Sr.no</th>
                <th>Your Complaints</th>
                <th>Replies</th>
              </tr>
              {ans}
           </table>
        </div>
          
        </>
    );
}
export default SeeeAnswer;