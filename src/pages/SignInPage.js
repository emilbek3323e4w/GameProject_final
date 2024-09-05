import React from 'react';
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import {registerUser} from "../redux/action/userAction";

const SignInPage = () => {
    const { register, handleSubmit } = useForm();
    const dispatch=useDispatch
const handleSignIn=(data)=>{
    dispatch(registerUser(data))
}



    return (
        <div>
<form className={'sign-in-form'} onSubmit={handleSubmit((data)=>handleSignIn(data))}>
    <input
        {...register("phone_number")}
        className={'form-control'}
        type={'text'}
        placeholder={'Phone_number'}  />
    <input
        {...register("password")}
        className={'form-control'} type={'password'} placeholder={'Password'}  />
    <button className={'btn-primary'}>Done</button>
</form>
        </div>
    );
};

export default SignInPage;