import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <progress className="progress w-56 text-center mx-auto"></progress>
    }
    if (user) {
        return children;
    }

    return (
        <Navigate to='/login' replace>
            
        </Navigate>
    );
};

export default PrivateRoute;