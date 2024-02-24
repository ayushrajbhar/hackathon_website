import React from 'react'
import '../App.css'
import { RiLinkedinBoxFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer' id='contact'>
            <div className="footer-transition"></div>
            <div className="footer-content">
                <a href='#register' className="footer-title">HACKHAVEN</a>
                <div className="footer-contacts">
                    <div className="email-container">
                        <div
                            class="apply-button"
                            data-hackathon-slug="hackhaven-1"
                            data-button-theme="light"
                            style={{height: "44px", width: "312px"}}
                        ></div>
                        <div className="contact-title">Contact Us</div>
                        <div className="email">csi@slrtce.in</div>
                    </div>
                    <div className="social-media">
                        <a href="https://www.linkedin.com/company/slrtce-csi/" className='social-media-logo' target='_blank' rel="noreferrer"><RiLinkedinBoxFill /></a>
                        <a href="https://www.instagram.com/csi_slrtce/" target='_blank' rel="noreferrer" className='social-media-logo'><RiInstagramFill /></a>

                    </div>
                </div>
                <div className="footer-copyright">
                    Copyright <FaRegCopyright /> 2023 rights reserved, CSI SLRTCE.
                </div>
            </div>
        </div>
    )
}

export default Footer
