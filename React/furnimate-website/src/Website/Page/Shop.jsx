import React, { useEffect } from 'react'
import Nav from '../Coman/Nav'
import Footer from '../Coman/Footer'
import MobileNav from '../Coman/MobileNav'

function Shop() {
   
useEffect(() => {
    let timer;

    const initSlider = () => {
        if (!window.jQuery || !window.jQuery.fn.slick) {
            timer = setTimeout(initSlider, 100);
            return;
        }

        const $ = window.jQuery;
        const $slider = $('.category-slider');

        if (!$slider.length) return;

        // Already initialized હોય તો પહેલા destroy કરો
        if ($slider.hasClass('slick-initialized')) {
            $slider.slick('unslick');
        }

        // Initialize slider
        $slider.slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 600,
            pauseOnHover: true,
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
    };

    // DOM render થયા પછી initialize
    timer = setTimeout(initSlider, 300);

    // Cleanup જ્યારે Shop page પરથી બહાર જાઓ
    return () => {
        clearTimeout(timer);

        if (window.jQuery && window.jQuery.fn.slick) {
            const $ = window.jQuery;

            $('.category-slider.slick-initialized').slick('unslick');
        }
    };
}, []);


  return (
    <>
      <section className="shop-hero-section">
        <Nav />
      </section>


      <div>
        {/* =====================================================
   COLLECTION HERO
    ====================================================== */}
        <section className="collection-hero">
          {/* Heading */}
          <div className="collection-heading">
            <h1>
              TABLES &amp; DESKS
            </h1>
            <div className="collection-breadcrumb">
              <a href="#">
                Home
              </a>
              <span className="breadcrumb-dot">
                ◆
              </span>
              <span>
                Tables &amp; Desks
              </span>
            </div>
          </div>
          {/* =================================================
       CATEGORY SLIDER
  ================================================== */}
          <div className="category-slider-wrap">
            <div className="category-slider">
              {/* CARD 1 */}
              <div className="category-slide">
                <div className="category-card">
                  <div className="category-image">
                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/cate-bedroom.png?crop=center&height=380&v=1751254345&width=380" alt="Bedroom" />
                  </div>
                  <h3 className="category-name">
                    Bedroom
                  </h3>
                  <span className="shop-category-count">
                    26 Products
                  </span>
                </div>
              </div>
              {/* CARD 2 */}
              <div className="category-slide">
                <div className="category-card">
                  <div className="category-image">
                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/cate-dining-room.png?crop=center&height=380&v=1751254349&width=380" alt="Dining Room" />
                  </div>
                  <h3 className="category-name">
                    Dining Room
                  </h3>
                  <span className="shop-category-count">
                    24 Products
                  </span>
                </div>
              </div>
              {/* CARD 3 */}
              <div className="category-slide">
                <div className="category-card">
                  <div className="category-image">
                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/cate-lighting.png?crop=center&height=380&v=1751254349&width=380" alt="Lighting" />
                  </div>
                  <h3 className="category-name">
                    Lighting
                  </h3>
                  <span className="shop-category-count">
                    28 Products
                  </span>
                </div>
              </div>
              {/* CARD 4 */}
              <div className="category-slide">
                <div className="category-card">
                  <div className="category-image">
                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/cate-table.png?crop=center&height=380&v=1751254349&width=380" alt="Tables & Desks" />
                  </div>
                  <h3 className="category-name">
                    Tables &amp; Desks
                  </h3>
                  <span className="shop-category-count">
                    29 Products
                  </span>
                </div>
              </div>
              {/* CARD 5 */}
              <div className="category-slide">
                <div className="category-card">
                  <div className="category-image">
                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/cate-office.png?crop=center&height=380&v=1751254349&width=380" alt="Office" />
                  </div>
                  <h3 className="category-name">
                    Office
                  </h3>
                  <span className="shop-category-count">
                    18 Products
                  </span>
                </div>
              </div>
              {/* CARD 6 */}
              <div className="category-slide">
                <div className="category-card">
                  <div className="category-image">
                    <img src="https://nov-minicom.myshopify.com/cdn/shop/files/cate-livingroom.png?crop=center&height=380&v=1751254350&width=380" alt="Living Room" />
                  </div>
                  <h3 className="category-name">
                    Living Room
                  </h3>
                  <span className="shop-category-count">
                    30 Products
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="shop-page">
          <div className="shop-page-container container-xxl">
            {/* =================================================
   TOP BAR
    ================================================= */}
            <div className="shop-top">
              <div className="category-heading">
                <i className="bi bi-list" />
                <span>CATEGORIES</span>
              </div>
              {/* Desktop Sort */}
              <div className="sort-area">
                <span>Sort by</span>
                <select id="desktopSort">
                  <option value="featured">
                    Featured
                  </option>
                  <option value="low">
                    Price: Low to High
                  </option>
                  <option value="high">
                    Price: High to Low
                  </option>
                  <option value="name">
                    Alphabetically
                  </option>
                </select>
              </div>
              {/* View */}
              <div className="view-buttons">
                <button className="view-button active">
                  <i className="bi bi-grid-3x3-gap-fill" />
                </button>
                <button className="view-button">
                  <i className="bi bi-grid" />
                </button>
                <button className="view-button">
                  <i className="bi bi-list-ul" />
                </button>
              </div>
            </div>
            {/* =================================================
   MOBILE FILTER / SORT
    ================================================= */}
            <div className="mobile-controls">
              <button className="mobile-filter-btn" data-bs-toggle="offcanvas" data-bs-target="#filterDrawer">
                <i className="bi bi-sliders" />
                FILTER
              </button>
              <button className="mobile-sort-btn" data-bs-toggle="dropdown">
                <i className="bi bi-sort-down" />
                SORT
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item">
                    Featured
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    Price: Low to High
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    Price: High to Low
                  </button>
                </li>
                <li>
                  <button className="dropdown-item">
                    Alphabetically
                  </button>
                </li>
              </ul>
            </div>
            {/* =================================================
   MAIN ROW
    ================================================= */}
            <div className="row g-0">
              {/* =================================================
       DESKTOP SIDEBAR
  ================================================= */}
              <aside className="col-lg-3 shop-sidebar">
                {/* Categories */}
                <div className="shop_category-list">
                  <a href="#" className="shop_category-item">
                    Home Decor
                  </a>
                  <a href="#" className="shop_category-item">
                    Bedroom
                  </a>
                  <a href="#" className="shop_category-item">
                    Outdoor
                  </a>
                  <a href="#" className="shop_category-item">
                    Tables &amp; Desks
                  </a>
                  <a href="#" className="shop_category-item">
                    Plant Pots
                  </a>
                  <a href="#" className="shop_category-item">
                    See More +
                  </a>
                </div>
                {/* Filter title */}
                <div className="filter-title">
                  <i className="bi bi-sliders2" />
                  FILTER BY
                </div>
                {/* Clear */}
                <button className="clear-all" id="clearDesktop">
                  <i className="bi bi-trash3" />
                  &nbsp; CLEAR ALL
                </button>
                {/* =================================================
           CATEGORY FILTER
      ================================================= */}
                <div className="filter-box">
                  <div className="filter-header">
                    <h4>
                      <i className="bi bi-chevron-up" />
                      &nbsp; CATEGORIES
                    </h4>
                    <button className="reset-filter">
                      RESET
                    </button>
                  </div>
                  <div className="filter-category">
                    <label>
                      <span className="filter-category-left">
                        <input type="checkbox" />
                        Bedroom
                      </span>
                      <span>26</span>
                    </label>
                    <label>
                      <span className="filter-category-left">
                        <input type="checkbox" />
                        Dining Room
                      </span>
                      <span>24</span>
                    </label>
                    <label>
                      <span className="filter-category-left">
                        <input type="checkbox" />
                        Lighting
                      </span>
                      <span>28</span>
                    </label>
                    <label>
                      <span className="filter-category-left">
                        <input type="checkbox" />
                        Office
                      </span>
                      <span>18</span>
                    </label>
                    <label>
                      <span className="filter-category-left">
                        <input type="checkbox" defaultChecked />
                        Tables &amp; Desks
                      </span>
                      <span>29</span>
                    </label>
                  </div>
                </div>
                {/* =================================================
           AVAILABILITY
      ================================================= */}
                <div className="filter-box">
                  <div className="filter-header">
                    <h4>
                      <i className="bi bi-chevron-up" />
                      &nbsp; AVAILABILITY
                    </h4>
                    <button className="reset-filter">
                      RESET
                    </button>
                  </div>
                  <div className="availability-list">
                    <div className="availability-item">
                      <div className="availability-left">
                        <input type="checkbox" defaultChecked />
                        <span>
                          In stock
                        </span>
                      </div>
                      <span>(29)</span>
                    </div>
                    <div className="availability-item">
                      <div className="availability-left">
                        <input type="checkbox" />
                        <span>
                          Out of stock
                        </span>
                      </div>
                      <span>(0)</span>
                    </div>
                  </div>
                </div>
                {/* =================================================
           PRICE
      ================================================= */}
                <div className="filter-box">
                  <div className="filter-header">
                    <h4>
                      <i className="bi bi-chevron-up" />
                      &nbsp; PRICE
                    </h4>
                    <button className="reset-filter">
                      RESET
                    </button>
                  </div>
                  <div className="price-range">
                    <span className="price-circle left" />
                    <span className="price-circle right" />
                  </div>
                  <div className="price-scale">
                    <span>0</span>
                    <span>75</span>
                    <span>150</span>
                    <span>225</span>
                    <span>300</span>
                  </div>
                  <div className="price-input-row">
                    <input type="number" className="price-input" defaultValue={0} />
                    <span>−</span>
                    <input type="number" className="price-input" defaultValue={300} />
                  </div>
                </div>
                {/* =================================================
           BRAND
      ================================================= */}
                <div className="filter-box">
                  <div className="filter-header">
                    <h4>
                      <i className="bi bi-chevron-up" />
                      &nbsp; BRAND
                    </h4>
                    <button className="reset-filter">
                      RESET
                    </button>
                  </div>
                  <div className="filter-category">
                    <label>
                      <span className="filter-category-left">
                        <input type="checkbox" />
                        Nov Minicom
                      </span>
                      <span>29</span>
                    </label>
                    <label>
                      <span className="filter-category-left">
                        <input type="checkbox" />
                        Modern Home
                      </span>
                      <span>12</span>
                    </label>
                  </div>
                </div>
              </aside>
              {/* =================================================
       PRODUCTS
  ================================================= */}
              <main className="col-lg-9 products-area">
                <div className="product-grid" id="productGrid">
                  {/* =================================================
               PRODUCT 1
          ================================================= */}
                  <article className="product-card">
                    <div className="product-image">
                      <span className="discount-badge">
                        -3%
                      </span>
                      <div className="product-actions">
                        <button className="action-button" title="Wishlist">
                          <i className="bi bi-heart" />
                        </button>
                        <button className="action-button" title="Quick View">
                          <i className="bi bi-eye" />
                        </button>
                      </div>
                      <img src="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=85" alt="Wooden Office Desk" />
                      <span className="quick-label">
                        QUICK VIEW
                      </span>
                      <button className="cart-button" title="Add to cart">
                        <i className="bi bi-bag" />
                      </button>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">
                        Wooden Office Desk With Drawers Open Storage
                      </h3>
                      <div className="product-price">
                        <span className="current-price">
                          $140.00
                        </span>
                        <span className="old-price">
                          $145.00
                        </span>
                      </div>
                      <div className="product-rating">
                        ★★★★★
                      </div>
                    </div>
                  </article>
                  {/* =================================================
               PRODUCT 2
          ================================================= */}
                  <article className="product-card">
                    <div className="product-image">
                      <div className="product-actions">
                        <button className="action-button">
                          <i className="bi bi-heart" />
                        </button>
                        <button className="action-button">
                          <i className="bi bi-eye" />
                        </button>
                      </div>
                      <img src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=900&q=85" alt="Wooden Chair" />
                      <span className="quick-label">
                        QUICK VIEW
                      </span>
                      <button className="cart-button">
                        <i className="bi bi-bag" />
                      </button>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">
                        Premium Solid Wood Chair With Comfortable Design
                      </h3>
                      <div className="product-price">
                        <span className="current-price">
                          $79.00
                        </span>
                      </div>
                      <div className="product-rating">
                        ★★★★★
                      </div>
                    </div>
                  </article>
                  {/* =================================================
               PRODUCT 3
          ================================================= */}
                  <article className="product-card">
                    <div className="product-image">
                      <div className="product-actions">
                        <button className="action-button">
                          <i className="bi bi-heart" />
                        </button>
                        <button className="action-button">
                          <i className="bi bi-eye" />
                        </button>
                      </div>
                      <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85" alt="Wooden Furniture" />
                      <span className="quick-label">
                        QUICK VIEW
                      </span>
                      <button className="cart-button">
                        <i className="bi bi-bag" />
                      </button>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">
                        Classic Wooden Nightstand With Dual Storage Drawers
                      </h3>
                      <div className="product-price">
                        <span className="current-price">
                          $99.00
                        </span>
                      </div>
                      <div className="product-rating">
                        ★★★★★
                      </div>
                    </div>
                  </article>
                  {/* =================================================
               PRODUCT 4
          ================================================= */}
                  <article className="product-card">
                    <div className="product-image">
                      <div className="product-actions">
                        <button className="action-button">
                          <i className="bi bi-heart" />
                        </button>
                        <button className="action-button">
                          <i className="bi bi-eye" />
                        </button>
                      </div>
                      <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85" alt="Lounge Chair" />
                      <span className="quick-label">
                        QUICK VIEW
                      </span>
                      <button className="cart-button">
                        <i className="bi bi-bag" />
                      </button>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">
                        Modern Lounge Chair With Premium Wooden Finish
                      </h3>
                      <div className="product-price">
                        <span className="current-price">
                          $189.00
                        </span>
                      </div>
                      <div className="product-rating">
                        ★★★★★
                      </div>
                    </div>
                  </article>
                  {/* =================================================
               PRODUCT 5
          ================================================= */}
                  <article className="product-card">
                    <div className="product-image">
                      <div className="product-actions">
                        <button className="action-button">
                          <i className="bi bi-heart" />
                        </button>
                        <button className="action-button">
                          <i className="bi bi-eye" />
                        </button>
                      </div>
                      <img src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=900&q=85" alt="Round Wooden Table" />
                      <span className="quick-label">
                        QUICK VIEW
                      </span>
                      <button className="cart-button">
                        <i className="bi bi-bag" />
                      </button>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">
                        Minimal Round Wooden Side Table
                      </h3>
                      <div className="product-price">
                        <span className="current-price">
                          $89.00
                        </span>
                      </div>
                      <div className="product-rating">
                        ★★★★★
                      </div>
                    </div>
                  </article>
                  {/* =================================================
               PRODUCT 6
          ================================================= */}
                  <article className="product-card">
                    <div className="product-image">
                      <div className="product-actions">
                        <button className="action-button">
                          <i className="bi bi-heart" />
                        </button>
                        <button className="action-button">
                          <i className="bi bi-eye" />
                        </button>
                      </div>
                      <img src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=85" alt="Wooden Side Table" />
                      <span className="quick-label">
                        QUICK VIEW
                      </span>
                      <button className="cart-button">
                        <i className="bi bi-bag" />
                      </button>
                    </div>
                    <div className="product-info">
                      <h3 className="product-name">
                        Natural Solid Wood Side Table
                      </h3>
                      <div className="product-price">
                        <span className="current-price">
                          $119.00
                        </span>
                      </div>
                      <div className="product-rating">
                        ★★★★★
                      </div>
                    </div>
                  </article>
                </div>
              </main>
            </div>
          </div></section>
        {/* =====================================================
     MOBILE FILTER OFFCANVAS
===================================================== */}
        <div className="offcanvas offcanvas-start mobile-filter-drawer" tabIndex={-1} id="filterDrawer">
          <div className="offcanvas-header mobile-filter-header">
            <h5 className="offcanvas-title">
              FILTER BY
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas">
            </button>
          </div>
          <div className="offcanvas-body mobile-filter-body">
            {/* Categories */}
            <div className="drawer-filter-title">
              CATEGORIES
            </div>
            <div className="drawer-category">
              <label>
                <span className="drawer-category-left">
                  <input type="checkbox" />
                  Bedroom
                </span>
                <span>26</span>
              </label>
              <label>
                <span className="drawer-category-left">
                  <input type="checkbox" />
                  Dining Room
                </span>
                <span>24</span>
              </label>
              <label>
                <span className="drawer-category-left">
                  <input type="checkbox" />
                  Lighting
                </span>
                <span>28</span>
              </label>
              <label>
                <span className="drawer-category-left">
                  <input type="checkbox" />
                  Office
                </span>
                <span>18</span>
              </label>
              <label>
                <span className="drawer-category-left">
                  <input type="checkbox" defaultChecked />
                  Tables &amp; Desks
                </span>
                <span>29</span>
              </label>
            </div>
            {/* Availability */}
            <div className="drawer-filter-title">
              AVAILABILITY
            </div>
            <div className="drawer-category">
              <label>
                <span className="drawer-category-left">
                  <input type="checkbox" defaultChecked />
                  In stock
                </span>
                <span>29</span>
              </label>
              <label>
                <span className="drawer-category-left">
                  <input type="checkbox" />
                  Out of stock
                </span>
                <span>0</span>
              </label>
            </div>
            {/* Price */}
            <div className="drawer-filter-title">
              PRICE
            </div>
            <div className="price-range">
              <span className="price-circle left" />
              <span className="price-circle right" />
            </div>
            <div className="price-input-row">
              <input className="price-input" defaultValue={0} />
              <span>−</span>
              <input className="price-input" defaultValue={300} />
            </div>
            <br />
            {/* Brand */}
            <div className="drawer-filter-title">
              BRAND
            </div>
            <div className="drawer-category">
              <label>
                <span className="drawer-category-left">
                  <input type="checkbox" />
                  Nov Minicom
                </span>
                <span>29</span>
              </label>
              <label>
                <span className="drawer-category-left">
                  <input type="checkbox" />
                  Modern Home
                </span>
                <span>12</span>
              </label>
            </div>
            <button className="drawer-clear" id="clearMobile">
              <i className="bi bi-trash3" />
              &nbsp; CLEAR ALL
            </button>
          </div>
        </div>
        {/* Space after overlapping cards */}
        <div className="collection-after" />
      </div>

    <Footer />
    <MobileNav />
    </>
  )
}

export default Shop