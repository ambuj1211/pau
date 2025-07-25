const products = [
    {
        id: 1,
        name: "Rose Agarbatti",
        description: "Premium rose fragrance incense sticks made from natural ingredients. Each pack contains 100 high-quality sticks that burn evenly and provide long-lasting fragrance.",
        price: 99,
        originalPrice: 180,
        category: "floral",
        images: ["./image/rose_floral.jpg"],
        rating: 4.8,
        reviews: 127,
        discount: 45.55,
        notify: false,
        specifications: {
            quantity: "100 sticks per pack",
            burnTime: "45-60 minutes per stick",
            fragrance: "Natural Rose",
            length: "8 inches",
            material: "Bamboo stick, Natural ingredients",
            category: "Floral"
        },
        features: [
            "100% Natural ingredients",
            "Long-lasting fragrance",
            "Even burning",
            "Eco-friendly packaging",
            "Premium quality bamboo sticks"
        ]
    },
    {
        id: 2,
        name: "Bharat Darshan",
        description: "Pure sandalwood incense sticks crafted from authentic sandalwood powder and natural binding agents. Known for its calming properties and spiritual significance.",
        price: 199,
        originalPrice: 300,
        category: "spiritual",
        images: ["./image/bharat_darshan.jpg"],
        rating: 4.9,
        reviews: 203,
        discount: 33.33,
        notify: false,
        specifications: {
            quantity: "90 sticks per pack",
            burnTime: "60 minutes per stick",
            fragrance: "Sandalwood",
            length: "9 inches",
            material: "Sandalwood powder, Natural binder",
            category: "Spiritual"
        },
        features: [
            "Authentic sandalwood aroma",
            "Soothing and calming",
            "Made with pure ingredients",
            "Traditional Indian fragrance",
            "Ideal for meditation"
        ]
    },
    {
        id: 3,
        name: "Jasmine Agarbatti",
        description: "Natural jasmine fragrance incense sticks that capture the essence of fresh jasmine flowers. Perfect for creating a romantic and peaceful environment.",
        price: 99,
        originalPrice: 180,
        category: "floral",
        images: ["./image/jasmine_agarbatti.jpg"],
        rating: 4.7,
        reviews: 89,
        discount: 45.55,
        notify: false,
        specifications: {
            quantity: "100 sticks per pack",
            burnTime: "50-55 minutes per stick",
            fragrance: "Fresh Jasmine",
            length: "8 inches",
            material: "Bamboo stick, Jasmine essence",
            category: "Floral"
        },
        features: [
            "Romantic floral aroma",
            "Natural jasmine oil",
            "Perfect for home and gifts",
            "Even and long-lasting burn",
            "Made in India"
        ]
    },
    {
        id: 4,
        name: "Neem Agarbatti",
        description: "Herbal neem incense sticks made from natural neem leaves and traditional herbs. Known for their purifying properties and mosquito repellent qualities.",
        price: 120,
        originalPrice: 150,
        category: "herbal",
        images: ["🌿", "🍃", "🌱", "🌳"],
        rating: 4.6,
        reviews: 156,
        discount: 20,
        notify: true,
        specifications: {
            quantity: "80 sticks per pack",
            burnTime: "40-50 minutes per stick",
            fragrance: "Neem & Herbal",
            length: "8 inches",
            material: "Neem leaves, Herbal base",
            category: "Herbal"
        },
        features: [
            "Natural mosquito repellent",
            "Purifies air",
            "Safe and eco-friendly",
            "Traditional herbal formula",
            "Ideal for rural and urban homes"
        ]
    },
    {
        id: 5,
        name: "Chandan Agarbatti",
        description: "Traditional chandan fragrance incense sticks made from pure sandalwood powder. Perfect for daily prayers and meditation sessions.",
        price: 99,
        originalPrice: 180,
        category: "spiritual",
        images: ["./image/chandan_herbal.jpg"],
        rating: 4.8,
        reviews: 145,
        discount: 45.55,
        notify: false,
        specifications: {
            quantity: "90 sticks per pack",
            burnTime: "60 minutes per stick",
            fragrance: "Chandan (Sandalwood)",
            length: "9 inches",
            material: "Sandalwood, Organic binder",
            category: "Spiritual"
        },
        features: [
            "Divine sandalwood fragrance",
            "Long lasting aroma",
            "Eco-safe packaging",
            "Great for temples and homes",
            "Natural & chemical-free"
        ]
    },
    {
        id: 6,
        name: "Lemon Agarbatti",
        description: "Fresh lemon citrus fragrance incense sticks that energize and refresh your living space. Made with natural lemon essence.",
        price: 140,
        originalPrice: 175,
        category: "citrus",
        images: ["🍋", "🍊"],
        rating: 4.5,
        reviews: 92,
        discount: 20,
        notify: true,
        specifications: {
            quantity: "100 sticks per pack",
            burnTime: "45 minutes per stick",
            fragrance: "Citrus Lemon",
            length: "8 inches",
            material: "Lemon oil, Bamboo stick",
            category: "Citrus"
        },
        features: [
            "Energizing citrus scent",
            "Natural lemon extract",
            "Refreshing and uplifting",
            "Ideal for kitchens and workspaces",
            "Made with care"
        ]
    },
    {
        id: 7,
        name: "Mogra Agarbatti",
        description: "Sweet mogra fragrance incense sticks with authentic flower essence. Creates a romantic and pleasant atmosphere in your home.",
        price: 199,
        originalPrice: 250,
        category: "floral",
        images: ["🌺", "🌸", "💐", "🌼"],
        rating: 4.7,
        reviews: 78,
        discount: 20,
        notify: true,
        specifications: {
            quantity: "100 sticks per pack",
            burnTime: "50 minutes per stick",
            fragrance: "Fresh Mogra",
            length: "8 inches",
            material: "Flower essence, Bamboo base",
            category: "Floral"
        },
        features: [
            "Rich floral aroma",
            "Pure mogra extract",
            "Perfect for gifting",
            "Smooth and even burn",
            "Soothing ambience"
        ]
    },
    {
        id: 8,
        name: "Tulsi Agarbatti",
        description: "Sacred tulsi herbal incense sticks made from holy basil leaves. Known for their spiritual significance and air purifying properties.",
        price: 160,
        originalPrice: 200,
        category: "herbal",
        images: ["🌱", "🌿", "🍃", "🌳"],
        rating: 4.6,
        reviews: 134,
        discount: 20,
        notify: true,
        specifications: {
            quantity: "90 sticks per pack",
            burnTime: "50 minutes per stick",
            fragrance: "Tulsi (Holy Basil)",
            length: "8 inches",
            material: "Tulsi leaves, Herbal mix",
            category: "Herbal"
        },
        features: [
            "Spiritual healing",
            "Sacred basil leaves",
            "Cleanses air",
            "Environmentally friendly",
            "Ayurveda inspired"
        ]
    },
    {
        id: 9,
        name: "Orange Agarbatti",
        description: "Refreshing orange citrus fragrance incense sticks that uplift mood and create positive energy. Made with natural orange oils.",
        price: 145,
        originalPrice: 180,
        category: "citrus",
        images: ["🍊", "🍋", "🌅", "💨"],
        rating: 4.5,
        reviews: 87,
        discount: 19,
        notify: true,
        specifications: {
            quantity: "90 sticks per pack",
            burnTime: "45 minutes per stick",
            fragrance: "Sweet Orange",
            length: "8 inches",
            material: "Orange oil, Bamboo core",
            category: "Citrus"
        },
        features: [
            "Mood enhancer",
            "Citrus burst aroma",
            "Brightens atmosphere",
            "Crafted with care",
            "Natural and refreshing"
        ]
    },
    {
        id: 10,
        name: "2IN1",
        description: "A dual fragrance combo pack of two distinct aromas for variety and enhanced experience.",
        price: 219,
        originalPrice: 300,
        category: "others",
        images: ["./image/2in1.jpg"],
        rating: 4.5,
        reviews: 50,
        discount: 26.66,
        notify: false,
        specifications: {
            quantity: "40 sticks (2x20) per pack",
            burnTime: "40 minutes per stick",
            fragrance: "Mixed Floral & Woody",
            length: "8 inches",
            material: "Mixed oils, Bamboo stick",
            category: "Others"
        },
        features: [
            "Two-in-one fragrance",
            "Good value combo",
            "Unique blend of aromas",
            "Perfect for trial",
            "Budget friendly"
        ]
    }
];

// Current product and image state
let currentProduct = null;
let currentImageIndex = 0;

// FIXED: Initialize cart with proper error handling and immediate sync
let cart = [];

// Initialize cart from localStorage with better error handling
function initializeCart() {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart && savedCart !== 'null' && savedCart !== 'undefined') {
            cart = JSON.parse(savedCart);
            // Ensure cart is an array
            if (!Array.isArray(cart)) {
                cart = [];
            }
        } else {
            cart = [];
        }
    } catch (error) {
        console.error('Error loading cart from localStorage:', error);
        cart = [];
        localStorage.removeItem('cart'); // Clear corrupted data
    }

    // Immediate cart display update
    updateCartDisplay();
}

// FIXED: Save cart with better error handling
function saveCart() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (error) {
        console.error('Error saving cart to localStorage:', error);
        showToast('Error saving cart. Please try again.');
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', function () {
    // Initialize cart FIRST
    initializeCart();

    // Get product ID from URL parameters or default to first product
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;

    loadProduct(productId);
    loadRelatedProducts(productId);

    // Setup event listeners for cart sync
    setupCartSyncListeners();
});

// FIXED: Add cart synchronization listeners
function setupCartSyncListeners() {
    // Listen for localStorage changes from other pages
    window.addEventListener('storage', function (e) {
        if (e.key === 'cart') {
            try {
                const newCart = e.newValue ? JSON.parse(e.newValue) : [];
                if (Array.isArray(newCart)) {
                    cart = newCart;
                    updateCartDisplay();
                }
            } catch (error) {
                console.error('Error syncing cart from storage event:', error);
            }
        }
    });

    // Periodic cart sync (fallback for same-origin issues)
    setInterval(syncCartFromStorage, 1000);
}

// FIXED: Periodic cart synchronization
function syncCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart && savedCart !== 'null') {
            const parsedCart = JSON.parse(savedCart);
            if (Array.isArray(parsedCart) && JSON.stringify(cart) !== JSON.stringify(parsedCart)) {
                cart = parsedCart;
                updateCartDisplay();
            }
        }
    } catch (error) {
        // Silent fail for sync - don't spam console
    }
}

// Load product details
function loadProduct(productId) {
    currentProduct = products.find(p => p.id === productId);

    if (!currentProduct) {
        currentProduct = products[0]; // Fallback to first product
    }

    // Update page title
    document.title = `${currentProduct.name} - PAU | Prakash Agarbatti Udyog`;

    // Update breadcrumb
    document.getElementById('productCategory').textContent = capitalizeFirst(currentProduct.category);
    document.getElementById('productName').textContent = currentProduct.name;

    // Update product information
    document.getElementById('productTitle').textContent = currentProduct.name;
    document.getElementById('currentPrice').textContent = currentProduct.price;
    document.getElementById('originalPrice').textContent = currentProduct.originalPrice;
    const discountBadge = document.querySelector('.discount-badge');
    if (currentProduct.originalPrice > currentProduct.price) {
        const discount = (((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100).toFixed(2);
        discountBadge.textContent = `${discount}% OFF`;
        discountBadge.style.display = 'inline-block';
    } else {
        discountBadge.style.display = 'none';
    }


    document.getElementById('productDescription').textContent = currentProduct.description;

    const actionButtons = document.getElementById('actionButtons');

    if (currentProduct.notify) {
        // Show only "Notify Me" button
        actionButtons.innerHTML = `
        <button class="notify-btn" onclick="notifyUser('${currentProduct.name}')">
            📢 Notify Me
        </button>
    `;

        // Hide quantity section and price total if product is not available
        document.querySelector('.quantity-section').style.display = 'none';
        document.querySelector('.total-price').style.display = 'none';
    } else {
        // Show Add to Cart and WhatsApp buttons
        actionButtons.innerHTML = `
        <button class="add-to-cart-btn" onclick="addToCart()">🛒 Add to Cart</button>
        <button class="whatsapp-btn" onclick="orderViaWhatsApp()">📱 Order via WhatsApp</button>
    `;

        // Show quantity and price section
        document.querySelector('.quantity-section').style.display = '';
        document.querySelector('.total-price').style.display = '';
    }


    // Update rating
    const stars = '★'.repeat(Math.floor(currentProduct.rating)) + '☆'.repeat(5 - Math.floor(currentProduct.rating));
    document.querySelector('.stars').textContent = stars;
    document.querySelector('.rating-text').textContent = `(${currentProduct.rating}/5 - ${currentProduct.reviews} reviews)`;

    // Update specifications
    document.getElementById('specQuantity').textContent = currentProduct.specifications.quantity;
    document.getElementById('specBurnTime').textContent = currentProduct.specifications.burnTime;
    document.getElementById('specFragrance').textContent = currentProduct.specifications.fragrance;
    document.getElementById('specLength').textContent = currentProduct.specifications.length;
    document.getElementById('specMaterial').textContent = currentProduct.specifications.material;
    document.getElementById('specCategory').textContent = currentProduct.specifications.category;

    // Update features
    const featuresHtml = currentProduct.features.map(feature => `<li>${feature}</li>`).join('');
    document.getElementById('productFeatures').innerHTML = featuresHtml;

    // Load images
    loadProductImages();

    // Update price calculation
    updateTotalPrice();
}

//notify user
function notifyUser(productName) {
    const message = `Hello! I'm interested in "${productName}". Please notify me when it's available.`;
    const phoneNumber = "919507002400"; // your WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


// Load product images
function loadProductImages() {
    currentImageIndex = 0;

    // Update main image
    const mainImagePlaceholder = document.getElementById('mainImagePlaceholder');
    mainImagePlaceholder.innerHTML = `<img src="${currentProduct.images[0]}" alt="${currentProduct.name}" 
                     style="
                     width: 90%;       
                     height: 90%;      
                     background: #fff;   
                     border-radius: 16px; 
                     overflow: hidden;   
                     box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
                     position: relative;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     "
                    onerror="this.style.display='none';this.parentNode.innerHTML='${currentProduct.images[0]}';">`

    // Update image counter
    document.getElementById('imageCounter').textContent = `1 / ${currentProduct.images.length}`;

    // Create thumbnails
    const thumbnailScroll = document.getElementById('thumbnailScroll');
    thumbnailScroll.innerHTML = '';

    currentProduct.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail" style="width: 50px; height: auto;" onerror="this.style.display='none';this.parentNode.innerHTML='${image}';">`;
        thumbnail.onclick = () => selectImage(index);
        thumbnailScroll.appendChild(thumbnail);
    });

    // Show/hide navigation buttons
    updateNavigationButtons();
}

// Select specific image
function selectImage(index) {
    currentImageIndex = index;
    document.getElementById('mainImagePlaceholder').innerHTML = `<img src="${currentProduct.images[index]}" alt="${currentProduct.name}" 
                     style="
                     width: 90%;       
                     height: 90%;      
                     border-radius: 16px; 
                     overflow: hidden;   
                     box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
                     position: relative;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                     "
                    onerror="this.style.display='none';this.parentNode.innerHTML='${currentProduct.images[index]}';">`;
    document.getElementById('imageCounter').textContent = `${index + 1} / ${currentProduct.images.length}`;
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    updateNavigationButtons();
}

// Update navigation button visibility
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (prevBtn && nextBtn) {
        prevBtn.style.opacity = currentImageIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentImageIndex === currentProduct.images.length - 1 ? '0.5' : '1';

        prevBtn.style.pointerEvents = currentImageIndex === 0 ? 'none' : 'auto';
        nextBtn.style.pointerEvents = currentImageIndex === currentProduct.images.length - 1 ? 'none' : 'auto';
    }
}

// Quantity management
function increaseQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue < 100) {
        quantityInput.value = currentValue + 1;
        updateTotalPrice();
    }
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantityInput');
    const currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        updateTotalPrice();
    }
}

function setQuantity(quantity) {
    document.getElementById('quantityInput').value = quantity;
    updateTotalPrice();
}

// Update total price
function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const total = currentProduct.price * quantity;
    document.getElementById('totalPrice').textContent = total;
}

// Quantity input change handler
document.getElementById('quantityInput').addEventListener('input', function () {
    const value = parseInt(this.value);
    if (value < 1) this.value = 1;
    if (value > 100) this.value = 100;
    updateTotalPrice();
});

// FIXED: Add to cart functionality with immediate sync
function addToCart() {
    const quantity = parseInt(document.getElementById('quantityInput').value);

    const existingItem = cart.find(item => item.id === currentProduct.id);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            image: currentProduct.images[0],
            quantity: quantity
        });
    }

    // Save and sync immediately
    saveCart();
    updateCartDisplay();
    showToast(`Added ${quantity} ${quantity === 1 ? 'pack' : 'packs'} of ${currentProduct.name} to cart!`);
}



// Order via WhatsApp
function orderViaWhatsApp() {
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const total = currentProduct.price * quantity;
    const phoneNumber = '919507002400';

    let message = `🛒 *Product Inquiry from PAU Website*\n\n`;
    message += `*Product Details:*\n`;
    message += `Product: ${currentProduct.name}\n`;
    message += `Quantity: ${quantity} ${quantity === 1 ? 'pack' : 'packs'}\n`;
    message += `Price per pack: ₹${currentProduct.price}\n`;
    message += `Total Amount: ₹${total}\n\n`;
    message += `*Product Description:*\n${currentProduct.description}\n\n`;
    message += `Please confirm availability and provide delivery details.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Load related products
function loadRelatedProducts(currentProductId) {
    const container = document.getElementById('relatedProductsGrid');
    container.innerHTML = '';

    // Filter out the current product
    const otherProducts = products.filter(p => p.id !== currentProductId);

    // Shuffle the array to get a random mix
    const shuffled = otherProducts.sort(() => 0.5 - Math.random());

    // Repeat enough products to make scroll feel endless
    const repeatedProducts = [...shuffled, ...shuffled].slice(0, 20); // limit to 20 total for smooth scroll

    repeatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'related-product-card';
        productCard.onclick = () => {
            window.location.href = `product-details.html?id=${product.id}`;
        };

        const image = product.images[0];
        let mediaHTML = '';

        if (image.startsWith('./')) {
            mediaHTML = `
                <img src="${image}" alt="${product.name}" class="related-product-image"
                     onerror="this.onerror=null;this.style.display='none';this.parentNode.innerHTML='<div class=\'related-product-image\'>❓</div>';">
            `;
        } else {
            mediaHTML = `<div class="related-product-image">${image}</div>`;
        }

        productCard.innerHTML = `
            ${mediaHTML}
            <div class="related-product-name">${product.name}</div>
            <div class="related-product-price">₹${product.price}</div>
        `;

        container.appendChild(productCard);
    });
}



// FIXED: Cart management with better sync
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Update cart items
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-image">${item.image}</div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">₹${item.price} each</div>
                        <div class="cart-item-actions">
                            <div class="cart-quantity-controls">
                                <button class="cart-quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                                <span class="cart-item-quantity">${item.quantity}</span>
                                <button class="cart-quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                            </div>
                            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (totalAmount) {
        totalAmount.textContent = total;
    }
}

// FIXED: Update cart item quantity with immediate sync
function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
        }
    }
}

// FIXED: Remove item from cart with immediate sync
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    showToast('Item removed from cart');
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');

        if (cartSidebar.classList.contains('open')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// Send WhatsApp order from cart (mobile-compatible)
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        showToast('Your cart is empty! Please add some products first.');
        return;
    }

    const phoneNumber = '919507002400';
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    let message = `🛒 *New Order from PAU Website*\n\n`;
    message += `*Order Details:*\n`;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.name}\n`;
        message += `   Quantity: ${item.quantity} ${item.quantity === 1 ? 'pack' : 'packs'}\n`;
        message += `   Price: ₹${item.price} per pack\n`;
        message += `   Subtotal: ₹${item.price * item.quantity}\n\n`;
    });

    message += `*Total Amount: ₹${total}*\n\n`;
    message += `Please confirm this order and provide delivery details.`;

    const encodedMessage = encodeURIComponent(message);

    // Detect mobile devices and adjust WhatsApp URL accordingly
    const isMobile = /iPhone|Android|iPad/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
        ? `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`
        : `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Create temporary anchor and simulate click (for better compatibility)
    const a = document.createElement('a');
    a.href = whatsappUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Search functionality
function toggleSearch() {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');

    if (searchContainer) {
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active') && searchInput) {
            searchInput.focus();
        }
    }
}

// Search products
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 2) {
            const matchedProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            console.log('Search results:', matchedProducts);
        }
    });
}

// Go back function
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html';
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Image zoom functionality
function openZoom() {
    const zoomModal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage');

    if (zoomModal && zoomImage) {
        zoomImage.src = currentProduct.images[currentImageIndex];
        zoomImage.alt = currentProduct.name;
        zoomImage.style.fontSize = '10rem';
        zoomImage.style.display = 'flex';
        zoomImage.style.height = '450px';
        zoomImage.style.alignItems = 'center';
        zoomImage.style.justifyContent = 'center';
        zoomImage.onerror = function () {
            this.style.display = 'none';
            this.insertAdjacentHTML('afterend', `<div style="font-size: 10rem;">${currentProduct.images[currentImageIndex]}</div>`);
        };

        zoomModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeZoom() {
    const zoomModal = document.getElementById('zoomModal');
    if (zoomModal) {
        zoomModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Add click handler to main image for zoom
const mainImage = document.getElementById('mainImage');
if (mainImage) {
    mainImage.addEventListener('click', openZoom);
}

// Utility function
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
        previousImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    } else if (e.key === 'Escape') {
        closeZoom();
        if (document.getElementById('cartSidebar').classList.contains('open')) {
            toggleCart();
        }
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.getElementById('mainImage').addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('mainImage').addEventListener('touchend', function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next image
            nextImage();
        } else {
            // Swipe right - previous image
            previousImage();
        }
    }
}

// Close cart when clicking outside
document.addEventListener('click', function (event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');

    if (window.innerWidth >= 768 &&
        !cartSidebar.contains(event.target) &&
        !cartIcon.contains(event.target) &&
        cartSidebar.classList.contains('open')) {
        toggleCart();
    }
});

// Auto-save cart to localStorage whenever it changes
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart from localStorage on page load
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Initialize cart on page load
loadCart();