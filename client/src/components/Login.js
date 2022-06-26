/*************************************************************************************
 * Description : This is a Login Component that comprises of :-
 *              a) Header (NavBar Component)
 *              b) Login Form with all possible validations
 *              c) Footer (NavBar Component)
 * @author : Gauri Yadav
 *************************************************************************************/

import React, { Fragment, useState } from 'react'
import '../style/login.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import NavBar from './NavBar'
import payment from '../images/payment.png'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [loggingIn, setLoggingIn] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMsg, setEmailErrorMsg] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [passwordErrorMsg, setPasswordErrorMsg] = useState('')
    const navigate = useNavigate(); //Creating Navigation Object

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    //This function is used to log user in if valid credentials are input by the user and sets 
    // auth value (loggedIn) in the localstorage
    const logUserIn = () => {
        setLoggingIn(true)
        let payload = {
            email: email,
            password: password
        }
        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
        fetch('/login', options).then(res => res.json()).then(res => {
            if (res.msg === 'ValidUser') {
                localStorage.setItem('loggedIn', true)
                navigate('/userprofile',{ state: { email : email } });
            } else {
                setEmailError(true)
                setPasswordError(true)
                setPasswordErrorMsg('Invalid Email or Password!')
            }
            setLoggingIn(false)
        })
    }

    //This function is used to validate Email Format
    const validateEmail = (mail) => {
        let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        if (mail !== '' && !pattern.test(mail)) {
            return true;
        }
        return false;
    }

    //This function is used to update Email value and set error message in case of error
    const emailUpdate = (e) => {
        resetErrors();
        setEmail(e.target.value)
        let emailError = e.target.value.trim() === '' ? true : false;
        let emailFormatError = validateEmail(e.target.value);
        let errorMsg = ''
        if (emailError) {
            errorMsg = 'Field Required*'
        }
        if (emailFormatError) {
            errorMsg = 'Invalid Email'
        }
        let error = emailFormatError || emailError;
        setEmailError(error);
        setEmailErrorMsg(errorMsg)
    }

    //This function is used to update Password value and set error message in case of error
    const passwordUpdate = (e) => {
        resetErrors();
        let pwd = e.target.value
        setPassword(pwd);
        let passwordError = e.target.value.trim() === '' ? true : false;
        if (passwordError) {
            setPasswordErrorMsg('Field Required*')
        } else {
            setPasswordErrorMsg('')
        }
        setPasswordError(passwordError);
    }
    //This function is called on Press Enter such that user should log into app in case of no error
    const onPressEnter = (e) => {
        if (e.key === 'Enter') {
            if (!(email.trim() === '' || password.trim() === '' || passwordError || emailError)) {
                logUserIn();
            }
        }
    }

    const resetErrors = () => {
        setEmailError(false);
        setEmailErrorMsg('');
        setPasswordError(false);
        setPasswordErrorMsg('');
    }
    return (
        <Fragment>
            <NavBar type="header" />
            <div className="background">
                <div className="box">
                    <Card>
                        <CardContent>
                            <div className="titleGrid">
                                <img width='60' height='59' src={payment} className="logo" alt="sitelogo" />
                                <h2 className="alignCenter loginTitle">PayMe</h2>
                            </div>
                            <div>
                                <div>
                                    <TextField
                                        fullWidth
                                        required
                                        data-testid='email'
                                        error={emailError}
                                        label="Email"
                                        value={email}
                                        helperText={emailErrorMsg}
                                        onChange={(e) => emailUpdate(e)}
                                        onKeyPress={(e) => onPressEnter(e)}
                                        placeholder="Please input your PayMe Email Id"
                                    />
                                </div>
                                <div className="password">
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel>Password*</InputLabel>
                                        <OutlinedInput
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            data-testid='password'
                                            error={passwordError}
                                            onChange={(e) => passwordUpdate(e)}
                                            onKeyPress={(e) => onPressEnter(e)}
                                            placeholder="Please input your password"
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        data-testid='togglePwd'
                                                        onClick={togglePassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            label="Password"
                                        />
                                    </FormControl>
                                    <div className="error">{passwordErrorMsg}</div>
                                </div>
                                <div className="fgtPwd"><a className="signup" href="/forgotpassowrd" >Forgot Password?</a></div>
                            </div>
                        </CardContent>
                        <div className="loginBtn">
                            <LoadingButton
                                style={{ "minHeight": "40px", width: "60%" }}
                                size="small"
                                data-testid='loginbtn'
                                disabled={email.trim() === '' || password.trim() === '' || passwordError || emailError}
                                onClick={() => logUserIn()}
                                endIcon={<SendIcon />}
                                loading={loggingIn}
                                loadingPosition="end"
                                variant="contained"
                            >
                                Login
                        </LoadingButton>
                        </div>
                        <div className="signup">
                            Not have an account? <a href="/signup">Sign Up</a>
                        </div>
                    </Card>
                </div>
            </div>
            <NavBar type="footer" />
        </Fragment>
    )
}