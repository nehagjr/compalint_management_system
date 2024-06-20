import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginHome from "./LoginHome";
import Login from "./Login";
import LoginLayout from "./LoginLayout";
import Registration from "./Registration";
import StudentDB from "./StudentDB";
import Complain from "./Complain";
import AdminDB from "./AdminDB";
import SeeComplain from "./SeeComplain";
import Reply from "./Reply";
import SeeeAnswer from "./SeeeAnswer";
import DeshBoardLoader from "./DeshboardLoader";
import StuChangePass from "./StuChangePass";
import AdminChangePass from "./AdminCngPass";
import Home from "./Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<LoginLayout />}>
            <Route path="home" element={<Home/>}/>
            <Route path="loginHome" element={<LoginHome />} />
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Registration />} />
            <Route path="/studentDB/complain" element={<DeshBoardLoader/>} >
                 <Route path="/studentDB/complain" element={<Complain/>} /> 
                 <Route path="complain" element={<Complain/>} /> 
                 <Route path="response" element={<SeeeAnswer/>}/>
                 <Route path="changePass" element={<StuChangePass/>}/>
            </Route>                
            <Route path="adminDB" element={<AdminDB />}>
                 <Route path="seeComplain" element={<SeeComplain />} />
                 <Route path="reply/:id" element={<Reply />} />
                 <Route path="changePassAD" element={<AdminChangePass/>}/>  
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;