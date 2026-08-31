import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
    const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
    const [openMobileGroup, setOpenMobileGroup] = useState(null)
    const categoriesButtonRef = useRef(null)
    const categoriesDropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedOutsideCategories =
                categoriesDropdownRef.current &&
                !categoriesDropdownRef.current.contains(event.target) &&
                categoriesButtonRef.current &&
                !categoriesButtonRef.current.contains(event.target)

            if (clickedOutsideCategories) {
                setIsCategoriesOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const handleMobileGroupToggle = (group) => {
        setOpenMobileGroup((prev) => (prev === group ? null : group))
    }

    const closeMobileMenu = () => {
        setIsMobileNavOpen(false)
        setOpenMobileGroup(null)
    }

    return (
        <>
            <header className="main-navbar">
                {/* LOGO */}
                <Link to="/" className="brand-logo" aria-label="Furnimate Home">
                    <span className="logo-icon">
                        <i className="fa-solid fa-chair" />
                    </span>
                    <span className="logo-text">FURNIMATE</span>
                </Link>
                {/* MOBILE TOGGLE */}
                <button
                    className="mobile-menu-btn"
                    id="mobileMenuBtn"
                    aria-label="Open navigation menu"
                    aria-expanded={isMobileNavOpen}
                    onClick={() => setIsMobileNavOpen((prev) => !prev)}
                >
                    <i className={`fa-solid ${isMobileNavOpen ? 'fa-xmark' : 'fa-bars'}`} />
                </button>
                {/* LEFT AREA: CATEGORIES & SEARCH */}
                <div className="navbar-left">
                    <div className="categories-wrapper">
                        <button
                            ref={categoriesButtonRef}
                            className={`categories-btn ${isCategoriesOpen ? 'active' : ''}`}
                            id="categoriesBtn"
                            aria-expanded={isCategoriesOpen}
                            aria-label="Toggle All Categories"
                            onClick={() => setIsCategoriesOpen((prev) => !prev)}
                        >
                            <i className="fa-solid fa-bars category-open-icon" />
                            <i className="fa-solid fa-xmark category-close-icon" />
                            <span>ALL CATEGORIES</span>
                        </button>
                        {/* CATEGORY DROPDOWN */}
                        <div
                            ref={categoriesDropdownRef}
                            className={`categories-dropdown ${isCategoriesOpen ? 'show' : ''}`}
                            id="categoriesDropdown"
                        >
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-couch" /> Living Room Furniture</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-bed" /> Bedroom Furniture</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-table" /> Dining Room Furniture</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-briefcase" /> Office Furniture</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-chair" /> Outdoor Furniture</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-box" /> Storage &amp; Organization</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-couch" /> Sofas &amp; Armchairs</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-vase" /> Decor &amp; Accessories</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-lightbulb" /> Lighting &amp; Lamps</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                            <a href="#" onClick={() => setIsCategoriesOpen(false)}>
                                <span><i className="fa-solid fa-child" /> Kids &amp; Nursery Furniture</span>
                                <i className="fa-solid fa-arrow-right" />
                            </a>
                        </div>
                    </div>
                    {/* SEARCH BOX */}
                    <div className="search-box">
                        <input type="text" placeholder="ENTER YOUR KEYWORDS" aria-label="Search keywords" />
                        <button aria-label="Submit search">
                            <i className="fa-solid fa-magnifying-glass" />
                        </button>
                    </div>
                </div>
                {/* DESKTOP NAVIGATION */}
                <nav className="desktop-navigation" aria-label="Main Navigation">
                    <NavLink to="/" className="nav-link">HOME</NavLink>
                    <NavLink to="/shop" className="nav-link">SHOP</NavLink>
                    {/* COLLECTIONS MEGA MENU */}
                    <div className="nav-dropdown mega-wrapper">
                        <button className="nav-link dropdown-trigger">
                            COLLECTIONS <i className="fa-solid fa-chevron-down" />
                        </button>
                        <div className="mega-menu">
                            <div className="mega-column first-column">
                                <a href="#">BEDROOM</a>
                                <a href="#">DINING ROOM</a>
                                <a href="#">HOME DECOR</a>
                                <a href="#">OFFICE</a>
                                <a href="#">LIVING ROOM</a>
                            </div>
                            <div className="mega-column">
                                <h4>COLLECTION PAGE</h4>
                                <a href="#">Collection Left Sidebar</a>
                                <a href="#">Collection Right Sidebar</a>
                                <a href="#">Collection Top Sidebar</a>
                                <a href="#">Collection Without Sidebar</a>
                                <a href="#">Collection Deals</a>
                            </div>
                            <div className="mega-column">
                                <h4>COLLECTION LAYOUTS</h4>
                                <a href="#">Collection Canvas On Left</a>
                                <a href="#">Collection Canvas On Top</a>
                                <a href="#">Collection Canvas On Bottom</a>
                                <a href="#">Collection Full Width</a>
                            </div>
                            <div className="mega-column">
                                <h4>PAGINATION TYPES</h4>
                                <a href="#">Numbered Pagination</a>
                                <a href="#">Load More Button</a>
                                <a href="#">Infinity Scroll Load More</a>
                            </div>
                            <div className="mega-image">
                                <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-lookbook1.jpg?v=1753174278&width=2048" alt="Collection Preview" />
                            </div>
                        </div>
                    </div>
                    {/* PAGES DROPDOWN */}
                    <div className="nav-dropdown simple-wrapper pages-wrapper">
                        <button className="nav-link dropdown-trigger">
                            PAGES <i className="fa-solid fa-chevron-down" />
                        </button>
                        <div className="simple-menu pages-menu">
                            <a href="./404.html">404 Error</a>
                            <a href="./about.html">About Us</a>
                            <a href="./contact.html">Contact Us</a>
                            <a href="./Account.html">Login / Register</a>
                            <a href="./deshbord.html">User Dashboard</a>
                            <a href="./forgot-password.html">Forgot Password</a>
                        </div>
                    </div>
                    {/* PROFILE DROPDOWN */}
                    <div className="nav-dropdown simple-wrapper">
                        <button className="nav-link dropdown-trigger">
                            Profile <i className="fa-solid fa-chevron-down" />
                        </button>
                        <div className="simple-menu">
                            <a href="./Account">Login / Signup</a>
                            <a href="./deshbord.html">My Account</a>
                        </div>
                    </div>
                </nav>
                {/* RIGHT ACTIONS */}
                <div className="navbar-actions">
                    <NavLink to="/account" className="action-btn" aria-label="User Account">
                        <i className="fa-regular fa-user" />
                    </NavLink>
                    <NavLink to="/wishlist" className="action-btn" aria-label="Wishlist items count: 0">
                        <i className="fa-regular fa-star" />
                        <span className="counter black-counter">0</span>
                    </NavLink>
                    <Link to=".Cart" className="action-btn bg-dark cart-btn counter-btn" aria-label="Shopping Cart count: 0">
                        <i className="fa-solid fa-bag-shopping" />
                        <span className="counter yellow-counter">0</span>
                    </Link>
                </div>
            </header>
            {/* MOBILE NAVIGATION DRAWER */}
            <div className={`mobile-navigation ${isMobileNavOpen ? 'show' : ''}`} id="mobileNavigation">
                <a href="./index.html" className="active" onClick={closeMobileMenu}>HOME</a>
                <a href="./Shop.html" onClick={closeMobileMenu}>SHOP</a>
                <div className={`mobile-item ${openMobileGroup === 'collections' ? 'active' : ''}`}>
                    <button className="mobile-dropdown-btn" onClick={() => handleMobileGroupToggle('collections')}>
                        COLLECTIONS <i className="fa-solid fa-chevron-down" />
                    </button>
                    <div className="mobile-submenu">
                        <a href="#" onClick={closeMobileMenu}>BEDROOM</a>
                        <a href="#" onClick={closeMobileMenu}>DINING ROOM</a>
                        <a href="#" onClick={closeMobileMenu}>HOME DECOR</a>
                        <a href="#" onClick={closeMobileMenu}>OFFICE</a>
                        <a href="#" onClick={closeMobileMenu}>LIVING ROOM</a>
                        <a href="#" onClick={closeMobileMenu}>Collection Left Sidebar</a>
                        <a href="#" onClick={closeMobileMenu}>Collection Right Sidebar</a>
                        <a href="#" onClick={closeMobileMenu}>Collection Full Width</a>
                    </div>
                </div>
                <div className={`mobile-item ${openMobileGroup === 'products' ? 'active' : ''}`}>
                    <button className="mobile-dropdown-btn" onClick={() => handleMobileGroupToggle('products')}>
                        PRODUCTS <i className="fa-solid fa-chevron-down" />
                    </button>
                    <div className="mobile-submenu">
                        <a href="#" onClick={closeMobileMenu}>Product Default</a>
                        <a href="#" onClick={closeMobileMenu}>Product Left Sidebar</a>
                        <a href="#" onClick={closeMobileMenu}>Product Right Sidebar</a>
                        <a href="#" onClick={closeMobileMenu}>Product Full Width</a>
                    </div>
                </div>
                <div className={`mobile-item ${openMobileGroup === 'pages' ? 'active' : ''}`}>
                    <button className="mobile-dropdown-btn" onClick={() => handleMobileGroupToggle('pages')}>
                        PAGES <i className="fa-solid fa-chevron-down" />
                    </button>
                    <div className="mobile-submenu">
                        <a href="./404.html" onClick={closeMobileMenu}>404 Error</a>
                        <a href="./about.html" onClick={closeMobileMenu}>About Us</a>
                        <a href="./contact.html" onClick={closeMobileMenu}>Contact Us</a>
                        <a href="#" onClick={closeMobileMenu}>FAQs Page</a>
                        <a href="#" onClick={closeMobileMenu}>Store Direction Page</a>
                        <a href="#" onClick={closeMobileMenu}>Store Locations Page</a>
                        <a href="#" onClick={closeMobileMenu}>Testimonials Page</a>
                    </div>
                </div>
                <div className={`mobile-item ${openMobileGroup === 'blog' ? 'active' : ''}`}>
                    <button className="mobile-dropdown-btn" onClick={() => handleMobileGroupToggle('blog')}>
                        BLOG <i className="fa-solid fa-chevron-down" />
                    </button>
                    <div className="mobile-submenu">
                        <a href="#" onClick={closeMobileMenu}>Blog Grid</a>
                        <a href="#" onClick={closeMobileMenu}>Blog List</a>
                        <a href="#" onClick={closeMobileMenu}>Blog Single</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav