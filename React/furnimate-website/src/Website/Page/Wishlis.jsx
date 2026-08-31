import React from 'react'
import Footer from '../Coman/Footer'
import MobileNav from '../Coman/MobileNav'
import Nav from '../Coman/Nav'

function Wishlis() {
    return (
        <>
            <Nav />
            <section className="about-banner">
                <img src="https://nov-minicom.myshopify.com/cdn/shop/files/breadcrumb-collection.jpg?v=1749027938&width=2560" alt="About Us" />
                <div className="about-content">
                    <h1>WISHLIST</h1>
                    <div className="breadcrumb">
                        <a href="index.html">Home</a>
                        <span className="arrow">◆</span>
                        <span>Page Wishlist</span>
                    </div>
                </div>
            </section>

            <Footer />
            <MobileNav />
        </>
    )
}

export default Wishlis
