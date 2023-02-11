import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthNavigate from "../../../components/AuthNavigate/AuthNavigate";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import { TextInput } from "../../../components/TextInput/TextInput/TextInput";
import { createUser } from "../helpers/api";

import "./Register.scss";

function Register() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        setError
    } = useForm(
        {
            mode: "onBlur"
        }
    ); 

    const onSubmit = (data) => {
        console.log(data)
        const request = createUser(data);

        request
            .then(res => {
                if(res) {
                    localStorage.setItem("userID", res.id)
                    navigate("/auth/login")
                }
            })
    }

    
    const formValidate = (state) => {
        return {
            required: `${state} is required`,
            maxLength: {
                value: 15,
                message: "Max length should be 15!"
            },
            minLength: {
                value: 0,
                message: "Min length should be 3"
            }
        }
    }

    return (
        <div className="container">
            <div className="register_wrapper">
                <div className="register_wrapper_card">
                    <h2>Registration</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <TextInput
                                type="text"
                                placeholder="Username"
                                {...register("username", formValidate("Username"))}
                            />

                            <p className="errors">
                                {errors?.username && errors.username.message}
                            </p>
                        </div>
                        <div>
                            <TextInput
                                type="email"
                                placeholder="Email"
                                {...register("email", formValidate("Email"))}
                            />

                            <p className="errors">
                                {errors?.email && errors.email.message}
                            </p>
                        </div>
                        <div>
                            <TextInput
                                type="password"
                                placeholder="Password"
                                {...register("password", formValidate("Password"))}
                            />

                            <p className="errors">
                                {errors?.password && errors.password.message}
                            </p>
                        </div>

                        <p className="success">
                            {isValid && "Successfull"}
                        </p>

                        <div>
                            <SubmitButton 
                                isValid={isValid}
                                caption="Register"
                            />
                        </div>

                        <AuthNavigate location="registerPage"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;