import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import OrderItems from './OrderItems';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Orders = () => {

    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/checkout?email=${user?.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // setOrders(data);
                if (!data.error) {
                    setOrders(data);    
                }
                else {
                    navigate('/');
                }
            })
    }, []);

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/checkout/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            );

                            const remaining = orders.filter(o => o._id !== id);
                            setOrders(remaining);
                        };
                    })

            };
        });

    };

    const handleConfirm = id => {
        fetch(`http://localhost:5000/checkout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(order => order._id !== id);
                    const updatedOrder = orders.find(order => order._id === id);
                    updatedOrder.status = 'confirm';
                    const newOrders = [updatedOrder, ...remaining];
                    setOrders(newOrders);
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <button className="btn btn-sm btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </label>
                            </th>

                            <th>Service Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderItems
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></OrderItems>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;  