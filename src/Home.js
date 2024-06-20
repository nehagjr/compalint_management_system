// done-----------------------------------
import { Link, Outlet } from "react-router-dom";
import homeimg from'./images/f2.png'

const Home = () => {
    return (
        <>
            <div id="homebg">
                <div id="homeText">
                <p id="Htext">Handling students complaints is easier now.</p> <br/>
                <p>Every student needs an online complaint system that provides multichannel capabilities, advanced reporting functionalities as well as a platform for cross-functional collaboration and immediate customer feedback system.</p><br/>
                <Link to={"/login"} className="link"><button>Get start</button> </Link>
                </div>
                <div><img src={homeimg}/></div>
            </div>
            <Outlet />
        </>
    );       
}
export default Home;