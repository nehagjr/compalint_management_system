import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "./AdminSlice";
import { useNavigate } from "react-router-dom";
import { Link ,Outlet} from "react-router-dom";
import { useState ,useEffect } from "react";

const AdminDB = () => {   

   const myuse = useSelector(state => state.adminuser.adminnm)
    const myDispatch = useDispatch();
    const myNav = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault()
        myDispatch(adminLogout(myNav("/")))
    }
    useEffect(()=>{
        if(myuse=="")
        {
             myNav("/")
        }
    },[])

    return (
        <>
            <div id="studentDB">
            <div id="top">
                        <div id="stuuu">Welcome Admin <p id="name">{myuse}</p></div>
                        <div ><button id="stuDBbtn" onClick={(e) => { handleLogout(e) }}>Logout</button></div>
                        </div>    
                        
                {/* <div id="stubg"></div> */}
                <div id="navbar1">
                    
                    <div id="studb">  
                    <Link to="" className="stuLink">Home</Link>
                    <Link to="" className="stuLink">Student Data</Link>
                    <Link to={"seeComplain"} className="stuLink">See Complain</Link>
                    <Link to={"changePassAD"} className="stuLink">Change Password</Link>
                    </div> 

                    <div id="stuoutlate"><Outlet/></div>
                </div>
             

            </div>
        </>
    );
}
export default AdminDB;