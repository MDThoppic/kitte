import React from 'react'

let UserName=document.getElementById('UserName')

UserName.append(Login());

let password=document.getElementById('password')

password.append(Login());
//fetch function
fetch("http://localhost:3000/user")
.then(res=>res.json())
.then(json=>console(json))

export default function Login() {
    var attempt = 3;
    const sumbit = () => {
        let UserName = document.getElementById('UserName').value;
        let password = document.getElementById('password').value;
        
        if (UserName ===$(UserName) && password ===$(password) ) {
            alert("login sucessfully");
            return false;
            //reload(false);
           // location.sumbit();
        }
        else {
            attempt--;
            alert("you have left " + attempt + " attempt;");

            if (attempt === 0) {
                 UserName = document.getElementById('UserName').disabled = true;
                 password = document.getElementById('password').disabled = true;
                return true;
            }
        }
    }
    return (

        <div className='from'>
            <h1>login</h1>
            <from className='login' action='App.js' method='dialog'>
                <input type="text" placeholder="UserName" id="UserName" /><br />
                <input type="Password" placeholder="password" id="password" required="" /><br />
                <button type="submit" value="login" onClick={sumbit} >Login</button>
                <br></br> <br />
                <span className='LOGIN'>Forget
                    <a hraf='#'>password?</a>
                    <a hraf='#'>/ Create login</a>
                </span>
            </from>
        </div>
    )
}
Login();
