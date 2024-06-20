import axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const SeeComplain=()=>{
    let sno=0;
    const [data,setdata]=useState([]);
    const [data1,setdata1]=useState([]);
    
    const loadData=()=>{
        let url="http://localhost:4000/stucomplain"
        axios.get(url).then((res)=>{
            setdata(res.data);
            // console.log(res.data);
        });
    }  

    const loaddata1=()=>{
       
        let url="http://localhost:4000/student"
        axios.get(url).then((res)=>{
            setdata1(res.data);
            console.log(res.data);
        })
    }

    useEffect(()=>{
        loadData();
        loaddata1();
    },[])

    const allComplain=data.map((key)=>{
        const studata=data1.find((sKey)=>sKey.id==key.stuid)
        console.log(studata)
       sno++;
        let sturply="";
        
        return(
            <>
               <tr style={{textAlign:"center"}}>
                <td> {sno} </td>
                <td align="start" style={{paddingLeft:"10px"}}> {key.complain} </td>
                <td> {key.stuid} </td>   
                <td> {studata?studata.name:"Unknown"} </td>
                <td> {studata?studata.email:"Unknown"} </td>
                <td>
                    { 

                    sturply==key.ans?
                    <Link to={"/adminDB/reply/"+key.id}><button id="rplyBTN">Reply </button></Link>
                    :"Replied"
                    }
                </td>
               </tr>
            </>
        );
    })
    return(
        <>
        <div id="tablee">
           <h1 id="ansHead">See Complaints</h1>
           <br/>
           <table  width="990px"align="center" bgcolor=" #b8002b">
               <tr style={{textAlign:"center", background:"#f09faf"}}>
                  <th>Sno.</th>
                  <th >Complaints</th>
                  <th style={{width:"100px"}}>Student Id</th>
                  <th style={{width:"150px"}}>Student name</th>
                  <th style={{width:"200px"}}>Student Email</th>
                  <th style={{width:"100px"}}>Status</th>
               </tr>
               {allComplain}
           </table> 
           </div>        
        </>
    );
}
export default SeeComplain;