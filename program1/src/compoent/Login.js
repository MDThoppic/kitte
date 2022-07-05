import React, { useState } from 'react'
import Axios from 'axios';

function Login() {
    // const [User,setuser]=useState([]);
    let [UserName, setuserName] = useState("");
    let [password, setpassword] = useState("");



   const submit = (e) => {

        
        // Axios.post('http://localhost:3000/user',{
        //     UserName,password
        // }).then(()=>{
        //     setuserName("");setpassword("");
        // }).catch((err)=>{
        //     console.log(err);
        // })

        UserName = document.getElementById("UserName").value;
        password = document.getElementById("password").value;
        
        if (UserName==="setuseName" && password==="setpassword") {
            window.alert("login successfull")
            console.log(UserName, password);
            
        }
        else {
            window.alert("invalid enters")

            
        }
    }


    return (

        <form className='login' action='Login.js' method='dialog'>
            <div className='from'>
                <h1>login</h1>
                <input type="text" placeholder="UserName" value={UserName} id="userName" required="" onChange={(e) => setuserName(e.target.value)} /><br />
                <input type="Password" placeholder="password" value={password} id="password" required="" onChange={(e) => setpassword(e.target.value)} /><br />
                <button type="submit" onClick={submit}  >Login</button>
                <br></br> <br />
                {/* <span className='LOGIN'>Forget
                    <a hraf='#'>password?</a>
                    <a hraf='#'>  Create login</a>
                </span> */}
            </div>
        </form>


    )
}
export default Login;