
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
            </div>
        </div>

    );
}

export default LoginPage;
