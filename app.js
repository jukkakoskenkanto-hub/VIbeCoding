// Application state
let products = [];
let filteredProducts = [];
let currentEditId = null;

// DOM Elements
const inventoryGrid = document.getElementById('inventoryGrid');
const addProductBtn = document.getElementById('addProductBtn');
const productModal = document.getElementById('productModal');
const closeModal = document.querySelector('.close');
const productForm = document.getElementById('productForm');
const searchInput = document.getElementById('searchInput');
const cancelBtn = document.getElementById('cancelBtn');
const modalTitle = document.getElementById('modalTitle');

// Stats elements
const totalProductsEl = document.getElementById('totalProducts');
const totalItemsEl = document.getElementById('totalItems');
const lowStockEl = document.getElementById('lowStock');

// Load products from localStorage
function loadProducts() {
    const data = localStorage.getItem('inventoryDatabase');
    products = data ? JSON.parse(data) : [];
    filteredProducts = [...products];
    renderProducts();
    updateStats();
}

// Save products to localStorage
function saveProducts() {
    localStorage.setItem('inventoryDatabase', JSON.stringify(products));
}

// Render products to the grid
function renderProducts() {
    if (filteredProducts.length === 0) {
        inventoryGrid.innerHTML = `
            <div class="empty-state">
                <h3>No products found</h3>
                <p>Add a new product to get started</p>
            </div>
        `;
        return;
    }

    inventoryGrid.innerHTML = filteredProducts.map(product => {
        const stockStatus = getStockStatus(product.quantity);
        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-header">
                    <div>
                        <div class="product-name">${escapeHtml(product.name)}</div>
                        <span class="product-category">${escapeHtml(product.category)}</span>
                    </div>
                </div>
                <div class="product-info">
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-stock">
                        <span>Stock: ${product.quantity}</span>
                        <span class="stock-badge ${stockStatus.class}">${stockStatus.text}</span>
                    </div>
                </div>
                <div class="product-actions">
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="decreaseQuantity(${product.id})">−</button>
                        <div class="quantity-display">${product.quantity}</div>
                        <button class="quantity-btn" onclick="increaseQuantity(${product.id})">+</button>
                    </div>
                    <button class="delete-btn" onclick="deleteProduct(${product.id})" title="Delete product">🗑️</button>
                </div>
            </div>
        `;
    }).join('');
}

// Get stock status
function getStockStatus(quantity) {
    if (quantity === 0) {
        return { class: 'stock-out', text: 'Out of Stock' };
    } else if (quantity < 20) {
        return { class: 'stock-low', text: 'Low Stock' };
    } else {
        return { class: 'stock-good', text: 'In Stock' };
    }
}

// Update statistics
function updateStats() {
    totalProductsEl.textContent = products.length;
    
    const totalItems = products.reduce((sum, product) => sum + product.quantity, 0);
    totalItemsEl.textContent = totalItems;
    
    const lowStockCount = products.filter(p => p.quantity < 20 && p.quantity > 0).length;
    lowStockEl.textContent = lowStockCount;
}

// Increase product quantity
function increaseQuantity(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.quantity++;
        saveProducts();
        loadProducts();
    }
}

// Decrease product quantity
function decreaseQuantity(id) {
    const product = products.find(p => p.id === id);
    if (product && product.quantity > 0) {
        product.quantity--;
        saveProducts();
        loadProducts();
    }
}

// Delete product
function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        products = products.filter(p => p.id !== id);
        saveProducts();
        loadProducts();
    }
}

// Open modal for adding product
function openAddModal() {
    currentEditId = null;
    modalTitle.textContent = 'Add New Product';
    productForm.reset();
    productModal.style.display = 'block';
}

// Close modal
function closeProductModal() {
    productModal.style.display = 'none';
    productForm.reset();
    currentEditId = null;
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('productName').value,
        category: document.getElementById('productCategory').value,
        price: parseFloat(document.getElementById('productPrice').value),
        quantity: parseInt(document.getElementById('productQuantity').value)
    };

    if (currentEditId) {
        // Edit existing product
        const product = products.find(p => p.id === currentEditId);
        if (product) {
            Object.assign(product, formData);
        }
    } else {
        // Add new product
        const newId = products.length > 0 ? products.reduce((max, p) => Math.max(max, p.id), 0) + 1 : 1;
        products.push({
            id: newId,
            ...formData
        });
    }

    saveProducts();
    loadProducts();
    closeProductModal();
}

// Search/filter products
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm === '') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    renderProducts();
}

// Utility function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Event listeners
addProductBtn.addEventListener('click', openAddModal);
closeModal.addEventListener('click', closeProductModal);
cancelBtn.addEventListener('click', closeProductModal);
productForm.addEventListener('submit', handleFormSubmit);
searchInput.addEventListener('input', handleSearch);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        closeProductModal();
    }
});

// Initialize app
loadProducts();
