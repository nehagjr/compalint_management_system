import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./StulLoginSlice";
import { adminlogin } from "./AdminSlice";
import { useDispatch } from "react-redux";
import loginimg from './images/f1.png'

const Login = () => {

  const [input, setInput] = useState({});
  const [usertype, setUsertype] = useState("")
  const myNav = useNavigate();
  const mydispatch = useDispatch();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({ ...values, [name]: value }));
  }

  const handelSubmit = (e) => {
    e.preventDefault();

    if (usertype == "student") {
      let url = (`http://localhost:4000/student/?email=${input.email}`)
      axios.get(url).then((res) => {
        //console.log(res.data)
        let idwidthname = {}
        if (res.data.length == 1) {
          if (res.data[0].password == input.password) {
            const username = res.data[0].name;
            const userid = res.data[0].id;
            mydispatch(login(idwidthname = {
              "name": username,
              "iddd": userid
            })) 
            myNav("/studentDB/complain");
          }
          else {
            alert("Invalid Password");
          }
        }
        else {
          alert("Invalid Email !!!");
        }
      });
    }

    else if (usertype == "admin") {
      let url = (`http://localhost:4000/admin/?email=${input.email}`)
      axios.get(url).then((res) => {
        console.log(res.data)
        let idwidthname = {}
        if (res.data.length == 1) {
          if (res.data[0].password == input.password) {
            const username = res.data[0].name;
            const userid = res.data[0].id;
            mydispatch(adminlogin(idwidthname = {
              "name": username,
              "iddd": userid
            }))
            myNav("/adminDB");
          }
          else {
            alert("Invalid Password");
          }
        }
      });
    }
    else {
      alert("must select an option")
    }
  }

  return (
    <>
      <div id="wrapper">

        <div id="loginBox">

          <p className="Logintext">Login to Your Account</p> <br />
          <center>
            <p className="social">Login your social networks</p> <br />
            <h1>f      G      In</h1>
            <br />
          </center>

          <div>
            <input type="email" placeholder="Enter email " name="email" value={input.email} onChange={handleInput} /> <br /> <br />
            <input type="password" placeholder="Enter Password " name="password" value={input.password} onChange={handleInput} /> <br /> <br />
            <div id="select"> <p>Login as</p> <select name="student" value={usertype} onChange={(e) => { setUsertype(e.target.value) }}>
              <option > default</option>
              <option value={"student"}> Student </option>
              <option value={"admin"}> Admin </option>
            </select>
            </div>
            <br /><br />

            <button onClick={handelSubmit} className="Lbtn">Login</button>
            <Link to={"/register"}><button className="Lbtn two">Registration</button> </Link>
          </div>

        </div>

        <div id="loginImg"><img src={loginimg} /></div>


      </div>
    </>
  );
}
export default Login;