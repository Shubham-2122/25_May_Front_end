import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <main>
                <section className="error-page">
                    <div className="error-content">
                        {/* 404 IMAGE */}
                        <img src="https://nov-minicom.myshopify.com/cdn/shop/files/404.png?v=1753761952&width=580" alt="404 Page Not Found" className="error-image" />
                        {/* TEXT */}
                        <div className="error-text">
                            <h1>
                                PAGE NOT FOUND
                            </h1>
                            <p>
                                We’re sorry — something has gone wrong on our end.
                            </p>
                            {/* BUTTONS */}
                            <div className="error-buttons">
                                <Link to="/" className="error-btn">
                                    BACK TO HOMEPAGE
                                </Link>
                                <Link to="/shop" className="error-btn">
                                    CONTINUE SHOPPING
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default NotFound