import React,{useState,useEffect} from 'react'
import Axios from 'axios';

function Login() {
    //const [User,setuser]=useState([]);
    const [UserName,setuserName]=useState('');
    const [password,setpassword]=useState('');

    fetch("http://localhost:3000/user")
    .then(res => res.json())
    .then(json => console(json))

    useEffect(()=>{
        loadData();
    },[]);

    const loadData = async()=>{
        const response =await Axios.get('http://localhost:3000/user');
        console.log(response.data);
    }
    const sumbit = (e) => {

        e.preventDefult();
        Axios.post('http://localhost:3000/user',{
            UserName,password
        }).then(()=>{
            setuserName("");
            setpassword("");
        }).catch((err)=>{
            console.log(err);
        })

    }


    return (

        <div className='from-control'>
            <h1>login</h1>
            <from className='login-control'>
                <input type="text" placeholder="UserName"       /><br />
                <input type="Password" placeholder="password"   /><br />
                <button type="submit" value="login" onClick={sumbit()} >Login</button>
                <br></br> <br />
                {/* <span className='LOGIN'>Forget
                    <a hraf='#'>password?</a>
                    <a hraf='#'>  Create login</a>
                </span> */}
            </from>
        </div>

    )
}
export default Login();