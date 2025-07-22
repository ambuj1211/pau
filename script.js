const products = [
    {
        id: 1,
        name: "Rose Agarbatti",
        description: "Premium rose fragrance incense sticks made from natural ingredients. Each pack contains 100 high-quality sticks that burn evenly and provide long-lasting fragrance.",
        price: 150,
        originalPrice: 200,
        category: "floral",
        images: ["./image/rose_floral.jpg"],
        rating: 4.8,
        reviews: 127,
        discount: 25,
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
        price: 250,
        originalPrice: 320,
        category: "spiritual",
        images: ["./image/bharat_darshan.jpg"],
        rating: 4.9,
        reviews: 203,
        discount: 22,
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
        price: 180,
        originalPrice: 230,
        category: "floral",
        images: ["./image/jasmine_agarbatti.jpg"],
        rating: 4.7,
        reviews: 89,
        discount: 22,
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
        price: 300,
        originalPrice: 380,
        category: "spiritual",
        images: ["./image/chandan_herbal.jpg"],
        rating: 4.8,
        reviews: 145,
        discount: 21,
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
        price: 200,
        originalPrice: 250,
        category: "floral",
        images: ["🌺", "🌸", "💐", "🌼"],
        rating: 4.7,
        reviews: 78,
        discount: 20,
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
        price: 18,
        originalPrice: 20,
        category: "others",
        images: ["./image/2in1.jpg"],
        rating: 4.5,
        reviews: 50,
        discount: 10,
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
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL parameters or default to first product
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    
    loadProduct(productId);
    updateCartDisplay();
    loadRelatedProducts(productId);
});

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
    document.getElementById('productDescription').textContent = currentProduct.description;
    
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

// Load product images
function loadProductImages() {
    currentImageIndex = 0;
    
    // Update main image
    const mainImagePlaceholder = document.getElementById('mainImagePlaceholder');
    mainImagePlaceholder.innerHTML = `<img src="${currentProduct.images[0]}" alt="${currentProduct.name}" 
                     style="
                     width: 90%;       /* Set as per your design */
                     height: 90%;      /* Adjust height as required */
                     background: #fff;   /* Or any window background */
                     border-radius: 16px; /* Rounded corners like in the product card */
                     overflow: hidden;   /* Ensures image does not overflow corners */
                     box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* Optional, for card effect */
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
                     width: 90%;       /* Set as per your design */
                     height: 90%;      /* Adjust height as required */
                     border-radius: 16px; /* Rounded corners like in the product card */
                     overflow: hidden;   /* Ensures image does not overflow corners */
                     box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* Optional, for card effect */
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

// Navigate to previous image
/*
function previousImage() {
    if (currentImageIndex > 0) {
        selectImage(currentImageIndex - 1);
    }
}

// Navigate to next image
function nextImage() {
    if (currentImageIndex < currentProduct.images.length - 1) {
        selectImage(currentImageIndex + 1);
    }
}
*/
// Update navigation button visibility
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.style.opacity = currentImageIndex === 0 ? '0.5' : '1';
    nextBtn.style.opacity = currentImageIndex === currentProduct.images.length - 1 ? '0.5' : '1';
    
    prevBtn.style.pointerEvents = currentImageIndex === 0 ? 'none' : 'auto';
    nextBtn.style.pointerEvents = currentImageIndex === currentProduct.images.length - 1 ? 'none' : 'auto';
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
document.getElementById('quantityInput').addEventListener('input', function() {
    const value = parseInt(this.value);
    if (value < 1) this.value = 1;
    if (value > 100) this.value = 100;
    updateTotalPrice();
});

// Add to cart functionality
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
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
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
    const relatedProducts = products
        .filter(p => p.id !== currentProductId && p.category === currentProduct.category)
        .slice(0, 4);
    
    // If not enough products in same category, add from other categories
    if (relatedProducts.length < 4) {
        const additionalProducts = products
            .filter(p => p.id !== currentProductId && p.category !== currentProduct.category)
            .slice(0, 4 - relatedProducts.length);
        relatedProducts.push(...additionalProducts);
    }
    
    const relatedGrid = document.getElementById('relatedProductsGrid');
    relatedGrid.innerHTML = '';
    
    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'related-product-card';
        productCard.onclick = () => {
            window.location.href = `product-details.html?id=${product.id}`;
        };
        
        productCard.innerHTML = `
            <div class="related-product-image">${product.images[0]}</div>
            <div class="related-product-name">${product.name}</div>
            <div class="related-product-price">₹${product.price}</div>
        `;
        
        relatedGrid.appendChild(productCard);
    });
}

// Cart management
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
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
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalAmount.textContent = total;
}

// Update cart item quantity
function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        }
    }
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showToast('Item removed from cart');
}

// Toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
    
    if (cartSidebar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Send WhatsApp order from cart
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
    
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchInput.focus();
    }
}

// Search products
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length > 2) {
        // Implement search functionality
        const matchedProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
        
        // You can display search results here
        console.log('Search results:', matchedProducts);
    }
});

// Go back function
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = 'index.html'; // Fallback to main page
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Image zoom functionality
function openZoom() {
    const zoomModal = document.getElementById('zoomModal');
    const zoomImage = document.getElementById('zoomImage');

    zoomImage.src = currentProduct.images[currentImageIndex];
    zoomImage.alt = currentProduct.name;
    zoomImage.style.fontSize = '10rem';
    zoomImage.style.display = 'flex';
    zoomImage.style.height ='450px';
    zoomImage.style.alignItems = 'center';
    zoomImage.style.justifyContent = 'center';
    zoomImage.onerror = function () {
        this.style.display = 'none';
        this.insertAdjacentHTML('afterend', `<div style="font-size: 10rem;">${currentProduct.images[currentImageIndex]}</div>`);
    };

    zoomModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}


function closeZoom() {
    const zoomModal = document.getElementById('zoomModal');
    zoomModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Add click handler to main image for zoom
document.getElementById('mainImage').addEventListener('click', openZoom);

// Utility function
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
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

document.getElementById('mainImage').addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.getElementById('mainImage').addEventListener('touchend', function(e) {
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
document.addEventListener('click', function(event) {
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