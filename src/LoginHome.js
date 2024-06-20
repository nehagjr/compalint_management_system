import { Link, Outlet } from "react-router-dom";
import "./Css/Login.css"
// import option from './images/sidebg.png'
//import Login from "./Login";
// import bimg from "./images/user.png"
const LoginHome = () => {
    return (
        <>
            <div id="wrapper">

                {/* <div><img src={option}/></div> */}

                <div id="text">

                    <p>Set up your new Cybrom profile</p>
                    <Link to={"login"}><button>Login</button> </Link> <br />
                    <Link to={"register"}><button>Registration</button> </Link>

                </div>
                
            </div>
            <Outlet />
        </>
    );
}
export default LoginHome;