import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SingleOrder from './SingleOrder';

const Orders = () => {

    const { user, logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState([])


    useState(() => {
        fetch(`https://tasty-treat-server.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [user?.email])

    const handleDelete = (id) => {
        fetch(`https://tasty-treat-server.vercel.app/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining)
                }
            })
    }

    const handleUpdateStatus = (id) => {
        fetch(`https://tasty-treat-server.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'Updated' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount === 1) {
                    const remaining = orders.filter(order => order._id !== id)
                    const updated = orders.find(order => order._id === id)
                    updated.status = 'Updated'
                    setOrders([updated, ...remaining])
                }
            })
    }



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Item Name</th>
                        <th>Message</th>
                        <th>Customer info</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        orders?.map(order => <SingleOrder key={order._id} order={order} handleDelete={handleDelete} handleUpdateStatus={handleUpdateStatus}></SingleOrder>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default Orders;