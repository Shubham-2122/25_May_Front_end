/* =========================================================
   FURNIMATE E-COMMERCE CORE LOGIC
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       0. AUTO ACTIVE NAVBAR LINK DETECTION
    ====================================================== */
    const currentPath = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll(".desktop-navigation a.nav-link, .mobile-navigation > a, .mobile-bottom-nav a");

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;
        const pageName = href.replace("./", "").replace("/", "").toLowerCase();

        if (
            (pageName === "index.html" && (currentPath.endsWith("index.html") || currentPath.endsWith("/") || currentPath === "")) ||
            (pageName !== "index.html" && pageName !== "" && currentPath.includes(pageName))
        ) {
            link.classList.add("active");
        }
    });

    /* =====================================================
       1. DYNAMIC PRODUCT HOVER ACTIONS
    ====================================================== */
    document.querySelectorAll(".product-image").forEach(function (image) {
        if (!image.querySelector(".product-hover-actions") && !image.querySelector(".product-actions")) {
            const actions = document.createElement("div");
            actions.className = "product-hover-actions";
            actions.innerHTML = `
                <button type="button" aria-label="Add to wishlist" class="hover-action-btn">
                    <i class="fa-regular fa-star"></i>
                </button>
                <button type="button" aria-label="Quick view" class="hover-action-btn">
                    <i class="fa-regular fa-eye"></i>
                </button>
                <button type="button" class="hover-action-btn product-cart-action" aria-label="Add to cart">
                    <i class="fa-solid fa-bag-shopping"></i>
                </button>
            `;
            image.appendChild(actions);
        }
    });

    /* =====================================================
       2. CATEGORIES DROPDOWN MENU
    ====================================================== */
    const categoriesBtn = document.getElementById("categoriesBtn");
    const categoriesDropdown = document.getElementById("categoriesDropdown");

    if (categoriesBtn && categoriesDropdown) {
        categoriesBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            categoriesBtn.classList.toggle("active");
            categoriesDropdown.classList.toggle("show");
        });

        document.addEventListener("click", function (event) {
            if (!categoriesDropdown.contains(event.target) && !categoriesBtn.contains(event.target)) {
                categoriesBtn.classList.remove("active");
                categoriesDropdown.classList.remove("show");
            }
        });
    }

    /* =====================================================
       3. MOBILE NAVIGATION DRAWER TOGGLE
    ====================================================== */
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileNavigation = document.getElementById("mobileNavigation");

    if (mobileMenuBtn && mobileNavigation) {
        mobileMenuBtn.addEventListener("click", function () {
            mobileNavigation.classList.toggle("show");
            const icon = mobileMenuBtn.querySelector("i");
            if (icon) {
                if (mobileNavigation.classList.contains("show")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });

        // Close mobile drawer on link click
        const mobileLinks = document.querySelectorAll(".mobile-navigation a");
        mobileLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                mobileNavigation.classList.remove("show");
                const icon = mobileMenuBtn.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }

    /* =====================================================
       4. MOBILE DROPDOWNS
    ====================================================== */
    const mobileDropdownButtons = document.querySelectorAll(".mobile-dropdown-btn");
    mobileDropdownButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const parent = button.closest(".mobile-item");
            if (!parent) return;

            document.querySelectorAll(".mobile-item").forEach(function (item) {
                if (item !== parent) {
                    item.classList.remove("active");
                }
            });
            parent.classList.toggle("active");
        });
    });

    /* =====================================================
       5. SEARCH BOX FUNCTIONALITY
    ====================================================== */
    const searchButton = document.querySelector(".search-box button");
    const searchInput = document.querySelector(".search-box input");

    if (searchButton && searchInput) {
        searchButton.addEventListener("click", function () {
            const keyword = searchInput.value.trim();
            if (keyword !== "") {
                console.log("Searching for:", keyword);
            } else {
                searchInput.focus();
            }
        });

        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchButton.click();
            }
        });
    }

    /* =====================================================
       6. ESCAPE KEY CONTROLS
    ====================================================== */
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            if (categoriesBtn) categoriesBtn.classList.remove("active");
            if (categoriesDropdown) categoriesDropdown.classList.remove("show");
            if (mobileNavigation) mobileNavigation.classList.remove("show");
            mobileDropdownButtons.forEach(function (button) {
                const parent = button.closest(".mobile-item");
                if (parent) parent.classList.remove("active");
            });
        }
    });

    /* =====================================================
       7. COLLECTION CARDS INTERACTION
    ====================================================== */
    const collectionCards = document.querySelectorAll(".collection-card");
    collectionCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            if (window.innerWidth > 575) {
                collectionCards.forEach(item => item.classList.remove("active"));
                this.classList.add("active");
            }
        });

        card.addEventListener("mouseleave", function () {
            if (window.innerWidth > 575) {
                collectionCards.forEach(item => item.classList.remove("active"));
            }
        });
    });

    /* =====================================================
       8. BANNER CARDS MOBILE TOGGLE
    ====================================================== */
    const bannerCards = document.querySelectorAll(".banner-card");
    bannerCards.forEach(card => {
        card.addEventListener("click", function () {
            if (window.innerWidth <= 575) {
                bannerCards.forEach(otherCard => {
                    if (otherCard !== this) otherCard.classList.remove("active");
                });
                this.classList.toggle("active");
            }
        });
    });

    /* =====================================================
       9. FLASH SALE COUNTDOWN TIMER
    ====================================================== */
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl && hoursEl && minutesEl && secondsEl) {
        const saleEndDate = new Date();
        saleEndDate.setDate(saleEndDate.getDate() + 4);

        function updateCountdown() {
            const now = new Date();
            const difference = saleEndDate.getTime() - now.getTime();

            if (difference <= 0) {
                daysEl.textContent = "00";
                hoursEl.textContent = "00";
                minutesEl.textContent = "00";
                secondsEl.textContent = "00";
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / (1000 * 60)) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            daysEl.textContent = String(days).padStart(2, "0");
            hoursEl.textContent = String(hours).padStart(2, "0");
            minutesEl.textContent = String(minutes).padStart(2, "0");
            secondsEl.textContent = String(seconds).padStart(2, "0");
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});

/* =========================================================
   JQUERY & SLICK CAROUSEL INITIALIZATIONS
========================================================= */
$(document).ready(function () {

    /* --- GOTTA HAVE IT PRODUCT SLIDER --- */
    if ($('.gotta-slider').length) {
        $('.gotta-slider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            dots: false,
            autoplay: false,
            speed: 500,
            swipe: true,
            draggable: true,
            touchMove: true,
            prevArrow: $('.gotta-prev'),
            nextArrow: $('.gotta-next'),
            responsive: [
                { breakpoint: 1300, settings: { slidesToShow: 4 } },
                { breakpoint: 1100, settings: { slidesToShow: 3 } },
                { breakpoint: 900, settings: { slidesToShow: 2 } },
                { breakpoint: 575, settings: { slidesToShow: 1 } }
            ]
        });
    }

    $('.gotta-tab').on('click', function () {
        $('.gotta-tab').removeClass('active');
        $(this).addClass('active');
    });

    /* --- FEATURED PRODUCT SLIDER --- */
    if ($('.product-main-slider').length) {
        $('.product-main-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: true,
            speed: 450,
            fade: true,
            cssEase: 'linear',
            prevArrow: $('.gallery-prev'),
            nextArrow: $('.gallery-next'),
            swipe: true,
            touchMove: true
        });

        $('.thumbnail').on('click', function () {
            const slideIndex = $(this).data('slide');
            $('.product-main-slider').slick('slickGoTo', slideIndex);
            $('.thumbnail').removeClass('active');
            $(this).addClass('active');
        });

        $('.product-main-slider').on('afterChange', function (event, slick, currentSlide) {
            $('.thumbnail').removeClass('active');
            $('.thumbnail[data-slide="' + currentSlide + '"]').addClass('active');
        });
    }

    /* --- QUANTITY COUNTER --- */
    let quantity = 1;
    $('.qty-plus').on('click', function () {
        quantity++;
        $('.quantity').text(quantity);
    });

    $('.qty-minus').on('click', function () {
        if (quantity > 1) {
            quantity--;
            $('.quantity').text(quantity);
        }
    });

    /* --- WISHLIST TOGGLE --- */
    $('.wishlist-btn').on('click', function () {
        $(this).find('i').toggleClass('bi-star bi-star-fill');
    });

    /* --- CONTINUOUS BRAND SLIDER --- */
    if ($('.continuous-slider').length) {
        $('.continuous-slider').slick({
            infinite: true,
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 7000,
            pauseOnHover: false,
            pauseOnFocus: false,
            cssEase: "linear",
            slidesToShow: 5.2,
            slidesToScroll: 1,
            swipe: true,
            draggable: true,
            responsive: [
                { breakpoint: 1300, settings: { slidesToShow: 4.5 } },
                { breakpoint: 1100, settings: { slidesToShow: 4 } },
                { breakpoint: 900, settings: { slidesToShow: 3 } },
                { breakpoint: 575, settings: { slidesToShow: 2 } },
                { breakpoint: 380, settings: { slidesToShow: 1.3 } }
            ]
        });
    }

    /* --- SHOP PAGE CATEGORY SLIDER (AUTO INFINITE SLIDE) --- */
    if ($('.category-slider').length) {
        $('.category-slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2200,
            speed: 600,
            cssEase: 'ease-in-out',
            arrows: false,
            dots: false,
            pauseOnHover: true,
            pauseOnFocus: false,
            swipe: true,
            draggable: true,
            responsive: [
                { breakpoint: 1301, settings: { slidesToShow: 5 } },
                { breakpoint: 1001, settings: { slidesToShow: 4 } },
                { breakpoint: 901, settings: { slidesToShow: 3 } },
                { breakpoint: 576, settings: { slidesToShow: 2 } }
            ]
        });
    }
});


$(document).ready(function () {

    $('.team-slider').slick({

        /* Desktop */
        slidesToShow: 6,
        slidesToScroll: 1,

        /* Continuous movement */
        infinite: true,

        /* Automatic sliding */
        autoplay: true,
        autoplaySpeed: 1800,

        /* Smooth movement */
        speed: 700,

        /* No arrows / dots */
        arrows: false,
        dots: false,

        /* Pause on hover */
        pauseOnHover: false,
        pauseOnFocus: false,

        /* Mobile swipe */
        swipe: true,
        touchMove: true,

        /* Responsive */
        responsive: [

            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5
                }
            },

            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 4
                }
            },

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }

        ]

    });

});



const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

const formTitle = document.getElementById("formTitle");
const formSubtitle = document.getElementById("formSubtitle");


/* =========================
   SHOW LOGIN
========================== */

function showLogin() {

    loginForm.style.display = "block";
    signupForm.style.display = "none";

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    formTitle.textContent = "Sign in to your account";

    formSubtitle.textContent =
        "Enter your details below to continue shopping.";

}


/* =========================
   SHOW SIGNUP
========================== */

function showSignup() {

    loginForm.style.display = "none";
    signupForm.style.display = "block";

    loginTab.classList.remove("active");
    signupTab.classList.add("active");

    formTitle.textContent = "Create your account";

    formSubtitle.textContent =
        "Join us and enjoy a better furniture shopping experience.";

}

/* =========================
   PASSWORD SHOW / HIDE
========================== */

function togglePassword(inputId, button) {

    const input = document.getElementById(inputId);

    const icon = button.querySelector("i");

    if (input.type === "password") {

        input.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    } else {

        input.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

    }

}


/* =========================
   LOGIN
========================== */

function loginUser(event) {

    event.preventDefault();

    const button =
        event.target.querySelector(".main-btn");

    const oldText = button.innerHTML;

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> SIGNING IN...';

    button.disabled = true;

    setTimeout(() => {

        button.innerHTML = oldText;

        button.disabled = false;

        alert("Login successful!");

        // Example:
        // window.location.href = "index.html";

    }, 1200);

}


/* =========================
   SIGNUP
========================== */

function signupUser(event) {

    event.preventDefault();

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;

    }

    const button =
        event.target.querySelector(".main-btn");

    const oldText = button.innerHTML;

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> CREATING...';

    button.disabled = true;

    setTimeout(() => {

        button.innerHTML = oldText;

        button.disabled = false;

        alert("Account created successfully!");

        showLogin();

    }, 1200);

}


/* =========================
   FORGOT PASSWORD
========================== */

function forgotPassword(event) {

    event.preventDefault();

    alert(
        "Password reset link will be sent to your email."
    );

}


/* =========================
   SOCIAL LOGIN
========================== */

function socialLogin(platform) {

    alert(
        platform + " login integration can be connected here."
    );

}




const contactForm =
    document.getElementById("contactForm");

const successMessage =
    document.getElementById("contactSuccess");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const button =
        contactForm.querySelector("button");


    /* Button change */

    button.innerHTML =
        'Message Sent <i class="fa-solid fa-check ms-2"></i>';


    /* Show success message */

    successMessage.style.display = "block";


    /* Reset form */

    contactForm.reset();


    /* Restore button */

    setTimeout(function () {

        button.innerHTML =
            'Send Message <i class="fa-solid fa-arrow-right ms-2"></i>';

        successMessage.style.display = "none";

    }, 4000);

});


const ctForm =
    document.getElementById("ctContactForm");

const ctSuccess =
    document.getElementById("ctSuccess");


ctForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const submitButton =
        ctForm.querySelector("button");


    /* Change button */

    submitButton.innerHTML =
        'Message Sent <i class="fa-solid fa-check ms-2"></i>';


    /* Show success */

    ctSuccess.style.display = "block";


    /* Clear form */

    ctForm.reset();


    /* Restore */

    setTimeout(function () {

        submitButton.innerHTML =
            'Send Message <i class="fa-solid fa-arrow-right ms-2"></i>';

        ctSuccess.style.display = "none";

    }, 4000);

});

