import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Header = () => {
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
                        <li><Link to='/checkout'>Checkout</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="">
                    {/* <img src={logo} className='w-20' alt="" /> */}
                    Tasty Treat
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/orders'>Orders</Link></li>
                    <li><Link to='/checkout'>Checkout</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/'} className="btn">Button</Link>
            </div>
        </div>
    );
};

export default Header;