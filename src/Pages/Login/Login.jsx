import React, { useContext } from 'react';

import img from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { userLogin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        userLogin(email, password)
        .then(res => {
            const user = res.user;
            
            const loggedUser = {
                email: user.email
            };
            fetch(' http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    localStorage.setItem('car-access-token', data.token)
                    navigate(from, { replace: true });
                })
        })
        .catch(err => {
            console.error('err is', err.message);
        })

    }

    return (
        <div className="mb-32 mt-12">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} className='w-3/4 p-10 ms-auto me-16' alt="" />
                </div>
                <form onSubmit={handleLogin} className="card flex-shrink-0 border-base-200 border-2 w-full max-w-lg shadow-xl bg-base-100">
                    <h1 className="text-5xl font-bold px-8 pt-6 text-center my-7">Login Now!</h1>
                    <div className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn border-0 bg-[#f8401c] hover:bg-[#ee2800]" value="Login" />
                        </div>
                        <p className='mt-12 text-center'>New To Car Doctor? <Link to='/sign-up' className='text-orange-500 font-bold'>Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;