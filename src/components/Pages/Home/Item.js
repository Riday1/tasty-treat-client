import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    const { title, img, Price, ingredient, _id } = item
    return (
        <div className="hover:scale-105 duration-200  card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={img}
                    className='w-full h-60'
                    alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quia!</p>
                <div className="flex justify-between mt-6">
                    <h1 ><span className='text-xl font-bold text-red-500'>Price : ${Price}</span> <span className='text-gray-400 text-md'>/pound</span></h1>
                    <Link to={`/cakes/${_id}`}><button className='btn bg-red-500 text-white'>Checkout</button></Link>
                </div>
            </div>


        </div>
    );
};

export default Item;