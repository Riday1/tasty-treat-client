import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const { loading, user } = useContext(AuthContext)



    if (loading) {
        return <div>loading.....</div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;