import React, { useState } from 'react'
import { Footer } from '../HeaderFooter/Footer';

// import Dashboard from "./Dashboard";
//import Axios from 'axios';


function Login  ()  {



    // const [User,setuser]=useState([]);
    const [UserName, setuserName] = useState("");
    const [password, setpassword] = useState("");



    const submit = (event) => {

        // event.preventDefult();

        // Axios.post('http://localhost:3000/user',{
        //     UserName,password
        // }).then(()=>{
        //     setuserName("");setpassword("");
        // }).catch((err)=>{
        //     console.log(err);
        // })

        //local validation
        let UserName = document.getElementById("UserName").value;
        let password = document.getElementById("password").value;

        if (UserName === "Mohamud" && password === "1234567") {
            window.alert("login successfull")
            console.log(UserName, password);


        }
        else {
            window.alert("invalid enters")

            event.preventDefult();

        }
    }


    return (
        <div>
        <form className='login' action='Login.js' method='dialog'>
            <div className='from'>
                <h1>login</h1>
                <input type="text" placeholder="UserName" value={UserName} id="UserName" required onChange={(e) => setuserName(e.target.value)} /><br />
                <input type="Password" placeholder="password" value={password} id="password" required onChange={(e) => setpassword(e.target.value)} /><br />
                <button type="submit" onClick={submit}  >Login</button>
                <br></br> <br />
                {/* <span className='LOGIN'>Forget
                    <a hraf='#'>password?</a>
                    <a hraf='#'>  Create login</a>
                </span> */}
            </div>
        </form>
        <Footer />
     </div>
    )
}
export default Login;