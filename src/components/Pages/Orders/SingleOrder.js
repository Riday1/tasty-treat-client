import React from 'react';
import { FaRegTrashCan } from "react-icons/fa6";

const SingleOrder = ({ order, handleDelete, handleUpdateStatus }) => {
    const { Customer_Name, Price, email, img, ingradient, message, ordered_item, phone, quantity, _id, status } = order;

    const totalPrice = parseInt(quantity * Price);
    const messages = message.split(',');




    return (
        <tr>
            <th>

            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-md w-16 h-16">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{ordered_item}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                {messages[0]}
                <br />
                {messages[1]}
            </td>
            <td>
                <p className='font-bold'>{Customer_Name}</p>
                <p>{phone}</p>
                <p className='text-gray-400'>{email}</p>
            </td>
            <td><p className=" text-green-500">TK-{totalPrice}</p></td>
            <td>{quantity}</td>
            <td><button onClick={() => handleUpdateStatus(_id)} className={`btn  btn-outline ${status ? ' btn-success' : ' btn-warning'} btn-xs`}>{status ? status : 'pending'}</button></td>
            <td><button onClick={() => handleDelete(_id)} className='btn btn-circle '><FaRegTrashCan className='text-xl text-red-600' /></button></td>
        </tr>
    );
};

export default SingleOrder;