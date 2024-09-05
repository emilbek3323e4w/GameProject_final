import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {registerUser} from "../../redux/action/userAction";

const RegisterPage = () => {
    const { register, handleSubmit } = useForm();
   const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
    const handleSignIn=(data)=>{
      return dispatch(registerUser(data))
    }
    return (
        <div>
            <form className={'sign-in-form'} onSubmit={handleSubmit((data) => handleSignIn(data))}>
                <input
                    {...register("phone_number")}
                    className={'form-control'}
                    type={'text'}
                    placeholder={'Phone_number'}/>
                <input
                    {...register("username")}
                    className={'form-control'}
                    type={'text'}
                    placeholder={'Username'}/>
                <div>
                    <input
                        {...register("password")}
                        className={'form-control'} type={showPassword?'password':'text'} placeholder={'Password'}/>
<button type={'button'} onClick={()=>setShowPassword(!showPassword)}/>
                </div>
                <button className={'btn-primary'}>Done</button>
            </form>
        </div>
    );
};


export default RegisterPage;