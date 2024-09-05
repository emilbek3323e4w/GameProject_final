// import React, {useState} from 'react';
// import {useForm} from "react-hook-form";
// import {useDispatch} from "react-redux";
// import {registerUser} from "../../redux/action/userAction";
//
// const RegisterPage = () => {
//     const { register, handleSubmit } = useForm();
//    const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();
//     const handleSignIn=(data)=>{
//       return dispatch(registerUser(data))
//     }
//     return (
//         <div>
//             <form className={'sign-in-form'} onSubmit={handleSubmit((data) => handleSignIn(data))}>
//                 <input
//                     {...register("phone_number")}
//                     className={'form-control'}
//                     type={'text'}
//                     placeholder={'Phone_number'}/>
//                 <input
//                     {...register("username")}
//                     className={'form-control'}
//                     type={'text'}
//                     placeholder={'Username'}/>
//                 <div>
//                     <input
//                         {...register("password")}
//                         className={'form-control'} type={showPassword?'password':'text'} placeholder={'Password'}/>
// <button type={'button'} onClick={()=>setShowPassword(!showPassword)}/>
//                 </div>
//                 <button className={'btn-primary'}>Done</button>
//             </form>
//         </div>
//     );
// };
//
//
// export default RegisterPage;



import React, { useState } from 'react';
import './RegisterPage.css';


const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
            username: '',
            email: '',
            password: ''
        });
    };

    return (
        <div className="container-all">
            <div className="form-container">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;