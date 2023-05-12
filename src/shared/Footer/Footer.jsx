import React from 'react';
import logo from '../../assets/logo.svg';
import { FaGoogle, FaTwitter, FaInstagramSquare, FaLinkedin  } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
  <div>
    <img src={logo} alt="" />
    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
    <div className="grid grid-flow-col gap-4 mt-5">
      <a><FaGoogle style={{ width:"24px", height:"24px"}}></FaGoogle></a>
      <a><FaTwitter style={{ width:"24px", height:"24px"}}></FaTwitter></a>
      <a><FaInstagramSquare style={{ width:"24px", height:"24px"}}></FaInstagramSquare></a>
      <a><FaLinkedin style={{ width:"24px", height:"24px"}}></FaLinkedin></a>
    </div>
  </div> 
  <div>
    <span className="footer-title">About</span> 
    <a className="link link-hover">Home</a> 
    <a className="link link-hover">Service</a> 
    <a className="link link-hover">Contact</a> 
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">Why Car Doctor</a>
    <a className="link link-hover">About</a> 
  </div> 
  <div>
    <span className="footer-title">Support</span> 
    <a className="link link-hover">Feedback</a> 
    <a className="link link-hover">Accessibility</a>
    </div>
</footer>
    );
};

export default Footer;