import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const { Price, img, title, ingredient } = useLoaderData()



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const quantity = form.quantity.value;
        const name = firstName + ' ' + lastName


        const order = {
            ordered_item: title,
            Price,
            img,
            ingredient,
            Customer_Name: name,
            phone,
            message,
            quantity,
            email

        }
        form.reset()
        console.log(order)

        fetch('https://tasty-treat-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })


    }
    return (
        <div className='p-10'>
            <form onSubmit={handleSubmit} action="">
                <div className='grid grid-cols-2 gap-10 '>
                    <input type="text" name='firstName' placeholder="First Name" className="input p-7 input-bordered w-full " />
                    <input type="text" name='lastName' placeholder="Last Name" className="input p-7 input-bordered w-full " />
                    <input type="text" name='email' placeholder="Email" defaultValue={user?.email} readOnly className="input p-7 input-bordered w-full " />
                    <input type="text" name='phone' placeholder="Phone" className="input p-7 input-bordered w-full " />
                    <input type="text" name='quantity' placeholder='weight: pounds ? ' className="input p-7 input-bordered w-full " required />
                </div>
                <textarea name='message' className="textarea textarea-bordered  w-full h-32 mt-10" placeholder="message on top of the cake, and your preference etc"></textarea>
                <button className='btn btn-primary w-full  mt-6 text-xl'>Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;