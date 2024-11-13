import React from 'react'
import {Link} from 'react-router-dom';
import { BsLinkedin,BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
   
    <footer className="py-4">
      <div className="container-xl">
        <div className="row">
          <div className="col-4">
            <h4 className="text-white mb-4">Contact Us</h4>
            <div>
              <address className="text-white fs-6">
                ,
                <br />Madurai <br />
                PinCode :625020
              </address>
                <a href="tel:+977 9765970229" 
                className="mt-3 d-block mb-1 text-white">
                +91 9876543210
                </a>
                <a href="mailto:cmp@gmail.com" 
                className="mt-2 d-block mb-0  text-white">
                cmp@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsInstagram className=" fs-4 "/>
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className=" fs-4 "/>
                  </a>
                </div>

            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Information</h4>
            <div className="footer-link d-flex flex-column">
              <Link to="/privacy-policy"  className="text-white py-2 mb-1 ">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1 ">Refund Policy</Link>
              <Link to="/shipping-policy" className="text-white py-2 mb-1 ">ShippingPolicy</Link>
              <Link to="/term-condition" className="text-white py-2 mb-1 ">Terms & Conditions </Link>
              

            </div>
          </div>
          <div className="col-3">
            <h4 className="text-white mb-4">Account</h4>
            <div className="footer-link d-flex flex-column">
              <Link className="text-white py-2 mb-1 ">About Us</Link>
              <Link className="text-white py-2 mb-1 ">Faq</Link>
              <Link to="/contact"className="text-white py-2 mb-1 ">Contact </Link>
              

            </div>
          </div>
         
        </div>
      </div>
    </footer>
    <footer className="py-4">
      <div className="container-xl">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 text-white">
              2023 &copy; Powered By Map
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer