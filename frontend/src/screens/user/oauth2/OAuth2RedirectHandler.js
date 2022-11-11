import React, { Component } from 'react';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../constants';
import { Navigate } from 'react-router-dom'

class OAuth2RedirectHandler extends Component {

    render() {        
        const token = new URL(window.location.href).searchParams.get("token");
        const error = new URL(window.location.href).searchParams.get("error");


        if(token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            localStorage.setItem(REFRESH_TOKEN, null);
            return <Navigate to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>; 
        } else {
            return <Navigate to={{
                pathname: "/login",
                state: { 
                    from: this.props.location,
                    error: error 
                }
            }}/>; 
        }
    }
}

export default OAuth2RedirectHandler;