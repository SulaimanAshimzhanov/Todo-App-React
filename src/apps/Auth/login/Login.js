import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AuthNavigate from "../../../components/AuthNavigate/AuthNavigate";
import SubmitButton from "../../../components/SubmitButton/SubmitButton";
import { TextInput } from "../../../components/TextInput/TextInput/TextInput";
import { authUser } from "../helpers/api";
import "./Login.scss";

function Login() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm(
        {
            mode: "onBlur"
        }
    );

    const onSubmit = (data) => {
        const request = authUser(data)

        request
            .then(res => {
                if(res) {
                    localStorage.setItem("accessToken", res.access);
                    localStorage.setItem("refreshToken", res.refresh);
                    navigate("/")
                }
            })
    }

    console.log(errors);
    
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
            <div className="login_wrapper">
                <div className="login_wrapper_card">
                    <h2>Autorization</h2>

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
                                caption="Login"
                            />
                        </div>

                        <AuthNavigate location="loginPage"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;