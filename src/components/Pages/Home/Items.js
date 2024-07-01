import React, { useEffect, useState } from 'react';
import Item from './Item';

const Items = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/cakes')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <section className='my-20'>

            <div className='space-y-10 text-center mb-10'>
                <h3 className='text-xl text-red-500 font-bold'>Popular Items</h3>
                <h1 className='text-5xl font-bold'> Our Popular Cakes Items</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minus <br /> vel neque dolores laudantium magnam quae numquam temporibus, exercitationem repellendus!</p>
            </div>

            {/* cakes card  */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20'>
                {
                    items.map(item => <Item key={item._id} item={item}></Item>)
                }

            </div>
        </section>
    );
};

export default Items;