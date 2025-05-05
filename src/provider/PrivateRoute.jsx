import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();
    // console.log(location)

    if (loading) {
        return <div className='text-center my-20'> <span className=' loading loading-bars loading-4xl'></span></div>
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>
}

export default PrivateRoute;