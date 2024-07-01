import React from 'react';

const TeamMate = ({ teamMate }) => {
    const { name, img, id } = teamMate
    return (
        <div className=" hover:scale-105 duration-200 bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={img}
                    className='w-full h-60'
                    alt="Shoes" />
            </figure>
            <div className="card-body text-center">
                <h2 className=" text-xl font-bold">{name}</h2>
                <p>follow me on social media</p>
                <div className="social icons">

                </div>
            </div>
        </div>
    );
};

export default TeamMate;