import React, { useContext } from 'react';
import google from '../../images/icons/google.png';
import logo from '../../images/logos/logo.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const {displayName, email} = result.user;
            const signInUser = {name: displayName, email};
            setLoggedInUser(signInUser);
            history.replace(from)
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
    }
    return (
        <div>
            <div className="container">
                <figure className="text-center mt-5">
                    <img className="logo" src={logo} alt="" />
                </figure>
                <div className="parentForm">
                    <h3 className="text-center mt-5">Login</h3>
                    <div className="btnStyle d-flex justify-content-center">
                        <button onClick={handleGoogleSignIn}><img src={google} alt="" />Continue With Google</button>
                    </div>
                    <h6 className="text-center">Don't have an account? <a href="#">Create a new account</a></h6>
                </div>
            </div>
        </div>


    );
};

export default Login;