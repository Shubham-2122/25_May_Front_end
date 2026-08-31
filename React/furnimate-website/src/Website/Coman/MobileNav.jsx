import React from 'react'

function MobileNav() {
    return (
        <div>
            <nav className="mobile-bottom-nav">
                <a href="./index.html" className="mobile-nav-item active">
                    <span className="nav-icon">⌂</span>
                    <span>Home</span>
                </a>
                <a href="./Shop.html" className="mobile-nav-item">
                    <span className="nav-icon">▦</span>
                    <span>Shopping</span>
                </a>
                <a href="#" className="mobile-nav-item wishlist-nav">
                    <span className="nav-icon">☆</span>
                    <span className="wishlist-count">0</span>
                    <span>Wishlist</span>
                </a>
                <a href="#" className="mobile-nav-item">
                    <span className="nav-icon">♙</span>
                    <span>Account</span>
                </a>
            </nav>

        </div>
    )
}

export default MobileNav