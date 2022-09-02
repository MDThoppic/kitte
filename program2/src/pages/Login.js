import React from 'react'
import LoginForm from '../component/LoginForm'
import Header from '../component/Nav'
import Singin from '../component/Singin'
import Routers from '../navigates/Ways'

export default function Login() {
    return (
        <div style={{bgcolor:"red"}}>
            <div>
                {/* <Routers /> */}
                <h1>Pickaar-Admin</h1>
                <LoginForm />
            </div>
        </div>
    )
}
