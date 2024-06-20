// done========================
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Complain = () => {
    const [input, setInput] = useState({})
    const mySelector = useSelector(state => state.stuUser.stuid);

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(values => ({ ...values, [name]: value }))
        //console.log(input)
    }

    const handlesubmit = () => {
        let url = "http://localhost:4000/stucomplain";
        axios.post(url, { "stuid": mySelector, "complain": input.area, "ans": "" }).then((res) => {
            //console.log(res.data)
            alert("Your complain successfully sent")
        })
    }

    return (
        <>

            <div id="stuComplain">
            <div id="c2">

</div>
                <div id="c1">
                    <h1 id="comptext">Write your complaint here...!!! </h1>
                    <div id="textbox">
                        <h3 style={{color:"#de2c50"}}> Your complaint :- </h3><br /> <textarea type="" placeholder="Write your complain here" name="area" value={input.area} onChange={handleInput} style={{ height: "150px", width: "500px" }} /> <br />
                        <div id="cBtn"><button onClick={handlesubmit}>Submit Complain</button></div>
                    </div>
                </div>
               

            </div>

        </>
    );
}
export default Complain;