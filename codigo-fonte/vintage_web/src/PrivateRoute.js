import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

const PrivateRoute = ({ element }) => {
    const { signed } = useUser();

    return signed ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
