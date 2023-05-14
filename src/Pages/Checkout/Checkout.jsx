import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const Checkout = () => {

    const service = useLoaderData();
    const { service_id, title, price, img } = service;

    const user = createContext(AuthContext);

    const handleOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const service = form.service.value;
        const date = form.date.value;
        const duePrice = price;
        const orderItem = {
            customerName: name,
            serviceName: service,
            serviceId: service_id,
            date: date,
            duePrice: duePrice,
        }

        fetch('http://localhost:5000/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orderItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Your order successfully placed!',
                        'success'
                    );
                }
            });
    };


    return (
        <div className='card-body'>
            <form onSubmit={handleOrder}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder='Name' name='name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service Name</span>
                        </label>
                        <input type="text" placeholder="Service Name" defaultValue={title} name="service" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={'$ ' + price} readOnly className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button ></button>
                    <input className="btn bg-orange-600 border-0 hover:bg-orange-600" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;