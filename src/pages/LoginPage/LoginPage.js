
import React from 'react';
import './LoginPage.scss';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/action/userAction";

function LoginPage() {


    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const handleSignIn = (data) => {
        dispatch(loginUser(data));
    };

    return (

        <div className={'body-login-page'}>
            <div className="login-container">
                <form className={'login-form'} onSubmit={handleSubmit((data) => handleSignIn(data))}>
                    <div className={'input-group'}>
                        <input
                            {...register("phone_number")}
                            className={'form-control'}
                            type={'text'}
                            placeholder={'Phone_number'}/>
                        <input
                            {...register("password")}
                            className={'form-control'} type={'password'} placeholder={'Password'}/>
                    </div>
                    <button className={'btn-primary'}>Done</button>
                </form>

                {/*<form className="login-form" onSubmit={handleLogin}>*/}
                {/*    <h2>Log in </h2>*/}
                {/*    <div className="input-group">*/}
                {/*        <label>Email</label>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            placeholder="Enter your email"*/}
                {/*            value={email}*/}
                {/*            onChange={(e) => setEmail(e.target.value)}*/}
                {/*            required*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <div className="input-group">*/}
                {/*        <label>Password</label>*/}
                {/*        <input*/}
                {/*            type="password"*/}
                {/*            placeholder="Enter password"*/}
                {/*            value={password}*/}
                {/*            onChange={(e) => setPassword(e.target.value)}*/}
                {/*            required*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*    <button type="submit">Sign in</button>*/}
                {/*    <p>Don't have an account? <a href="/register">Sign up now</a></p>*/}
                {/*</form>*/}
            </div>
        </div>

    );
}

export default LoginPage;
