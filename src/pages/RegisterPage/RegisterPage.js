import React from 'react';
import './RegisterPage.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/action/userAction';

function RegistrationPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.users);

    const handleRegister = (data) => {
        dispatch(registerUser(data));
    };

    return (
        <div className="body-registration-page">
            <div className="registration-container">
                <form className="registration-form" onSubmit={handleSubmit(handleRegister)}>
                    <div className="input-group">
                        <input
                            {...register("username", { required: "Username is required" })}
                            className="form-control"
                            type="text"
                            placeholder="Username"
                        />
                        {errors.username && <p className="error">{errors.username.message}</p>}

                        <input
                            {...register("phone_number", { required: "phone_number is required" })}
                            className="form-control"
                            type="number"
                            placeholder="Phone number"
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}

                        <input
                            {...register("password", { required: "Password is required" })}
                            className="form-control"
                            type="password"
                            placeholder="Password"
                        />
                        {errors.password && <p className="error">{errors.password.message}</p>}
                    </div>
                    <button className="btn-primary" type="submit" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default RegistrationPage;
