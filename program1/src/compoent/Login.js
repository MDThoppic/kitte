import React from 'react'

export default function Login() {
    var attempt = 3;
    const sumbit = () => {
        var UserName = document.getElementById('UserName').value;
        var password = document.getElementById('password').value;
        if (UserName === "" && password === "") {
            alert("login sucessfully");
            //reload(false);
           // location.sumbit();
        }
        else {
            attempt--;
            alert("you have left " + attempt + " attempt;");

            if (attempt == 0) {
                var UserName = document.getElementById('UserName').disabled = true;
                var UserName = document.getElementById('password').disabled = true;
                
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
