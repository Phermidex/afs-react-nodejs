import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../Components/utils';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLogin() == true && restricted == true ?
                <Redirect to="/admin" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;