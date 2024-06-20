// done========================
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./StulLoginSlice";
import { useNavigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";

const StudentDB = () => {
    const myuse = useSelector(state => state.stuUser.user)
    const myDispatch = useDispatch();
    const myNav = useNavigate();
    const handleLogout = (e) => {
        e.preventDefault()
        myDispatch(logout(myNav("/")))
    }

    useEffect(() => {
        if (myuse == null) {
            myNav("/")
        }
    }, [])

    return (
        <>
            <div id="studentDB">
            <div id="top">
                        <div id="stuuu"><p>Welcome  Student </p> <p id="name">{myuse}</p></div>
                       <button onClick={(e) => { handleLogout(e) }} id="stuDBbtn">Logout</button>
                    </div>
                <div id="navbar1">
              
                    <div id="studb">
                       

                            {/* <Link to="/studentDB" className="stuLink">Student Profile</Link> */}
                            <Link to="complain" className="stuLink">Complain</Link>
                            <Link to="response" className="stuLink">See Response</Link>
                            <Link to="changePass" className="stuLink">Change-Password</Link>
                        
                       
                        {/* <div id="stubg"></div> */}
                    </div>
                    
                    <div id="stuoutlate">
                            <Outlet />
                        </div>
                </div>
            </div>

        </>
    );
}
export default StudentDB;