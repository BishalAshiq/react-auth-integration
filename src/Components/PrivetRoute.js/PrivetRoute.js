import React from 'react';
import { Route } from 'react-router';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';

const PrivetRoute = ({ children, ...rest }) => {
    // const {children, ...rest} = props  //uporer props er jaigai ei line ta bosaia likha jai
    const {user} = useAuth();
    return (
        <Route
        {...rest}
        render = {({location}) => user.email ? 
        children :
         <Redirect 
         to={{pathname: "/login",
         state: {from: location}
        }}
        ></Redirect>}
    >
            
    </Route>
    );
};

export default PrivetRoute;