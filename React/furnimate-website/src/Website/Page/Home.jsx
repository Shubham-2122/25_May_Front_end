import React, { useEffect } from 'react'
import Nav from '../Coman/Nav'
import MobileNav from '../Coman/MobileNav'
import Footer from '../Coman/Footer'
// import { Helmet } from 'react-helmet'

function Home() {


    useEffect(() => {
        const initSlider = () => {
            if (!window.jQuery || !window.jQuery.fn.slick) {
                setTimeout(initSlider, 100);
                return;
            }

            const $ = window.jQuery;

            // Gotta Have It Slider
            if ($('.gotta-slider').length) {
                if ($('.gotta-slider').hasClass('slick-initialized')) {
                    $('.gotta-slider').slick('unslick');
                }

                $('.gotta-slider').slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    prevArrow: $('.gotta-prev'),
                    nextArrow: $('.gotta-next'),
                    responsive: [
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 4
                            }
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            }

            // Product Gallery Slider
            if ($('.product-main-slider').length) {
                if ($('.product-main-slider').hasClass('slick-initialized')) {
                    $('.product-main-slider').slick('unslick');
                }

                $('.product-main-slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    fade: true,
                    prevArrow: $('.gallery-prev'),
                    nextArrow: $('.gallery-next')
                });
            }

            // Thumbnail click
            $('.thumbnail').off('click.home').on('click.home', function () {
                const index = $(this).data('slide');

                $('.product-main-slider').slick('slickGoTo', index);

                $('.thumbnail').removeClass('active');
                $(this).addClass('active');
            });

            // Continuous Slider
            if ($('.continuous-slider').length) {
                if ($('.continuous-slider').hasClass('slick-initialized')) {
                    $('.continuous-slider').slick('unslick');
                }

                $('.continuous-slider').slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false,
                    autoplay: true,
                    autoplaySpeed: 0,
                    speed: 5000,
                    cssEase: 'linear',
                    pauseOnHover: false,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            }
        };

        const timer = setTimeout(initSlider, 300);

        return () => {
            clearTimeout(timer);

            if (window.jQuery && window.jQuery.fn.slick) {
                const $ = window.jQuery;

                $('.gotta-slider.slick-initialized').slick('unslick');
                $('.product-main-slider.slick-initialized').slick('unslick');
                $('.continuous-slider.slick-initialized').slick('unslick');

                $('.thumbnail').off('.home');
            }
        };
    }, []);


    return (
        <>
            
            <section className="hero-section">
                <Nav />
                {/* HERO CONTENT */}
                <div className="hero-content">
                    <h1>SHOP THE LOOK</h1>
                    <p>
                        STEP INTO OUR LATEST LOOKBOOK AND EXPLORE A BEAUTIFULLY STYLED
                        <br />
                        LIVING ROOM FEATURING A COZY ARMCHAIR AND SLEEK TV CABINET
                    </p>
                </div>
            </section>
            <div>
                {/* =========================================================
   FEATURES SECTION
    ========================================================= */}
                <section className="features-section">
                    <div className="container-fluid">
                        <div className="row">
                            {/* FEATURE 1 */}
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="bi bi-leaf" /></div>
                                    <div className="feature-content">
                                        <h3>Eco-Friendly Materials</h3>
                                        <p>We craft our furniture using responsibly sourced, environmentally friendly materials.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FEATURE 2 */}
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="bi bi-tools" /></div>
                                    <div className="feature-content">
                                        <h3>Effortless Assembly</h3>
                                        <p>Thoughtfully designed for quick setup, requiring minimal effort and no extra tools.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FEATURE 3 */}
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="bi bi-recycle" /></div>
                                    <div className="feature-content">
                                        <h3>Giving Back To Nature</h3>
                                        <p>Every purchase contributes to reforestation efforts, helping restore green spaces.</p>
                                    </div>
                                </div>
                            </div>
                            {/* FEATURE 4 */}
                            <div className="col-lg-3 col-md-6">
                                <div className="feature-item">
                                    <div className="feature-icon"><i className="bi bi-lightbulb" /></div>
                                    <div className="feature-content">
                                        <h3>Sustainable Production</h3>
                                        <p>Dedicated to reducing waste and promoting eco-conscious manufacturing practices.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* =========================================================
   LOOKBOOK SECTION
    ========================================================= */}
                <section className="lookbook-section">
                    <div className="container-fluid ">
                        <div className="row g-0">
                            {/* CARD 1 */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-12 px-1">
                                <div className="lookbook-card card-1">
                                    <img className="main-image" src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-lookbook2.jpg?v=1753254671&width=580" alt="Mini Ceramic Flower Pot" />
                                    <div className="product-popup">
                                        <div className="product-info">
                                            <h4>Mini Ceramic Flower Pot For Succulent Display</h4>
                                            <p className="product-price">$20.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-12 px-1">
                                <div className="lookbook-card card-2">
                                    <img className="main-image" src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-lookbook3.jpg?v=1753254671&width=580" alt="Solid Wood Bed Frame" />
                                    <div className="product-popup">
                                        <div className="product-info">
                                            <h4>Solid Wood Bed Frame With Classic Vintage Design</h4>
                                            <p className="product-price">$300.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 3 */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-12 px-1">
                                <div className="lookbook-card card-3">
                                    <img className="main-image" src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-lookbook4.jpg?v=1753254671&width=580" alt="Classic Wooden Nightstand" />
                                    <div className="product-popup">
                                        <div className="product-info">
                                            <h4>Classic Wooden Nightstand With Dual Storage Drawers</h4>
                                            <p className="product-price">$99.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 4 */}
                            <div className="col-xl-3 col-lg-3 col-md-6 col-12 px-1">
                                <div className="lookbook-card card-4">
                                    <img className="main-image" src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-lookbook5.jpg?v=1753254671&width=580" alt="Miniature Plant" />
                                    <div className="product-popup">
                                        <div className="product-info">
                                            <h4>Miniature Plant Pot For Stylish Indoor Decoration</h4>
                                            <p className="product-price">$34.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* =========================================================
   GOTTA HAVE IT SECTION (STANDARDIZED PRODUCT CARDS)
    ========================================================= */}
                <section className="gotta-section">
                    <div className="container-fluid gotta-container">
                        {/* SECTION HEADER */}
                        <div className="gotta-header">
                            <div className="gotta-title">GOTTA HAVE IT</div>
                            <div className="gotta-tabs">
                                <button className="gotta-tab active">
                                    <span className="tab-line" /> LIVING ROOM
                                </button>
                                <button className="gotta-tab">DINING ROOM</button>
                                <button className="gotta-tab">HOME DECOR</button>
                            </div>
                            <div className="slider-arrows">
                                <button type="button" className="gotta-prev" aria-label="Previous Products">←</button>
                                <button type="button" className="gotta-next" aria-label="Next Products">→</button>
                            </div>
                        </div>
                        {/* PRODUCT SLIDER TRACK (EQUALIZED CARDS) */}
                        <div className="gotta-slider">
                            {/* CARD 1 */}
                            <div className="product-slide">
                                <div className="product-card">
                                    <div className="product-image">
                                        <span className="sale-badge">−5%</span>
                                        <img src="https://nov-minicom.myshopify.com/cdn/shop/files/1-min_0199d304-ee6d-40bc-98c7-0778b1d2b116.jpg?v=1749097460&width=260" alt="Modern Beige Armchair" />
                                    </div>
                                    <div className="product-info-wrap">
                                        <div className="product-rating">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <h3 className="product-name">Modern Beige Armchair With Wooden Legs</h3>
                                        <div className="product-price">
                                            $150.00
                                            <del>$158.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 2 */}
                            <div className="product-slide">
                                <div className="product-card">
                                    <div className="product-image">
                                        <span className="sale-badge">−3%</span>
                                        <img src="https://nov-minicom.myshopify.com/cdn/shop/files/1-min_79846b9f-c414-4361-a4ee-1cd67cb12c50.jpg?v=1749109527&width=260" alt="Wooden Frame Sofa" />
                                    </div>
                                    <div className="product-info-wrap">
                                        <div className="product-rating">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <h3 className="product-name">Wooden Frame Sofa Chair With Plush Cushion Seat</h3>
                                        <div className="product-price">
                                            $270.00
                                            <del>$280.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 3 */}
                            <div className="product-slide">
                                <div className="product-card">
                                    <div className="product-image">
                                        <span className="sale-badge">−9%</span>
                                        <img src="https://nov-minicom.myshopify.com/cdn/shop/files/2-min_dd727d3a-1661-4380-8ad5-21bb54853688.jpg?v=1749096992&width=360" alt="Round Wooden Coffee Table" />
                                    </div>
                                    <div className="product-info-wrap">
                                        <div className="product-rating">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <h3 className="product-name">Round Wooden Coffee Table With Carved Pedestal</h3>
                                        <div className="product-price">
                                            $50.00
                                            <del>$55.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 4 */}
                            <div className="product-slide">
                                <div className="product-card">
                                    <div className="product-image">
                                        <span className="sale-badge">−2%</span>
                                        <img src="https://nov-minicom.myshopify.com/cdn/shop/files/2-min_6761059f-0ac2-4d7e-b149-5d64c98d3b2f.jpg?v=1749098973&width=360" alt="Wooden TV Stand" />
                                    </div>
                                    <div className="product-info-wrap">
                                        <div className="product-rating">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <h3 className="product-name">Wooden TV Stand With Cabinets And Storage Shelf</h3>
                                        <div className="product-price">
                                            $254.00
                                            <del>$260.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 5 */}
                            <div className="product-slide">
                                <div className="product-card">
                                    <div className="product-image">
                                        <span className="sale-badge">−7%</span>
                                        <img src="https://nov-minicom.myshopify.com/cdn/shop/files/1-min_bdb6b918-6f94-45a7-b53e-4d9977e4c158.jpg?v=1749111975&width=260" alt="Decorative Cactus Plant" />
                                    </div>
                                    <div className="product-info-wrap">
                                        <div className="product-rating">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <h3 className="product-name">Decorative Cactus Plant Pot For Indoor Display</h3>
                                        <div className="product-price">
                                            $37.00
                                            <del>$40.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 6 */}
                            <div className="product-slide">
                                <div className="product-card">
                                    <div className="product-image">
                                        <span className="sale-badge">−8%</span>
                                        <img src="https://nov-minicom.myshopify.com/cdn/shop/files/1-min_0199d304-ee6d-40bc-98c7-0778b1d2b116.jpg?v=1749097460&width=260" alt="Modern Furniture Collection" />
                                    </div>
                                    <div className="product-info-wrap">
                                        <div className="product-rating">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <h3 className="product-name">Modern Furniture Collection Premium Design</h3>
                                        <div className="product-price">
                                            $180.00
                                            <del>$195.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* CARD 7 */}
                            <div className="product-slide">
                                <div className="product-card">
                                    <div className="product-image">
                                        <span className="sale-badge">−6%</span>
                                        <img src="https://nov-minicom.myshopify.com/cdn/shop/files/1-min_79846b9f-c414-4361-a4ee-1cd67cb12c50.jpg?v=1749109527&width=260" alt="Premium Wooden Sofa" />
                                    </div>
                                    <div className="product-info-wrap">
                                        <div className="product-rating">
                                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                                        </div>
                                        <h3 className="product-name">Premium Wooden Sofa With Comfortable Cushion</h3>
                                        <div className="product-price">
                                            $320.00
                                            <del>$340.00</del>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* =========================================================
   FEATURED PRODUCT SECTION (BACKGROUND VIDEO)
    ========================================================= */}
                <section className="featured-product-section">
                    <video className="featured-bg-video" autoPlay muted loop playsInline preload="metadata">
                        <source src="./video/001.mp4" type="video/mp4" />
                        <source src="https://nov-minicom.myshopify.com/cdn/shop/videos/c/vp/2ab84b2421fa4f7e83f70795019d6b4a/2ab84b2421fa4f7e83f70795019d6b4a.HD-1080p-7.2Mbps-51401320.mp4?v=0" type="video/mp4" />
                    </video>
                    <div className="featured-video-overlay" />
                    <div className="featured-container">
                        <div className="featured-heading">
                            <h2>FEATURED PRODUCT</h2>
                            <span className="heading-line" />
                            <p>CRAFTED FOR YOUR HOME</p>
                        </div>
                        <div className="featured-product-box">
                            <div className="row g-0">
                                {/* LEFT GALLERY */}
                                <div className="col-lg-6">
                                    <div className="product-gallery">
                                        <div className="product-thumbnails">
                                            <button className="thumbnail active" data-slide={0}>
                                                <img src="https://nov-minicom.myshopify.com/cdn/shop/files/1-min_bcd7861a-2892-4c1d-9705-c28c147d9967.jpg?v=1749106916&width=580" alt="Desk Image 1" />
                                            </button>
                                            <button className="thumbnail" data-slide={1}>
                                                <img src="https://nov-minicom.myshopify.com/cdn/shop/files/2-min_060fe74e-45b3-4bea-b0dc-eabfdd0b5aa0.jpg?v=1749106917&width=580" alt="Desk Image 2" />
                                            </button>
                                            <button className="thumbnail" data-slide={2}>
                                                <img src="https://nov-minicom.myshopify.com/cdn/shop/files/3-min_f927c75d-c02d-4607-bc92-12a91dd5b775.jpg?v=1749106917&width=580" alt="Desk Image 3" />
                                            </button>
                                            <button className="thumbnail" data-slide={3}>
                                                <img src="https://nov-minicom.myshopify.com/cdn/shop/files/4-min_e259721e-ef15-4346-99da-6281e0497cd7.jpg?v=1749106917&width=580" alt="Desk Image 4" />
                                            </button>
                                        </div>
                                        <div className="product-main-slider">
                                            <div className="main-slide"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/1-min_bcd7861a-2892-4c1d-9705-c28c147d9967.jpg?v=1749106916&width=580" alt="Wooden Office Desk" /></div>
                                            <div className="main-slide"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/2-min_060fe74e-45b3-4bea-b0dc-eabfdd0b5aa0.jpg?v=1749106917&width=580" alt="Wooden Office Desk" /></div>
                                            <div className="main-slide"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/3-min_f927c75d-c02d-4607-bc92-12a91dd5b775.jpg?v=1749106917&width=580" alt="Wooden Office Desk" /></div>
                                            <div className="main-slide"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/4-min_e259721e-ef15-4346-99da-6281e0497cd7.jpg?v=1749106917&width=580" alt="Wooden Office Desk" /></div>
                                        </div>
                                        <button className="gallery-arrow gallery-prev" type="button" aria-label="Previous image"><i className="bi bi-chevron-left" /></button>
                                        <button className="gallery-arrow gallery-next" type="button" aria-label="Next image"><i className="bi bi-chevron-right" /></button>
                                    </div>
                                </div>
                                {/* RIGHT INFORMATION */}
                                <div className="col-lg-6">
                                    <div className="product-information">
                                        <h1>Wooden Office Desk with Drawers <br className="desktop-break" />Open Storage</h1>
                                        <div className="product-price">
                                            <span className="current-price">$140.00</span>
                                            <del>$145.00</del>
                                        </div>
                                        <p className="product-description">
                                            Crafted from high-density solid wood, engineered for ergonomic comfort and modern work
                                            spaces. Features spacious soft-close drawers and open side shelves.
                                        </p>
                                        <div className="stock-status">
                                            <span className="stock-icon"><i className="bi bi-check-lg" /></span>
                                            <span>6 Products in stock</span>
                                        </div>
                                        <div className="cart-row">
                                            <div className="quantity-box">
                                                <button type="button" className="qty-minus" aria-label="Decrease quantity">−</button>
                                                <span className="quantity">1</span>
                                                <button type="button" className="qty-plus" aria-label="Increase quantity">+</button>
                                            </div>
                                            <button type="button" className="add-cart-btn">Add To Cart</button>
                                            <button type="button" className="wishlist-btn" aria-label="Add to wishlist"><i className="bi bi-star" /></button>
                                        </div>
                                        <button type="button" className="buy-now-btn">Buy It Now <span>→</span></button>
                                        <div className="product-links">
                                            <a href="#"><i className="bi bi-share" /> Share</a>
                                            <a href="#"><i className="bi bi-question-circle" /> Ask A Question</a>
                                            <a href="#"><i className="bi bi-chat-square-text" /> FAQ</a>
                                        </div>
                                        <div className="delivery-info">
                                            <div className="delivery-item">
                                                <i className="bi bi-box-seam" />
                                                <p><strong>Estimated Delivery</strong> : 22 – 23 Jun, 2025</p>
                                            </div>
                                            <div className="delivery-item">
                                                <i className="bi bi-truck" />
                                                <p><strong>Free Shipping &amp; Returns</strong> : On all order over $200.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* =========================================================
   COLLECTION ACCORDION SECTION
    ========================================================= */}
                <section className="collection-accordion mt-2 mb-5">
                    <div className="collection-row">
                        <div className="collection-card">
                            <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-accordion1.jpg?v=1753326494&width=1200" alt="Living Room Collection" className="collection-image" />
                            <div className="collection-overlay" />
                            <div className="collection-content">
                                <div className="collection-label">Elegant Living Area</div>
                                <h2 className="collection-title">Living Room Collection</h2>
                            </div>
                        </div>
                        <div className="collection-card">
                            <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-accordion2.jpg?v=1753326494&width=1200" alt="Office Furniture Collection" className="collection-image" />
                            <div className="collection-overlay" />
                            <div className="collection-content">
                                <div className="collection-label">Workspace Essentials</div>
                                <h2 className="collection-title">Office Furniture Collection</h2>
                            </div>
                        </div>
                    </div>
                </section>
                {/* =========================================================
   CATEGORY SECTION
    ========================================================= */}
                <section className="category-section py-5">
                    <div className="container-fluid category-container">
                        <div className="category-header">
                            <div>
                                <h2>BROWSE THROUGH OUR RANGE OF CATEGORIES</h2>
                                <p>
                                    Navigate through our diverse product categories and find everything from top-rated<br className="desktop-break" />
                                    items to new arrivals, all tailored to meet your preferences.
                                </p>
                            </div>
                            <a href="#" className="category-view-btn">VIEW ALL <span>↗</span></a>
                        </div>
                        <div className="category-list">
                            <a href="#" className="category-item">
                                <div className="category-image-wrap">
                                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-cate1.jpg?v=1753328929&width=380" alt="Plant Pots" />
                                    <span className="category-count">56</span>
                                </div>
                                <h3>Plant Pots</h3>
                            </a>
                            <a href="#" className="category-item">
                                <div className="category-image-wrap">
                                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-cate2.jpg?v=1753328930&width=380" alt="Footwear" />
                                    <span className="category-count">35</span>
                                </div>
                                <h3>Footwear</h3>
                            </a>
                            <a href="#" className="category-item">
                                <div className="category-image-wrap">
                                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-cate3.jpg?v=1753328930&width=380" alt="Ceiling Light" />
                                    <span className="category-count">88</span>
                                </div>
                                <h3>Ceiling Light</h3>
                            </a>
                            <a href="#" className="category-item">
                                <div className="category-image-wrap">
                                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-cate4.jpg?v=1753328930&width=380" alt="Home Decor" />
                                    <span className="category-count">68</span>
                                </div>
                                <h3>Home Decor</h3>
                            </a>
                            <a href="#" className="category-item">
                                <div className="category-image-wrap">
                                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-cate5.jpg?v=1753328930&width=380" alt="Wooden Chair" />
                                    <span className="category-count">26</span>
                                </div>
                                <h3>Wooden Chair</h3>
                            </a>
                            <a href="#" className="category-item">
                                <div className="category-image-wrap">
                                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-cate6.jpg?v=1753328930&width=380" alt="Pillow" />
                                    <span className="category-count">120</span>
                                </div>
                                <h3>Pillow</h3>
                            </a>
                        </div>
                    </div>
                </section>
                {/* =========================================================
   FURNITURE BANNERS SECTION
    ========================================================= */}
                <section className="furniture-section">
                    <div className="furniture-container">
                        <div className="top-banners">
                            <div className="banner-card top-banner">
                                <img className="banner-image" src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner1.jpg?v=1753349505&width=580" alt="Cozy Furniture" />
                                <div className="banner-overlay">
                                    <div className="banner-content">
                                        <div className="banner-small">Comfort Meets Style</div>
                                        <h2 className="banner-title">Cozy Furniture</h2>
                                        <p className="banner-description">Beautiful furniture designed for modern living.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-card top-banner">
                                <img className="banner-image" src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner2.jpg?v=1753349505&width=580" alt="Wooden Cabinet" />
                                <div className="banner-overlay">
                                    <div className="banner-content">
                                        <div className="banner-small">Natural Beauty</div>
                                        <h2 className="banner-title">Wooden Cabinet</h2>
                                        <p className="banner-description">Bring warmth and timeless style to your home.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-card top-banner">
                                <img className="banner-image" src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner3.jpg?v=1753349505&width=580" alt="Modern Interior" />
                                <div className="banner-overlay">
                                    <div className="banner-content">
                                        <div className="banner-small">Modern Living</div>
                                        <h2 className="banner-title">Modern Interior</h2>
                                        <p className="banner-description">Create an elegant and comfortable living space.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="banner-card large-banner">
                            <img className="banner-image" src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner4.jpg?v=1753349505&width=580" alt="Cozy Fabric Sofa" />
                            <div className="banner-overlay">
                                <div className="banner-content">
                                    <div className="banner-small">Comfort Meets Style</div>
                                    <h2 className="banner-title">Cozy Fabric Sofa</h2>
                                    <p className="banner-description">Create a peaceful and stylish retreat with a Scandinavian Bedroom.
                                    </p>
                                </div>
                            </div>
                            <div className="banner-arrow">↗</div>
                        </div>
                    </div>
                </section>
                {/* =========================================================
   FLASH SALE SECTION
    ========================================================= */}
                <section className="flash-sale-section">
                    <div className="flash-sale-container">
                        <div className="flash-sale-row">
                            <div className="flash-content">
                                <span className="flash-label">Flash Sale!</span>
                                <div className="countdown">
                                    <div className="count-box"><span className="count-number" id="days">00</span><span className="count-text">Days</span></div>
                                    <div className="count-box"><span className="count-number" id="hours">00</span><span className="count-text">Hours</span></div>
                                    <div className="count-box"><span className="count-number" id="minutes">00</span><span className="count-text">Mins</span></div>
                                    <div className="count-box"><span className="count-number" id="seconds">00</span><span className="count-text">Secs</span></div>
                                </div>
                                <h1 className="flash-title">Luxury Comfort Upholstered <br />Lounge Armchair</h1>
                                <p className="flash-description">
                                    Experience everyday luxury with our Soft Weave sofa, crafted in premium fabric for cozy seating
                                    and timeless modern appeal—perfect for any living space.
                                </p>
                                <a href="#" className="shop-button">Shop Now <span>↗</span></a>
                            </div>
                            <div className="flash-image-wrapper">
                                <img className="flash-product-image" src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-sofa2.png?v=1753427472&width=900" alt="Luxury Comfort Upholstered Lounge Armchair" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* =========================================================
   MEGA PRODUCT CATEGORY GRID
    ========================================================= */}
                <section className="mega-product-section">
                    <div className="container mega-container">
                        <div className="row">
                            {/* LIVING ROOM */}
                            <div className="col-lg-3 col-md-6 mega-column">
                                <h3 className="mega-title">Living Room</h3>
                                <div className="mega-products">
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-sofa2.png?v=1753427472&width=300" alt="Armchair" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Modern Beige Armchair With Wooden Legs</div>
                                            <div className="mega-price">$150.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner2.jpg?v=1753349505&width=300" alt="TV Stand" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Solid Wood TV Stand With Storage Drawers Design</div>
                                            <div className="mega-price">$135.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image">
                                            <span className="sale-badge">-3%</span>
                                            <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner1.jpg?v=1753349505&width=300" alt="Sofa Chair" />
                                        </div>
                                        <div className="mega-info">
                                            <div className="mega-name">Wooden Frame Sofa Chair With Plush Cushion Seat</div>
                                            <div className="mega-price">$270.00 <span className="old-price">$280.00</span></div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner3.jpg?v=1753349505&width=300" alt="Wooden Chair" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Premium Solid Wood Chair With Comfortable Design</div>
                                            <div className="mega-price">$79.00</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* PLANT POTS */}
                            <div className="col-lg-3 col-md-6 mega-column">
                                <h3 className="mega-title">Plant Pots</h3>
                                <div className="mega-products">
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner4.jpg?v=1753349505&width=300" alt="Plant Pot" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Compact Mini Plant Pot For Desk Or Shelf Display</div>
                                            <div className="mega-price">$37.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner4.jpg?v=1753349505&width=300" alt="Cactus" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Decorative Cactus Plant Pot For Indoor Display</div>
                                            <div className="mega-price">$37.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner4.jpg?v=1753349505&width=300" alt="Green Plant" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Durable Plastic Fiber Plant Pot For Indoor Decor</div>
                                            <div className="mega-price">$78.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner4.jpg?v=1753349505&width=300" alt="Flower Pot" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Mini Ceramic Flower Pot For Desk And Home Decor</div>
                                            <div className="mega-price">$15.00</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* TABLES & DESKS */}
                            <div className="col-lg-3 col-md-6 mega-column">
                                <h3 className="mega-title">Tables &amp; Desks</h3>
                                <div className="mega-products">
                                    <a href="#" className="mega-product">
                                        <div className="mega-image">
                                            <span className="sale-badge">-3%</span>
                                            <img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner2.jpg?v=1753349505&width=300" alt="Office Desk" />
                                        </div>
                                        <div className="mega-info">
                                            <div className="mega-name">Wooden Office Desk With Drawers Open Storage</div>
                                            <div className="mega-price">$140.00 <span className="old-price">$145.00</span></div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner3.jpg?v=1753349505&width=300" alt="Wood Chair" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Premium Solid Wood Chair With Comfortable Design</div>
                                            <div className="mega-price">$79.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner2.jpg?v=1753349505&width=300" alt="Nightstand" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Classic Wooden Nightstand With Dual Storage Drawers</div>
                                            <div className="mega-price">$99.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-sofa2.png?v=1753427472&width=300" alt="Armchair" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Modern Beige Armchair With Wooden Legs</div>
                                            <div className="mega-price">$150.00</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* BEDROOM */}
                            <div className="col-lg-3 col-md-6 mega-column">
                                <h3 className="mega-title">Bedroom</h3>
                                <div className="mega-products">
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner1.jpg?v=1753349505&width=300" alt="Bed" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Solid Wood Bed Frame With Classic Vintage Design</div>
                                            <div className="mega-price">$300.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner3.jpg?v=1753349505&width=300" alt="Table Lamp" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Wooden Base Table Lamp With Fabric Shade Design</div>
                                            <div className="mega-price">$35.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner2.jpg?v=1753349505&width=300" alt="Bedside Cabinet" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Solid Wood Bedside Cabinet With Two Storage Drawers</div>
                                            <div className="mega-price">$265.00</div>
                                        </div>
                                    </a>
                                    <a href="#" className="mega-product">
                                        <div className="mega-image"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner2.jpg?v=1753349505&width=300" alt="Nightstand" /></div>
                                        <div className="mega-info">
                                            <div className="mega-name">Classic Wooden Nightstand With Dual Storage Drawers</div>
                                            <div className="mega-price">$99.00</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mega-bottom-line" />
                    </div>
                </section>
                {/* =========================================================
   CONTINUOUS BRAND SHOWCASE SLIDER
    ========================================================= */}
                <section className="continuous-section">
                    <h2 className="continuous-heading">EXPLORE FURNITURE</h2>
                    <div className="continuous-slider">
                        <div>
                            <div className="continuous-card"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner1.jpg?v=1753349505&width=580" alt="Furniture Showcase 1" /></div>
                        </div>
                        <div>
                            <div className="continuous-card"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner2.jpg?v=1753349505&width=580" alt="Furniture Showcase 2" /></div>
                        </div>
                        <div>
                            <div className="continuous-card"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner3.jpg?v=1753349505&width=580" alt="Furniture Showcase 3" /></div>
                        </div>
                        <div>
                            <div className="continuous-card"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner4.jpg?v=1753349505&width=580" alt="Furniture Showcase 4" /></div>
                        </div>
                        <div>
                            <div className="continuous-card"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner1.jpg?v=1753349505&width=580" alt="Furniture Showcase 5" /></div>
                        </div>
                        <div>
                            <div className="continuous-card"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner2.jpg?v=1753349505&width=580" alt="Furniture Showcase 6" /></div>
                        </div>
                        <div>
                            <div className="continuous-card"><img src="https://nov-minicom.myshopify.com/cdn/shop/files/home5-banner3.jpg?v=1753349505&width=580" alt="Furniture Showcase 7" /></div>
                        </div>
                    </div>
                </section>
            </div>


            <Footer />
            <MobileNav />

        </>
    )
}

export default Home