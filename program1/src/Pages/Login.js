import React, { useState } from 'react'
import { Footer } from '../HeaderFooter/Footer';
import Axios from 'axios';
import { Link } from 'react-router-dom';
// import '../../db.json';





function Login() {

    // const [User,setuser]=useState([]);
    const [UserName, setuserName] = useState("");
    const [password, setpassword] = useState("");


    // event.preventDefult();

     const Submit = () => {
        console.log(UserName, password);

        // event.preventDefult();

        Axios.get('../../db.json')
        .then(response => {
            console.log(response.data);
            alert('sucessfull');

        }).catch(err => {
            window.alert('unscessfull')
            
            console.log(err);
        })

    }

    const Register =()=>{

    }

    return (
        <div>
            <form className='login' action='Login.js' method='dialog'>
                <div className='from'>
                    <h1>login</h1>
                    <input type="text" placeholder="UserName" value={UserName} id="UserName" onChange={(e) => setuserName(e.target.value)} /><br />
                    <input type="Password" placeholder="password" value={password} id="password" onChange={(e) => setpassword(e.target.value)} /><br />
                    <button type="submit" onClick={Submit}  >Login</button>
                    <br></br> <br />
                    <Link to="/Register" onClick={Register}>Creater & Resgiter</Link>

                </div>
            </form>
            <Footer />
        </div>
    )
}
export default Login;