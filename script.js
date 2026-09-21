/* ========================================
   PRODUCT DATA
======================================== */
const products = [
    // Jordan Products
    {
        id: 'jordan-1',
        name: 'Air Jordan 1 ',
        category: 'jordan',
        price: 15959.62,
        image: 'images/airjordan1.jpg',
        description: 'Classic basketball sneaker with premium leather',
        rating: 5,
        featured: true,
        new: false
    },
    {
        id: 'jordan-2',
        name: 'Air Max',
        category: 'products',
        price: 21279.62,
        image: 'images/jordan-4.jpg',
        description: 'Iconic design with visible Air cushioning',
        rating: 5,
        featured: true,
        new: true
    },
    {
        id: 'jordan-3',
        name: 'Graphic Tees',
        category: 'Sports',
        price: 5319.62,
        image: 'images/jordan-11.jpg',
        description: 'Premium basketball performance shoe',
        rating: 5,
        featured: true,
        new: false
    },
    {
        id: 'jordan-4',
        name: 'Dunks',
        category: 'jordan',
        price: 15199.62,
        image: 'images/jordan-3.jpg',
        description: 'Classic silhouette with elephant print',
        rating: 5,
        featured: false,
        new: true
    },
    
    // Converse Products
    {
        id: 'converse-1',
        name: 'Converse Chuck Taylor All Star',
        category: 'converse',
        price: 18239.62,
        image: 'images/converse-1.jpg',
        description: 'Timeless canvas sneaker',
        rating: 4,
        featured: true,
        new: false
    },
    {
        id: 'converse-2',
        name: 'Converse Chuck 70',
        category: 'converse',
        price: 13679.62,
        image: 'images/converse-70.jpg',
        description: 'Premium version of the classic',
        rating: 5,
        featured: true,
        new: false
    },
    {
        id: 'converse-3',
        name: 'Converse One Star',
        category: 'converse',
        price: 18239.62,
        image: 'images/converse-one.jpg',
        description: 'Retro basketball-inspired sneaker',
        rating: 4,
        featured: false,
        new: true
    },
    {
        id: 'converse-4',
        name: 'Converse Run Star',
        category: 'converse',
        price: 16719.62,
        image: 'images/converse-run.jpg',
        description: 'Modern platform sneaker',
        rating: 4,
        featured: false,
        new: true
    },
    
    // Men's Products
    {
        id: 'men-1',
        name: "Men's Air Max 90",
        category: 'men',
        price: 25079.62,
        image: 'images/men-airmax.jpg',
        description: 'Classic running sneaker for men',
        rating: 5,
        featured: true,
        new: false
    },
    {
        id: 'men-2',
        name: "Men's Running Shoes",
        category: 'men',
        price: 19759.62,
        image: 'images/men-running.jpg',
        description: 'Lightweight performance running shoe',
        rating: 4,
        featured: false,
        new: true
    },
    {
        id: 'men-3',
        name: "Men's Basketball Sneaker",
        category: 'men',
        price: 14439.62,
        image: 'images/men-basketball.jpg',
        description: 'High-top basketball shoe',
        rating: 5,
        featured: true,
        new: false
    },
    {
        id: 'men-4',
        name: "Men's Training Shoes",
        category: 'men',
        price: 10639.62,
        image: 'images/men-training.jpg',
        description: 'Versatile training footwear',
        rating: 4,
        featured: false,
        new: false
    },
    
    // Women's Products
    {
        id: 'women-1',
        name: "Women's Air Force 1",
        category: 'women',
        price: 31159.62,
        image: 'images/women-af1.jpg',
        description: 'Classic lifestyle sneaker',
        rating: 5,
        featured: true,
        new: false
    },
    {
        id: 'women-2',
        name: "Women's Running Shoes",
        category: 'women',
        price: 23559.62,
        image: 'images/women-running.jpg',
        description: 'Lightweight running shoe for women',
        rating: 4,
        featured: false,
        new: true
    },
    {
        id: 'women-3',
        name: "Women's Lifestyle Sneaker",
        category: 'women',
        price: 23519.62,
        image: 'images/women-lifestyle.jpg',
        description: 'Comfortable everyday sneaker',
        rating: 4,
        featured: true,
        new: false
    },
    {
        id: 'women-4',
        name: "Women's Training Shoes",
        category: 'women',
        price: 13679.62,
        image: 'images/women-training.jpg',
        description: 'Gym and training footwear',
        rating: 4,
        featured: false,
        new: true
    },
    
    // Sports Products
    {
        id: 'sports-1',
        name: 'Running Performance Shoe',
        category: 'sports',
        subcategory: 'running',
        price: 19759.62,
        image: 'images/sports-running.jpg',
        description: 'Professional running shoe',
        rating: 5,
        featured: true,
        new: false
    },
    {
        id: 'sports-2',
        name: 'Basketball Elite Shoe',
        category: 'sports',
        subcategory: 'basketball',
        price: 14439.62,
        image: 'images/sports-basketball.jpg',
        description: 'High-performance basketball shoe',
        rating: 5,
        featured: true,
        new: true
    },
    {
        id: 'sports-3',
        name: 'Football Cleats',
        category: 'sports',
        subcategory: 'football',
        price: 37239.62,
        image: 'images/sports-football.jpg',
        description: 'Professional football cleats',
        rating: 4,
        featured: false,
        new: false
    },
    {
        id: 'sports-4',
        name: 'Training Cross Trainer',
        category: 'sports',
        subcategory: 'training',
        price: 9119.62,
        image: 'images/sports-training.jpg',
        description: 'Multi-sport training shoe',
        rating: 4,
        featured: false,
        new: true
    },
    {
        id: 'sports-5',
        name: 'Gym Training Shoes',
        category: 'sports',
        subcategory: 'gym',
        price: 18239.62,
        image: 'images/sports-gym.jpg',
        description: 'Versatile gym footwear',
        rating: 4,
        featured: false,
        new: false
    },
    
    // Back to School Products
    {
        id: 'school-1',
        name: 'School Sneaker Classic',
        category: 'school',
        price: 16719.62,
        image: 'images/school-sneaker.jpg',
        description: 'Comfortable everyday school shoe',
        rating: 4,
        featured: true,
        new: false
    },
    {
        id: 'school-2',
        name: 'Everyday Canvas Shoe',
        category: 'school',
        price: 45,
        image: 'images/school-canvas.jpg',
        description: 'Durable canvas sneaker',
        rating: 4,
        featured: false,
        new: false
    },
    {
        id: 'school-3',
        name: 'School Backpack',
        category: 'school',
        price: 6839.62,
        image: 'images/school-backpack.jpg',
        description: 'Spacious backpack for school',
        rating: 5,
        featured: true,
        new: true
    },
    {
        id: 'school-4',
        name: 'Student Accessories Set',
        category: 'school',
        price: 9119.62,
        image: 'images/school-accessories.jpg',
        description: 'Essential school accessories',
        rating: 4,
        featured: false,
        new: false
    },
    
    // Nike SKIMS Products
    {
        id: 'skims-1',
        name: 'SKIMS Fashion Sneaker',
        category: 'skims',
        price: 25079.62,
        image: 'images/skims-fashion.jpg',
        description: 'Modern lifestyle sneaker',
        rating: 5,
        featured: true,
        new: true
    },
    {
        id: 'skims-2',
        name: 'SKIMS Sportswear Top',
        category: 'skims',
        price: 11399.62,
        image: 'images/skims-top.jpg',
        description: 'Comfortable athletic top',
        rating: 4,
        featured: false,
        new: true
    },
    {
        id: 'skims-3',
        name: 'SKIMS Lifestyle Pants',
        category: 'skims',
        price: 19759.62,
        image: 'images/skims-pants.jpg',
        description: 'Relaxed fit lifestyle pants',
        rating: 4,
        featured: true,
        new: false
    },
    {
        id: 'skims-4',
        name: 'SKIMS Athletic Set',
        category: 'skims',
        price: 21279.24,
        image: 'images/skims-set.jpg',
        description: 'Complete athletic wear set',
        rating: 5,
        featured: true,
        new: true
    },
    
    // Sale Products
    {
        id: 'sale-1',
        name: 'Clearance Running Shoe',
        category: 'sale',
        price: 19759.62,
        originalPrice: 100,
        image: 'images/sale-running.jpg',
        description: 'Discounted performance runner',
        rating: 4,
        featured: false,
        new: false
    },
    {
        id: 'sale-2',
        name: 'Discount Basketball Shoe',
        category: 'sale',
        price: 14439.62,
        originalPrice: 130,
        image: 'images/sale-basketball.jpg',
        description: 'Great deal on basketball footwear',
        rating: 4,
        featured: false,
        new: false
    },
    {
        id: 'sale-3',
        name: 'Outlet Lifestyle Sneaker',
        category: 'sale',
        price: 12159.62,
        originalPrice: 90,
        image: 'images/sale-lifestyle.jpg',
        description: 'Affordable everyday sneaker',
        rating: 4,
        featured: false,
        new: false
    }
];

function formatPrice(price) {
    return `KSh ${price.toLocaleString('en-KE')}`;
}

/* ========================================
   SHOPPING CART
======================================== */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
    renderCart();
}

function updateCartCounter() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => {
        el.textContent = totalItems;
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    showToast('Product added to cart!');
    openCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
    }
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmountElement = document.querySelector('.total-amount');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart-message">
                <p>Your cart is empty.</p>
                <p>Start shopping to add your favorite products.</p>
            </div>
        `;
        if (totalAmountElement) {
            totalAmountElement.textContent = 'KSh 0';
        }
        return;
    }
    
    let total = 0;
    
    cartItemsContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <span class="product-image-placeholder">Image</span>
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                   <p class="cart-item-price">KSh ${item.price.toLocaleString()}</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn decrease-qty" data-id="${item.id}">-</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button class="quantity-btn increase-qty" data-id="${item.id}">+</button>
                        <button class="remove-item-btn" data-id="${item.id}">Remove</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    if (totalAmountElement) {
       totalAmountElement.textContent = `KSh ${total.toLocaleString()}`;
    }
    
    // Attach event listeners
    document.querySelectorAll('.decrease-qty').forEach(btn => {
        btn.addEventListener('click', (e) => {
            updateQuantity(e.target.dataset.id, -1);
        });
    });
    
    document.querySelectorAll('.increase-qty').forEach(btn => {
        btn.addEventListener('click', (e) => {
            updateQuantity(e.target.dataset.id, 1);
        });
    });
    
    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            removeFromCart(e.target.dataset.id);
        });
    });
}

function openCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    if (cartDrawer) {
        cartDrawer.classList.add('active');
        document.body.classList.add('menu-open');
    }
}

function closeCart() {
    const cartDrawer = document.getElementById('cart-drawer');
    if (cartDrawer) {
        cartDrawer.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
}

/* ========================================
   MOBILE NAVIGATION
======================================== */
function openMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    
    if (mobileNav && hamburgerBtn) {
        mobileNav.classList.add('active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
        document.body.classList.add('menu-open');
    }
}

function closeMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    
    if (mobileNav && hamburgerBtn) {
        mobileNav.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    }
}

/* ========================================
   SEARCH FUNCTIONALITY
======================================== */
function openSearch() {
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.querySelector('.search-input');
    
    if (searchOverlay) {
        searchOverlay.classList.add('active');
        document.body.classList.add('menu-open');
        if (searchInput) {
            searchInput.focus();
        }
    }
}

function closeSearch() {
    const searchOverlay = document.getElementById('search-overlay');
    const searchResults = document.getElementById('search-results');
    
    if (searchOverlay) {
        searchOverlay.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
    
    if (searchResults) {
        searchResults.innerHTML = '';
    }
}

function performSearch(query) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;
    
    if (!query || query.trim() === '') {
        searchResults.innerHTML = '';
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        (product.description && product.description.toLowerCase().includes(searchTerm))
    );
    
    if (filteredProducts.length === 0) {
        searchResults.innerHTML = `
            <div class="no-results">
                <p>No products found for "${query}"</p>
                <p>Try searching for: Jordan, Converse, Running, etc.</p>
            </div>
        `;
        return;
    }
    
    searchResults.innerHTML = filteredProducts.slice(0, 10).map(product => `
        <div class="search-result-item" data-id="${product.id}">
            <strong>${product.name}</strong><br>
           <small>KSh ${product.price.toLocaleString()} - ${product.category}</small>
        </div>
    `).join('');
    
    // Attach click listeners to search results
    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const productId = e.currentTarget.dataset.id;
            closeSearch();
            // Could navigate to product page or add to cart
            addToCart(productId);
        });
    });
}

/* ========================================
   PRODUCT RENDERING
======================================== */
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <span class="product-image-placeholder">${product.name.split(' ')[0]}</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
                <p class="product-price">KSh ${product.price.toLocaleString()}</p>
                <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;
}

function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (productList.length === 0) {
        container.innerHTML = '<p>No products available.</p>';
        return;
    }
    
    container.innerHTML = productList.map(product => createProductCard(product)).join('');
    
    // Attach add to cart listeners
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            addToCart(e.target.dataset.id);
        });
    });
}

function renderAllProducts() {
    const container = document.getElementById('all-products');
    if (!container) return;
    
    container.innerHTML = products.map(product => createProductCard(product)).join('');
    
    // Attach add to cart listeners
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            addToCart(e.target.dataset.id);
        });
    });
    
    updateProductsCount();
}

function updateProductsCount() {
    const countElement = document.getElementById('products-count');
    if (countElement) {
        countElement.textContent = `Showing ${products.length} products`;
    }
}

/* ========================================
   PRODUCT FILTERING & SORTING
======================================== */
function filterProducts(category) {
    const container = document.getElementById('all-products');
    if (!container) return;
    
    let filtered = products;
    
    if (category && category !== 'all') {
        filtered = products.filter(product => 
            product.category === category || 
            (product.subcategory && product.subcategory === category)
        );
    }
    
    container.innerHTML = filtered.map(product => createProductCard(product)).join('');
    
    // Attach add to cart listeners
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            addToCart(e.target.dataset.id);
        });
    });
    
    updateProductsCount(filtered.length);
}

function sortProducts(sortType) {
    const container = document.getElementById('all-products');
    if (!container) return;
    
    let sorted = [...products];
    
    switch(sortType) {
        case 'price-low':
            sorted.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.price - a.price);
            break;
        case 'newest':
            sorted = sorted.filter(p => p.new).concat(sorted.filter(p => !p.new));
            break;
        case 'name-az':
            sorted.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Featured - keep original order
            break;
    }
    
    container.innerHTML = sorted.map(product => createProductCard(product)).join('');
    
    // Attach add to cart listeners
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            addToCart(e.target.dataset.id);
        });
    });
}

function searchProductsOnPage(query) {
    const container = document.getElementById('all-products');
    if (!container) return;
    
    if (!query || query.trim() === '') {
        renderAllProducts();
        return;
    }
    
    const searchTerm = query.toLowerCase().trim();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        (product.description && product.description.toLowerCase().includes(searchTerm))
    );
    
    container.innerHTML = filtered.map(product => createProductCard(product)).join('');
    
    // Attach add to cart listeners
    container.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            addToCart(e.target.dataset.id);
        });
    });
    
    updateProductsCount(filtered.length);
}

/* ========================================
   FAQ ACCORDION
======================================== */
function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isExpanded = question.getAttribute('aria-expanded') === 'true';
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                q.setAttribute('aria-expanded', 'false');
                q.nextElementSibling.classList.remove('active');
            });
            
            // Toggle current FAQ
            if (!isExpanded) {
                question.setAttribute('aria-expanded', 'true');
                answer.classList.add('active');
            }
        });
    });
}

/* ========================================
   FORM VALIDATION
======================================== */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const subject = document.getElementById('contact-subject').value.trim();
        const message = document.getElementById('contact-message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showToast('Please fill in all required fields.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        showToast('Message sent successfully! We\'ll get back to you soon.');
        contactForm.reset();
    });
}

function initCareersForm() {
    const careersForm = document.getElementById('careers-form');
    if (!careersForm) return;
    
    careersForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const position = document.getElementById('position').value;
        const coverLetter = document.getElementById('cover-letter').value.trim();
        
        if (!name || !email || !position || !coverLetter) {
            showToast('Please fill in all required fields.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        showToast('Application submitted successfully! We\'ll review your application.');
        careersForm.reset();
    });
}

function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('.newsletter-input');
        const email = emailInput.value.trim();
        
        if (!email) {
            showToast('Please enter your email address.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        showToast('Thank you for subscribing! Check your email for confirmation.');
        newsletterForm.reset();
    });
}

/* ========================================
   TOAST NOTIFICATION
======================================== */
function showToast(message) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('active');
    }, 10);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('active');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

/* ========================================
   SCROLL REVEAL ANIMATION
======================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.product-card, .category-card, .feature-card');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

/* ========================================
   PAGE-SPECIFIC PRODUCT RENDERING
======================================== */
function renderPageProducts() {
    // Featured products for home page
    const featuredProducts = products.filter(p => p.featured).slice(0, 4);
    renderProducts('featured-products', featuredProducts);
    
    // New arrivals
    const newProducts = products.filter(p => p.new).slice(0, 4);
    renderProducts('new-arrivals', newProducts);
    
    // Back to School page
    const schoolProducts = products.filter(p => p.category === 'school');
    renderProducts('school-sneakers', schoolProducts.slice(0, 2));
    renderProducts('everyday-shoes', schoolProducts.slice(2, 4));
    renderProducts('backpacks', schoolProducts.slice(2, 3));
    renderProducts('school-accessories', schoolProducts.slice(3, 4));
    
    // Jordan page
    const jordanProducts = products.filter(p => p.category === 'jordan');
    renderProducts('featured-jordan', jordanProducts.slice(0, 3));
    renderProducts('jordan-collection', jordanProducts);
    renderProducts('popular-jordan', jordanProducts.slice(0, 2));
    renderProducts('new-jordan', jordanProducts.filter(p => p.new));
    
    // Converse page
    const converseProducts = products.filter(p => p.category === 'converse');
    renderProducts('featured-converse', converseProducts.slice(0, 2));
    renderProducts('converse-sneakers', converseProducts);
    renderProducts('converse-clothing', []);
    renderProducts('converse-accessories', []);
    
    // Men page
    const menProducts = products.filter(p => p.category === 'men');
    renderProducts('men-sneakers', menProducts.slice(0, 2));
    renderProducts('men-clothing', []);
    renderProducts('men-sportswear', menProducts.slice(2, 4));
    renderProducts('men-accessories', []);
    renderProducts('men-featured', menProducts.filter(p => p.featured));
    renderProducts('men-new', menProducts.filter(p => p.new));
    
    // Women page
    const womenProducts = products.filter(p => p.category === 'women');
    renderProducts('women-sneakers', womenProducts.slice(0, 2));
    renderProducts('women-clothing', []);
    renderProducts('women-sportswear', womenProducts.slice(2, 4));
    renderProducts('women-accessories', []);
    renderProducts('women-featured', womenProducts.filter(p => p.featured));
    renderProducts('women-new', womenProducts.filter(p => p.new));
    
    // Nike SKIMS page
    const skimsProducts = products.filter(p => p.category === 'skims');
    renderProducts('skims-fashion', skimsProducts.slice(0, 2));
    renderProducts('skims-sportswear', skimsProducts.slice(2, 3));
    renderProducts('skims-lifestyle', skimsProducts.slice(1, 2));
    renderProducts('skims-featured', skimsProducts.filter(p => p.featured));
    
    // Sports page
    const sportsProducts = products.filter(p => p.category === 'sports');
    renderProducts('sports-running', sportsProducts.filter(p => p.subcategory === 'running'));
    renderProducts('sports-basketball', sportsProducts.filter(p => p.subcategory === 'basketball'));
    renderProducts('sports-football', sportsProducts.filter(p => p.subcategory === 'football'));
    renderProducts('sports-training', sportsProducts.filter(p => p.subcategory === 'training'));
    renderProducts('sports-gym', sportsProducts.filter(p => p.subcategory === 'gym'));
    renderProducts('sports-sportswear', []);
    renderProducts('sports-accessories', []);
    
    // Promotions page
    const saleProducts = products.filter(p => p.category === 'sale');
    renderProducts('sale-products', saleProducts);
    renderProducts('limited-offers', saleProducts.slice(0, 2));
    renderProducts('featured-deals', saleProducts);
    
    // Products page
    renderAllProducts();
}

/* ========================================
   EVENT LISTENERS & INITIALIZATION
======================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize cart
    updateCartCounter();
    renderCart();
    
    // Initialize mobile navigation
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', () => {
            const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
            if (isExpanded) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileNav = document.getElementById('mobile-nav');
        const hamburgerBtn = document.querySelector('.hamburger-btn');
        
        if (mobileNav && mobileNav.classList.contains('active') && 
            !mobileNav.contains(e.target) && 
            !hamburgerBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Close mobile menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMobileMenu();
            closeSearch();
            closeCart();
        }
    });
    
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-input');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', openSearch);
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', closeSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
        
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                performSearch(e.target.value);
            }
        });
    }
    
    // Cart functionality
    const cartBtn = document.querySelector('.cart-btn');
    const cartClose = document.querySelector('.cart-close');
    const cartOverlay = document.querySelector('.cart-overlay');
    const continueShoppingBtn = document.querySelector('.continue-shopping');
    
    if (cartBtn) {
        cartBtn.addEventListener('click', openCart);
    }
    
    if (cartClose) {
        cartClose.addEventListener('click', closeCart);
    }
    
    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCart);
    }
    
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', closeCart);
    }
    
    // Products page filtering and sorting
    const categoryFilter = document.getElementById('category-filter');
    const priceSort = document.getElementById('price-sort');
    const productsSearch = document.getElementById('products-search');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            filterProducts(e.target.value);
        });
    }
    
    if (priceSort) {
        priceSort.addEventListener('change', (e) => {
            sortProducts(e.target.value);
        });
    }
    
    if (productsSearch) {
        productsSearch.addEventListener('input', (e) => {
            searchProductsOnPage(e.target.value);
        });
    }
    
    // Initialize FAQ
    initFAQ();
    
    // Initialize forms
    initContactForm();
    initCareersForm();
    initNewsletterForm();
    
    // Render page-specific products
    renderPageProducts();
    
    // Initialize scroll reveal
    initScrollReveal();
    
    // Close cart on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && document.getElementById('cart-drawer')?.classList.contains('active')) {
            closeCart();
        }
    });
});

// Close overlays when clicking outside
window.addEventListener('click', (e) => {
    const searchOverlay = document.getElementById('search-overlay');
    const cartDrawer = document.getElementById('cart-drawer');
    
    if (searchOverlay && searchOverlay.classList.contains('active') && e.target === searchOverlay) {
        closeSearch();
    }
    
    if (cartDrawer && cartDrawer.classList.contains('active') && e.target === cartDrawer.querySelector('.cart-overlay')) {
        closeCart();
    }
});

const slider = document.querySelector(".image-slider");

let position = 0;

setInterval(() => {

    position += window.innerWidth * 0.8;

    if (position >= slider.scrollWidth - slider.clientWidth) {
        position = 0;
    }

    slider.scrollTo({
        left: position,
        behavior: "smooth"
    });

}, 4000);

function displayCart() {

    const cartContainer = document.getElementById("cart-items");

    const totalElement = document.getElementById("cart-total");

    if (!cartContainer) return;

    cartContainer.innerHTML = "";

    let total = 0;


    cart.forEach((item, index) => {

        total += item.price * item.quantity;


        const cartItem = document.createElement("div");

        cartItem.classList.add("cart-item");


        cartItem.innerHTML = `

            <img 
                src="${item.image}" 
                alt="${item.name}"
            >

            <div class="cart-product-info">

                <h2>${item.name}</h2>

                <p>$${item.price.toFixed(2)}</p>

                <div class="quantity-controls">

                    <button onclick="decreaseQuantity(${index})">
                        −
                    </button>

                    <span>${item.quantity}</span>

                    <button onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>

                <button 
                    class="remove-button"
                    onclick="removeFromCart(${index})">
                    REMOVE
                </button>

            </div>

        `;


        cartContainer.appendChild(cartItem);

    });


    totalElement.textContent = total.toFixed(2);

}

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

}


function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

}


function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCartCount();

}

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

}


function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    saveCart();

}


function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

}


function saveCart() {

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    updateCartCount();

}

/* =========================================
   SHOPPING CART
========================================= */


// Get existing cart from localStorage
// If there is no cart, create an empty one.

let Cart = JSON.parse(localStorage.getItem("cart")) || [];



/* =========================================
   ADD TO CART
========================================= */

document.addEventListener("click", function(event) {

    if (event.target.classList.contains("add-to-cart")) {

        const button = event.target;


        // Get product information

        const name = button.dataset.name;

        const price = Number(button.dataset.price);

        const image = button.dataset.image;


        // Check whether product already exists

        const existingProduct = cart.find(
            product => product.name === name
        );


        if (existingProduct) {

            // Product already exists
            // Increase quantity

            existingProduct.quantity++;

        } else {

            // Add new product

            cart.push({

                name: name,

                price: price,

                image: image,

                quantity: 1

            });

        }


        // Save cart

        saveCart();


        // Update number on cart icon

        updateCartCount();


        // Small confirmation

        alert(name + " added to cart!");

    }

});



/* =========================================
   SAVE CART
========================================= */

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}



/* =========================================
   UPDATE CART NUMBER
========================================= */

function updateCartCount() {

    const cartCountElements =
        document.querySelectorAll(".cart-count");


    let totalItems = 0;


    cart.forEach(function(product) {

        totalItems += product.quantity;

    });


    cartCountElements.forEach(function(element) {

        element.textContent = totalItems;

    });

}



/* =========================================
   DISPLAY CART
========================================= */

function displayCart() {

    const cartContainer =
        document.getElementById("cart-items");


    if (!cartContainer) {

        return;

    }


    cartContainer.innerHTML = "";


    let subtotal = 0;


    if (cart.length === 0) {

        document.getElementById("empty-cart").style.display =
            "block";

        document.querySelector(".cart-summary").style.display =
            "none";

        return;

    }


    document.getElementById("empty-cart").style.display =
        "none";


    document.querySelector(".cart-summary").style.display =
        "block";



    cart.forEach(function(product, index) {


        // Calculate product total

        const productTotal =
            product.price * product.quantity;


        subtotal += productTotal;



        // Create cart item

        const cartItem =
            document.createElement("div");


        cartItem.classList.add("cart-item");



        cartItem.innerHTML = `

            <div class="cart-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>


            <div class="cart-details">

                <h2>${product.name}</h2>

                <p>Price: $${product.price.toFixed(2)}</p>


                <div class="quantity-controls">

                    <button
                        onclick="decreaseQuantity(${index})">
                        −
                    </button>


                    <span>
                        ${product.quantity}
                    </span>


                    <button
                        onclick="increaseQuantity(${index})">
                        +
                    </button>

                </div>


                <button
                    class="remove-btn"
                    onclick="removeFromCart(${index})">

                    REMOVE

                </button>

            </div>


            <div class="item-total">

                $${productTotal.toFixed(2)}

            </div>

        `;


        cartContainer.appendChild(cartItem);

    });



    // Display subtotal

    document.getElementById("cart-subtotal")
        .textContent = subtotal.toFixed(2);


    // Display total

    document.getElementById("cart-total")
        .textContent = subtotal.toFixed(2);

}



/* =========================================
   INCREASE QUANTITY
========================================= */

function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

    displayCart();

    updateCartCount();

}



/* =========================================
   DECREASE QUANTITY
========================================= */

function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    saveCart();

    displayCart();

    updateCartCount();

}



/* =========================================
   REMOVE PRODUCT
========================================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    displayCart();

    updateCartCount();

}

/* =========================================
   CHECKOUT SYSTEM
========================================= */

const checkoutButton = document.getElementById("checkout-btn");
const checkoutModal = document.getElementById("checkout-modal");
const checkoutClose = document.getElementById("checkout-close");
const checkoutForm = document.getElementById("checkout-form");


// OPEN CHECKOUT
if (checkoutButton) {

    checkoutButton.addEventListener("click", function () {

        if (!cart || cart.length === 0) {

            alert("Your cart is empty. Please add products before checkout.");

            return;
        }

        if (checkoutModal) {

            checkoutModal.classList.add("active");

            loadCheckoutItems();

        }

    });

}


// CLOSE CHECKOUT
if (checkoutClose) {

    checkoutClose.addEventListener("click", function () {

        if (checkoutModal) {
            checkoutModal.classList.remove("active");
        }

    });

}


// CLOSE WHEN CLICKING OUTSIDE
if (checkoutModal) {

    checkoutModal.addEventListener("click", function (event) {

        if (event.target.classList.contains("checkout-overlay")) {

            checkoutModal.classList.remove("active");

        }

    });

}


/* =========================================
   LOAD CHECKOUT ITEMS
========================================= */

function loadCheckoutItems() {

    const checkoutItems =
        document.getElementById("checkout-items");

    const checkoutTotalPrice =
        document.getElementById("checkout-total-price");

    const orderItemsInput =
        document.getElementById("order-items");

    const orderTotalInput =
        document.getElementById("order-total");


    if (!checkoutItems) return;


    let total = 0;

    let orderText = "";


    checkoutItems.innerHTML = "";


    cart.forEach(function (item) {

        const product = products.find(
            function (p) {
                return p.id === item.id;
            }
        );


        if (!product) return;


        const itemTotal =
            product.price * item.quantity;


        total += itemTotal;


        orderText +=
            `${product.name} x ${item.quantity} = KSh ${itemTotal.toLocaleString("en-KE")}\n`;


        const itemElement =
            document.createElement("div");


        itemElement.className =
            "checkout-item";


        itemElement.innerHTML = `
            <div>
                <strong>${product.name}</strong>
                <p>Quantity: ${item.quantity}</p>
            </div>

            <strong>
                KSh ${itemTotal.toLocaleString("en-KE")}
            </strong>
        `;


        checkoutItems.appendChild(itemElement);

    });


    if (checkoutTotalPrice) {

        checkoutTotalPrice.textContent =
            `KSh ${total.toLocaleString("en-KE")}`;

    }


    if (orderItemsInput) {

        orderItemsInput.value = orderText;

    }


    if (orderTotalInput) {

        orderTotalInput.value =
            `KSh ${total.toLocaleString("en-KE")}`;

    }

}


/* =========================================
   SUBMIT ORDER
========================================= */

if (checkoutForm) {

    checkoutForm.addEventListener("submit", function () {

        if (!cart || cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }


        // CREATE ORDER NUMBER

        const orderNumberInput =
            document.createElement("input");

        orderNumberInput.type = "hidden";

        orderNumberInput.name = "order_number";

        orderNumberInput.value =
            "NSN-" + Date.now();


        checkoutForm.appendChild(orderNumberInput);


        // CREATE ORDER DATE

        const orderDateInput =
            document.createElement("input");

        orderDateInput.type = "hidden";

        orderDateInput.name = "order_date";

        orderDateInput.value =
            new Date().toLocaleString("en-KE");


        checkoutForm.appendChild(orderDateInput);

    });

}



