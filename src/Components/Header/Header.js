import React from 'react';
import { Link } from 'react-router-dom';
import useFireBase from '../../hooks/useFireBase';
import "./Header.css"
const Header = () => {
    const {user, logOut} = useFireBase();
    return (
        <div className='header'>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <span>{user.displayName} </span>
            {user?.email && <button onClick={logOut}>Log Out</button>}
        </div>
    );
};

export default Header;