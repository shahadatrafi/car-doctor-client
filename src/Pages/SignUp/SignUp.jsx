import React, { useContext } from 'react';

import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {

    const {userSignUp} = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        userSignUp(email, password)
        .then(res => {
            const user = res.user;;
            console.log(user);
            updateProfile(user, {
                displayName: name
            })
            .then(res => {
                console.log('profile Updated');
            })
            .catch(err=> {
                console.log(err.message);
            })
        })
        .catch(err => {
            console.error(err.message);
        })

    }

    return (
        <div className="mb-32 mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} className='w-3/4 p-10 ms-auto me-16' alt="" />
                </div>
                <form onSubmit={handleSignUp} className="card flex-shrink-0 border-base-200 border-2 w-full max-w-lg shadow-xl bg-base-100">
                    <h1 className="text-5xl font-bold px-8 pt-6 text-center my-7">Sign Up Now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="text" placeholder="password" name='password' className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn border-0 bg-[#f8401c] hover:bg-[#ee2800]" value="Login" />
                        </div>
                        <p className='mt-12 text-center'>Already Have an Account? <Link to='/login' className='text-orange-500 font-bold'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;