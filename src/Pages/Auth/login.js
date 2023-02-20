import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {Form, InputGroup, Button} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { ENDPOINT, KEY } from "config/constants";
import AuthService from "services/auth.service";
import accessHeader from "services/headers/access-header";
import Loader from "Components/Loader";
import { LOGIN_SUCCESS } from "actions/types";
import validator from "validator";
import isEmpty from "validator/es/lib/isEmpty";

const Login = () => {
    const [isVisible, setVisible] = useState(false);
    const [serverError, setServerError] = useState([]);
    const toggle = () => {
        setVisible(!isVisible);
    };

    const dispatch = useDispatch();

    const [userEmail, setUserEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [user_fcm_token, setfcm_token] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [emailError, setEmailError] = useState("Must be valid Email");
    const [passError, setPassError] = useState("Email Address and/or Password is incorrect.");

    const validateEmail = (e) => {
        var email = e.target.value;

        if (validator.isEmail(email)) {
            setUserEmail(email)
            setEmailError(null)

        } else {
            if (email != '') {
                setUserEmail(email)
                setEmailError('Must be valid Email')
            }else{
                setEmailError(null)
            }
        }
    };

    const navigate = useNavigate();
    const goToDashboard = () => {
        navigate('/dashboard');
    };

    const [validated, setValidated] = useState(false);

    const signinToEmailHome = async (e) => {
        setIsLoading(true);
        setEmailError(null)
        setPassError(null)

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            setValidated(true);
            e.preventDefault();
            AuthService.postMethod(ENDPOINT.login, false, {
                email: userEmail,
                password: password,
                fcm_token: user_fcm_token,
            })
                .then((res) => {
                    //console.log(res.status);
                    //console.log(JSON.stringify(res));

                    if(res.status == 200){
                        localStorage.setItem("accessToken", JSON.stringify(res.data.accessToken));
                        localStorage.setItem("refreshToken", JSON.stringify(res.data.refreshToken));
                        //localStorage.setItem("token", JSON.stringify(res.data.user));
                        dispatch({
                            type: LOGIN_SUCCESS,
                            payload: { user: res.data.user },
                        });

                        setTimeout(function () {
                            setIsLoading(false);
                            goToDashboard("/dashboard");
                        }, 1000);
                    }else{
                        setIsLoading(false);
                        setServerError(res.data.errors)
                        const emailMessage = res?.data?.errors[0]?.email;
                        const passwordMessage = res?.data?.errors[0]?.password;
                        if (emailMessage) {
                            if (validator.isEmail(userEmail)) {
                                setEmailError(emailMessage)
                            } else {
                                setEmailError('Must be valid Email')
                            }
                        }
                        if (passwordMessage) {
                            if (isEmpty(password)) {
                                setPassError(passwordMessage)

                            } else {
                                setPassError('Incorrect Password')

                            }
                        }

                        if (isEmpty(userEmail) && isEmpty(password))
                        {
                            setPassError(passwordMessage)
                        }
                    }


                })
                .catch((err) => {
                    setIsLoading(false);
                    //console.log(err);
                    // swal("Error", `${AuthService.errorMessageHandler(err)}`, "error");
                }
            );
        }
    };

    useEffect(function () {
        setEmailError(null)
        setPassError(null)
    },[setIsLoading])
    if (isLoading == true)
        return <Loader isLoading={isLoading} />;

    return(
        <>
            <>
                <Form noValidate validated={validated}>
                    <h1 className={"mb-5"}>Login</h1>
                    <Form.Group className={"form-group mb-3"} controlId="loginEmail">
                        <Form.Label>Email</Form.Label>
                        <InputGroup className={emailError ? 'errorActive' : ''}>
                            <InputGroup.Text id="loginEmail"><i className="fas fa-user"></i></InputGroup.Text>
                            <Form.Control
                                type={"email"}
                                placeholder="Username"
                                required
                                onChange={(e) => {
                                    validateEmail(e);
                                }}
                            />
                            <div className={"inputError"}> {emailError}</div>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className={"form-group mb-3"} controlId="loginpassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup  className={passError ? 'errorActive' : ''}>
                            <InputGroup.Text id="loginpassword"><i className="fas fa-lock"></i></InputGroup.Text>
                            <Form.Control
                                type={isVisible ? "text" : "password"}
                                placeholder="Password"
                                required
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <i className={`showbtn ${isVisible ? 'fal fa-eye' : 'far fa-eye-slash'}`} onClick={toggle}></i>
                            <div className={"inputError"}> {passError} </div>

                        </InputGroup>
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Link to={"/forgetpassword"}>Forgot Password?</Link>
                    </Form.Group>
                    <Form.Group className={"form-group mb-5"}>
                        <Button onClick={signinToEmailHome} type={"submit"} className={"d-block w-100"}>Login</Button>
                    </Form.Group>
                   {/* <Form.Group className={"form-group mb-4"}>
                        Don’t have an account? <Link to={"/signup"} className={"text-green"}>Sign Up</Link>
                    </Form.Group>*/}
                </Form>
            </>
        </>
    )
}

export default Login;