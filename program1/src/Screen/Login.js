import React, { useEffect, useState } from 'react'
import Register from './Register';
// import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'

// import '../api/db.json';






function Login() {

    // const [User,setuser]=useState([]);
    const [UserName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    

    let url = ("http://localhost:8000/holder")

    // event.preventDefult();

    useEffect(() => {
        if (localStorage.getItem('user-info')) {

            alert('successfull');
            navigate('/Home');
            
        }
    },[])

    async function Submit(e) {
        e.preventDefult();

        console.log('item', UserName, password);
        let data = { UserName, password };

        let result = await fetch(url, {
            // name:  UserName,
            // password: password
            method: "POST",
            headers: {
                "content-type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(data),
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        // navigate('/home');
    }



    return (
        <div>
            <form className='form' action='Login.js' method='dialog'>
                <h1 className='text-dark text-uppercase mb-5'>login</h1>
                <div className="input_box ms-5 mb-3">

                    <input type="text" placeholder="" value={UserName} id="UserName" required="required" onChange={(e) => setuserName(e.target.value)} />
                    <span>username</span>
                </div>
                <div className='input_box ms-5 mb-3 '>
                    <input type="Password" placeholder="" value={password} id="password" required="required" onChange={(e) => setpassword(e.target.value)} />
                    <span>password</span>
                </div>
                <div>
                    <button type="submit" onClick={Submit}  >Login</button>
                    <br></br> <br />
                    <Link className="create" to="/login/Register" onClick={<Register />}>Create & Resgiter</Link>

                </div>
            </form>
        </div>
    )


}
export default Login;