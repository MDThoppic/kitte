import React from 'react'
import LoginForm from '../component/LoginForm'
import Header from '../component/Nav'
import Routers from '../navigates/Routes'

export default function Login() {
    return (
        <div>
            <div>
                <Header />
                {/* <Routers /> */}
                <h1>Pickaar-Admin</h1>
                <LoginForm />
            </div>
        </div>
    )
}
