import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { signed } = useUser();

    return signed ? <Outlet {...rest} /> : <Navigate to="/" />;
};

export default PrivateRoute;
