import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../../hooks/useFireBase';

const Login = () => {
    const {signInUsingGoogle, signinUsingGithub} = useFireBase();
    return (
        <div>
            <h2>please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign In</button>
            <br/>
            <button onClick={signinUsingGithub}>Github Sign in</button>
            <br/>
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;