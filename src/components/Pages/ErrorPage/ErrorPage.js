import React from 'react';
import error_image from '../../../assets/error_3.png';



const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center '>
            <img src={error_image} className='w-full' alt="" />
        </div>
    );
};

export default ErrorPage;