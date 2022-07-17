import React from "react";
import { useContext } from "react/cjs/react.development";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = () => {

    const { setIsAuth } = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', true)
    }

    return (
        <div>
            <h1>Login page!</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="User login" />
                <MyInput type="password" placeholder="User password" />
                <MyButton>Log In</MyButton>
            </form>
        </div>
    )
}

export default Login