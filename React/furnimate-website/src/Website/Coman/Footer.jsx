import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="furnimate-footer">
                <div className="container footer-container">
                    <div className="row">
                        {/* BRAND COLUMN */}
                        <div className="col-lg-5 col-md-6 footer-column">
                            <div className="footer-brand">
                                <div className="footer-brand-icon"><i className="fa-solid fa-couch" /></div>
                                <div className="footer-brand-name">FURNIMATE</div>
                            </div>
                            <p className="footer-description">
                                FURNIMATE is a premier modern e-commerce furniture destination offering sustainable, handcrafted
                                solid wood tables, minimalist seating, and contemporary interior home decor.
                            </p>
                            <div className="footer-social">
                                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                                <a href="#" aria-label="Pinterest"><i className="fa-brands fa-pinterest-p" /></a>
                                <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter" /></a>
                            </div>
                        </div>
                        {/* QUICK LINKS */}
                        <div className="col-lg-2 col-md-6 footer-column">
                            <h3 className="footer-heading">Quick Links</h3>
                            <ul className="footer-links">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Shop Catalog</a></li>
                                <li><a href="#">Featured Deals</a></li>
                                <li><a href="#">Our Lookbook</a></li>
                                <li><a href="#">Reviews &amp; News</a></li>
                            </ul>
                        </div>
                        {/* CUSTOMER CARE */}
                        <div className="col-lg-2 col-md-6 footer-column">
                            <h3 className="footer-heading">Customer Care</h3>
                            <ul className="footer-links">
                                <li><a href="#">Help Center &amp; FAQ</a></li>
                                <li><a href="#">Shipping &amp; Delivery</a></li>
                                <li><a href="#">Returns &amp; Exchanges</a></li>
                                <li><a href="#">Track Order</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        {/* CONTACT */}
                        <div className="col-lg-3 col-md-6 footer-column">
                            <h3 className="footer-heading">Contact Us</h3>
                            <ul className="footer-contact">
                                <li>
                                    <i className="fa-solid fa-location-dot" />
                                    <span>742 Evergreen Terrace, San Francisco, CA</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone" />
                                    <span>+1 (800) 456-7890</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope" />
                                    <span>support@furnimate.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* FOOTER BOTTOM */}
                    <div className="footer-bottom">
                        <div className="row align-items-center">
                            <div className="col-md-8">
                                <p className="copyright">
                                    © 2026 FURNIMATE Inc. All rights reserved. Built with Bootstrap 5 &amp; Vanilla JS.
                                </p>
                            </div>
                            <div className="col-md-4">
                                <div className="payment-methods">
                                    <div className="payment-card visa">VISA</div>
                                    <div className="payment-card"><i className="fa-brands fa-cc-mastercard" /></div>
                                    <div className="payment-card paypal">PayPal</div>
                                    <div className="payment-card apple"><i className="fa-brands fa-apple" /> Pay</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer