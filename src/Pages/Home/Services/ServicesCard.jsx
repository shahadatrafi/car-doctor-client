import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesCard = ({ service }) => {

    const { _id, price, title, img } = service

    return (
        <div className="card card-compact w-96 shadow-xl border-gray-300 border">
            <figure className='rounded-xl m-5'><img src={img} className='w-full h-[200px] object-cover'  alt="Services" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <div className="card-actions justify-between items-center mt-auto">
                    <p className='text-xl text-orange-500 font-bold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}><button className="btn bg-transparent text-2xl text-orange-500  hover:bg-[#ff2a0000] border-0"><FaArrowRight></FaArrowRight></button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;