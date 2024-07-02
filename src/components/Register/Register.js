import React, { useContext, useState } from 'react';
import login_logo from '../../assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import googleIcon from '../../assets/social-icon/google.png'
import githubIcon from '../../assets/social-icon/github.png'
import twitterIcon from '../../assets/social-icon/twitter.png'
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2'

const Register = () => {
    const { createUser, updateUser, verifyEmail } = useContext(AuthContext);
    const [disable, setDisable] = useState(true)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoUrl.value;



        createUser(email, password)
            .then(result => {
                const user = result.user;

                updateUser(name, photoURL)

                console.log(user)
                verifyEmail()
                    .then(() => {
                        Swal.fire({
                            title: 'Verify Email',
                            icon: 'info',
                        })
                    })
                navigate('/login')
                form.reset()
            })
            .catch(error => {
                let errorMessage = error.message;
                errorMessage = errorMessage.split('/')[1]
                errorMessage = errorMessage.split(')')[0]
                if (errorMessage) {
                    Swal.fire({
                        title: `${errorMessage}`,
                        icon: 'error',
                    })
                }

            })
    }

    const handleCheckBox = event => {
        setDisable(!event.target.checked)

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={login_logo} className='' alt="" />
                </div>
                <div className="card bg-base-100 w-1/2 lg:ml-32  shadow-2xl">

                    <form onSubmit={handleSubmit} className="card-body">
                        <h1 className='text-3xl font-bold text-center'>Sign Up </h1>
                        <div className="form-control mt-4">
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <input type="text" name='photoUrl' placeholder="Photo-URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-4">
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <div className='flex items-center mt-4'>
                                <input type="checkbox" onChange={handleCheckBox} className="" /><Link className='ml-4'><small>accepts all terms and conditions</small></Link>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning" disabled={disable}>Register</button>
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

export default Register;