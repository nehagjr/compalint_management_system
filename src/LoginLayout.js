// done-----------------------------------
import { Link, Outlet } from "react-router-dom"
import logo from './images/ZOHO_LOGO.png'   
const LoginLayout =()=>{
    return(
        <>
        <div id="homeNav">
               <div id="Hlogo"><img src={logo}/> <p>Complaint Management System</p></div>
                <div>
                    <Link to={"home"} className="link" style={{color:"#de2c50"}}>Complaint Management System</Link>
                </div>
                <Link to={"login"} className="link"><button>Get start</button> </Link>
                
            </div>     
         <Outlet/>      
         </>
    )
}
export default LoginLayout;