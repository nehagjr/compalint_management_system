import { useSelector } from "react-redux";
import Loader from "./Loader";
import StudentDB from "./StudentDB";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeshBoardLoader=()=>{
     
    const [isLoading,setIsLoading]=useState((true))
    // const stuName=useSelector((state)=>state.stuUser.user);
    // const myNav=useNavigate();
    const myuse = useSelector(state => state.stuUser.user)
    const myNav = useNavigate();
    console.log(myuse)


    setTimeout(()=>{
        setIsLoading(false)
    },1300);

    useEffect(() => {
        if (myuse == null) {
            myNav("/")
        }
    }, [])

    return(
        <>
           {isLoading?<Loader/>:<StudentDB/>}
        </>
    );
}
export default DeshBoardLoader;