import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'

const Banner = () => {
  return (
    <div className="carousel w-full h-[700px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full ">
        <img src={img1} className='w-full object-cover' />
        <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <div className='w-1/2 pl-16'>
            <h2 className='text-6xl leading-normal  font-bold '>Affordable <br /> Price For Car Servicing</h2>
            <p className='text-xl my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn border-0 mr-5 bg-[#f63a15] hover:bg-[#ff2a00]">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#ff2a0000] hover:border-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" style={{ width: "60px", height: "60px" }} className="btn btn-circle mr-5">❮</a>
          <a href="#slide2" style={{ width: "60px", height: "60px" }} className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className='w-full object-cover' />
        <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <div className='w-1/2 pl-16'>
            <h2 className='text-6xl leading-normal  font-bold '>Affordable <br /> Price For Car Servicing</h2>
            <p className='text-xl my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn mr-5 bg-[#f63a15] hover:bg-[#ff2a00]">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#ff2a0000] hover:border-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5" style={{ width: "60px", height: "60px" }}>❮</a>
          <a href="#slide3" className="btn btn-circle" style={{ width: "60px", height: "60px" }}>❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <img src={img3} className='w-full object-cover' />
        <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <div className='w-1/2 pl-16'>
            <h2 className='text-6xl leading-normal  font-bold '>Affordable <br /> Price For Car Servicing</h2>
            <p className='text-xl my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn mr-5 bg-[#f63a15] hover:bg-[#ff2a00]">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#ff2a0000] hover:border-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5" style={{ width: "60px", height: "60px" }}>❮</a>
          <a href="#slide4" className="btn btn-circle" style={{ width: "60px", height: "60px" }}>❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
      <img src={img4} className='w-full object-cover' />
        <div className="absolute flex items-center w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white">
          <div className='w-1/2 pl-16'>
            <h2 className='text-6xl leading-normal  font-bold '>Affordable <br /> Price For Car Servicing</h2>
            <p className='text-xl my-8'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="btn mr-5 bg-[#f63a15] hover:bg-[#ff2a00]">Discover More</button>
            <button className="btn btn-outline border-white text-white hover:bg-[#ff2a0000] hover:border-white">Latest Project</button>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5" style={{ width: "60px", height: "60px" }}>❮</a>
          <a href="#slide1" className="btn btn-circle" style={{ width: "60px", height: "60px" }}>❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;