import React, { useContext } from 'react';
import login_logo from '../../assets/logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import googleIcon from '../../assets/social-icon/google.png'
import githubIcon from '../../assets/social-icon/github.png'
import twitterIcon from '../../assets/social-icon/twitter.png'
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/'
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const currentUser = { email: user.email }
                form.reset()
                fetch(`http://localhost:5000/jwt`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data.token)
                        localStorage.setItem('access-token', data.token)
                    })
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))




    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={login_logo} className='' alt="" />
                </div>
                <div className="card bg-base-100 w-1/2 lg:ml-32  shadow-2xl">

                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className='text-4xl font-bold text-center'>Login </h1>
                        <div className="form-control mt-4 ">
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='social-icon flex justify-evenly items-center mt-4'>
                            <img src={googleIcon} className=' w-8 h-8' alt="" />
                            <img src={githubIcon} className=' w-8 h-8' alt="" />
                            <img src={twitterIcon} className=' w-8 h-8' alt="" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;