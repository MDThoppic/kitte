import React from 'react'



export default function Login() {
    const sumbit=()=>{
        var UserName = document.getElementById('UserName').value;
        var password = document.getElementById('password').value;
       if (UserName === "" && password === "") {
          alert("login sucessfully");
          return false;
        }
        else {
        alert("not valid");
      }   
   }
    return (        
        <div className='in'>
            <from className='from' action='App.js' method='dialog'>
                <div className='login'>
                    <div className='title'>login</div>
                    <br/>
                    <input type="text" placeholder="UserName" id="UserName" /><br />

                    <input type="text" placeholder="password" id="password" /><br />

                    <input type="submit" value="login" onClick={sumbit}/><br></br> <br />
                    {/*<span className='LOGIN'>Forget
                       <a hraf='#'>password?</a>
                        <a hraf='#'>/ Create login</a>    </span>*/}

                </div>
            </from>
        </div>
        

    )
}
Login();
