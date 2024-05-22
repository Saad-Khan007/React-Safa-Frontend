import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <>
            <div className="news-letter-wrapper">
                <div className="news-letter-container">
                    <div className="news-letter-text">Our Latest Newsletter</div>
                    <div className="news-letter-subscribe-bar">
                        <div className="search-container">
                            <input type="text" placeholder="Your email address" />
                            <div className="search-icon">Subscribe</div>
                        </div>
                    </div>
                    <div className="news-letter-social-media">
                        <span>Follow us :</span>
                        <i className="pi pi-facebook"></i>
                        <i className="pi pi-twitter"></i>
                        <i className="pi pi-youtube"></i>
                    </div>
                </div>
            </div>
            <div className="footer-wrapper">
                <div className="footer-container">
                    <div className="box-1">
                        <div className="box1">
                            <div className="footer-box">
                                <h2>ABOUT US</h2>
                                <ul >
                                    <li >We're the auto parts website that makes it easy to find the parts you need, with the convenience and reliability you deserve.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box2">
                            <div className="footer-box">
                                <h2 >MY ACCOUNT</h2>
                                <ul ><li>About Us</li>
                                    <li>Delivery Information</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms &amp; Conditions</li>
                                    <li>Newsletter</li>
                                </ul>
                            </div>
                            <div className="footer-box">
                                <h2>INFORMATION</h2>
                                <ul>
                                    <li>My Account</li>
                                    <li>Order History</li>
                                    <li>Wish List</li>
                                    <li>Specials</li>
                                    <li>Brands</li>
                                </ul>
                            </div>
                            <div className="footer-box">
                                <h2>CUSTOMER SERVICE</h2>
                                <ul>
                                    <li>Contact Us</li>
                                    <li>Site Map</li>
                                    <li>Gift Certificates</li>
                                    <li>Affiliate</li>
                                    <li>Returns</li>
                                </ul>
                            </div>
                            <div className="footer-box">
                                <h2>CONTACT US</h2>
                                <ul>
                                    <li>Address: Lahore</li>
                                    <li>in Pakistan</li>
                                    <li>Call: 123-456-789</li>
                                    <li>Email: safa@example.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="box-2">
                        <div className="box">
                            <ul >
                                <li>Engine</li>
                                <li>Transmission</li>
                                <li>Driveshaft</li>
                                <li>Axles</li>
                                <li>Wheels</li>
                                <li>Tires</li>
                                <li>Brakes</li>
                                <li>Suspension</li>
                                <li>Steering</li>
                                <li>Body</li>
                                <li>Interior</li>
                                <li>Windows</li>
                                <li>Mirrors</li>
                                <li>Lights</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">Powered By <a href='/'>SBA-Dev</a> © 2024</div>
        </>
    )
}
