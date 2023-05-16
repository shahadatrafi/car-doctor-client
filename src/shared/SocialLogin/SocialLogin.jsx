import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = () => {
    
    const { googleLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log('user form social', res.user);
            })
            .catch(err => console.log('err on social', err.message));
    }
    
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;