import React, { useState } from 'react';
import { Button, Container, } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLocation, useHistory } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import Header from '../Shared/Header/Header';
import './LoginSignUp.css'

const LoginSignUp = () => {
    const [isLogin, setIsLogin] = useState(true);
    const toggleLoginSignUp = () => {
        setIsLogin(!isLogin);
    }

    const { loginWithGoogle } = useFirebase()
    const location = useLocation();
    const redirect_uri = location.state?.from || '/destinationsHome'
    const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                history.push(redirect_uri);
            }).catch((error) => {

            });
    }
    return (
        <div>
            <Header>{"bg-dark"}</Header>
            <Container className="text-center my-5">
                <form onSubmit={handleSubmit(onSubmit)} className="form d-flex justify-content-center">
                    <div className="border shadow p-5">
                        {
                            isLogin ? <h5 className="text-start fw-bold">Login</h5> : <h5 className="text-start fw-bold">Create an account</h5>
                        }

                        <br />
                        {
                            !isLogin && <> <input className=" input form-control p-0 border-0 rounded-0 border-bottom" placeholder="First Name" {...register("firstName", { required: true })} />
                                {errors.firstName && <small className="text-danger">This field is required!</small>}
                                <br />
                                <input className=" input form-control p-0 border-0 rounded-0 border-bottom" placeholder="Last Name" {...register("lastName")} />

                                <br /> </>
                        }
                        <input className=" input form-control p-0 border-0 rounded-0 border-bottom" placeholder="Email or Username" {...register("emailOrUsername", { required: true })} />
                        {errors.emailOrUsername && <small className="text-danger">This field is required!</small>}
                        <br />


                        <input type="password" className=" input form-control p-0 border-0 rounded-0 border-bottom" placeholder="Password" {...register("password", { required: true })} />

                        {errors.password && <small className="text-danger">This field is required!</small>}
                        <br />
                        {
                            !isLogin && <> <input type="password" className=" input form-control p-0 border-0 rounded-0 border-bottom" placeholder="Confirm Password" {...register("confirmPassword", { required: true })} />

                                {errors.confirmPassword && <small className="text-danger">This field is required!</small>}
                                <br /></>
                        }
                        {isLogin && <> <input className="check"
                            {...register("rememberPassword")}
                            defaultValue={false}

                            type="checkbox"
                        /><small className="pe-5"> Remember Me</small>

                            <small className="text-warning ms-5 ps-5 check">Forgot Password?</small><br /><br /></>}



                        <input className="input border-0 py-2 bg-warning" type="submit" value={isLogin ? "Login" : "Create an account"} />
                        <br />
                        {
                            isLogin ? <small>Don't have an account? <span onClick={toggleLoginSignUp} className="text-warning check">Create an account</span></small> : <small>Already have an account? <span onClick={toggleLoginSignUp} className="text-warning check">Login</span></small>
                        }

                    </div>
                </form>
                <br />
                <small className="or">Or</small>
                <br />
                <br />
                <Button className="other-sign-in-btn rounded-pill border" variant="white">
                    <div className="d-flex justify-content-between">


                        <img className="rounded-circle" height="26px" src="https://icon-library.com/images/facebook-login-icon-download/facebook-login-icon-download-14.jpg" alt="" />
                        <span className="">Sign in with Facebook</span>
                        <span></span>
                    </div>
                </Button>
                <br />

                <Button onClick={handleGoogleLogin} className="mt-2 other-sign-in-btn rounded-pill border" variant="white">
                    <div className="d-flex justify-content-between">


                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                        <span className="">Sign in with Google</span>
                        <span></span>
                    </div>
                </Button>
            </Container>
        </div>
    );
};

export default LoginSignUp;