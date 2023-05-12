import React from 'react';

import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-[550px] mb-32">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                <img src={person} className="max-w-lg rounded-lg shadow-2xl" />
                <img src={parts} className="max-w-sm absolute right-5 top-40 border-8 border-white  rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h3 className='text-xl text-orange-500 font-bold'>About Us</h3>
                    <h1 className="text-5xl leading-snug font-bold mt-5">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn border-0 bg-[#f63a15] hover:bg-[#ff2a00]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;