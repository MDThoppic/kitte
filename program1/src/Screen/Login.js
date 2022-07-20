import React, { useState } from 'react'
import Register from './Register';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import '../../db.json';





function Login() {

    // const [User,setuser]=useState([]);
    const [UserName, setuserName] = useState("");
    const [password, setpassword] = useState("");


    // event.preventDefult();

    const Submit = async(e) => {
        // e.preventDefult()

        console.log(UserName, password);

        

        Axios.get('../../db.json')
            .then(response => {
                console.log(response.data);
                alert('sucessfull');

            }).catch(err => {
                window.alert('unscessfull')

                console.log(err);
            })

    }
    return (
        <div>
            <form className='login' action='Login.js' method='dialog'>
                <div className='from'>
                    <h1>login</h1>
                    <input type="text" placeholder="UserName" value={UserName} id="UserName" required="enter username" onChange={(e) => setuserName(e.target.value)} /><br />
                    <input type="Password" placeholder="password" value={password} id="password"required="enter password" onChange={(e) => setpassword(e.target.value)} /><br />
                    <button type="submit" onClick={Submit}  >Login</button>
                    <br></br> <br />
                    <Link className="create" to="/login/Register" onClick={<Register />}>Create & Resgiter</Link>

                </div>
            </form>
        </div>
    )


}
export default Login;