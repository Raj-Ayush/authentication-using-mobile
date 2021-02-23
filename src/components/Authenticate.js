import React from 'react'
import { useEffect, useState } from 'react';
import firebase from './firebase';
import { useHistory } from 'react-router-dom';



/**
* @author
* @function Authenticate
**/

const Authenticate = (props) => {
    const [phoneNum, setPhoneNum] = useState("")
    const [check, setCheck] = useState("")
    const [msg, setMsg] = useState("")
    let history = useHistory();
    const messageHandler = (msg)=> {
        setCheck(msg);
        if(msg){
            setMsg("Verification sucess !");
        }else{
            setMsg("Verification failed !");
        }
    }
    const logIn = (val)=>{
        setPhoneNum(val);
        history.push("/signup");
    }
    const setUpRecaptcha= ()=>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        'recaptcha-container', 
        {
            'size': 'invisible',
            'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            console.log('captcha resolved');
            onSignInSubmit();
            }
        }
        );
    }

    useEffect(()=>{
        setUpRecaptcha()
    }, [])

    const editPhone = (evt)=>{
        setPhoneNum(evt.target.value);
    }

    const onSignInSubmit = (event)=>{
        event.preventDefault();
        const phoneNumber = `+91${phoneNum}`;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;

        firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            // ...
            const code = window.prompt("Enter OTP")
            if(code === null) return;
            confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
               messageHandler(true)
                logIn(result.user.phoneNumber);
            })
            .catch((error) => {
            // User couldn't sign in (bad verification code?)
                messageHandler(false)
            });

        })
        .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
        });
    }
    
        
  return(
    <div className="authenticate">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h2>Phone Login</h2>
                    <form onSubmit={onSignInSubmit}>
                        <div id="recaptcha-container"></div>
                        <div className="form-group">
                            <label>Phone Number</label><br/>
                            <input
                            type = "number"
                            className="form-control"
                            id="phoneNumber"
                            placeholder="Enter mobile number"
                            onChange={editPhone}
                            value={phoneNum}
                            />
                            {check ? 
                            <p className="s">{msg}</p>:
                            <p className="f">{msg}</p>}
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div> 
    </div>
   )

 }

export default Authenticate