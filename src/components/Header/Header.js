import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/company_logo.png'
import { AuthContext } from '../AuthProvider/AuthProvider';



const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    console.log(user, user?.emailVerified)

    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className="navbar bg-gray-200 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                        <li><Link to='/best-deal'>Best-Deal</Link></li>
                        <li><Link to='/about-us'>About-Us</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="">
                    <img src={logo} className='h-14 rounded-md' alt="" />

                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                    <li><Link to='/about-us'>About-Us</Link></li>
                    <li><Link to='/best-deal'>Best-Deal</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.emailVerified ?
                        <>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div>
                            <button onClick={handleLogOut} className='btn btn-primary btn-sm ml-6'>Logout</button>
                        </>
                        :
                        <>
                            <Link className='btn btn-primary btn-sm' to='/login'>Login</Link>
                            <Link className='ml-8 btn btn-warning btn-sm' to='/register'>Register</Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Header;