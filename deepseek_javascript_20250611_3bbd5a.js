// مدیریت سبد خرید
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName) {
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    showCartPopup(productName);
}

function showCartPopup(name) {
    // حذف نوتیفیکیشن‌های قبلی
    const oldModals = document.querySelectorAll('.cart-modal');
    oldModals.forEach(modal => modal.remove());
    
    // ایجاد نوتیفیکیشن جدید
    const cartModal = document.createElement('div');
    cartModal.className = 'cart-modal';
    cartModal.innerHTML = `
        <p>«${name}» با موفقیت به سبد خرید اضافه شد</p>
        <a href="#" onclick="viewCart()">مشاهده سبد خرید (${cart.length})</a>
    `;
    
    document.body.appendChild(cartModal);
    
    setTimeout(() => {
        cartModal.style.opacity = '0';
        setTimeout(() => cartModal.remove(), 300);
    }, 3000);
}

function viewCart() {
    alert(`محصولات سبد خرید:\n${cart.join('\n')}`);
}