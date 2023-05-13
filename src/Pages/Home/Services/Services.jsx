import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])

    return (
        <div className='mb-32'>
            <div className="hero mb-10">
            <div className="hero-content text-center">
                <div className="max-w-md">
                <h3 className='text-xl text-orange-500 font-bold'>Services</h3>
                    <h1 className="text-5xl font-bold my-5">Our Service Area</h1>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    
                </div>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 border rounded-lg p-6'>
            {
                services.map(service => <ServicesCard
                key={service._id}
                service={service}
                ></ServicesCard>)
            }
        </div>
        <div className='text-center mt-12'>
        <button className="btn btn-lg btn-outline border-orange-500 text-orange-500 hover:bg-[#ff2a0000] hover:border-orange-500 hover:text-orange-500 ">Latest Project</button>
        </div>
        </div>
    );
};

export default Services;