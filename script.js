document.addEventListener('DOMContentLoaded', () => {
    const cart = document.querySelector('.cart');
    const totalElement = document.getElementById('total');

    // Update total price
    function updateTotal() {
        let total = 0;
        cart.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').getAttribute('data-price'));
            const quantity = parseInt(item.querySelector('.quantity').textContent);
            total += price * quantity;
        });
        totalElement.textContent = total.toFixed(2);
    }

    // Handle quantity increase
    cart.addEventListener('click', (event) => {
        if (event.target.classList.contains('increase')) {
            const quantityElement = event.target.previousElementSibling;
            quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
            updateTotal();
        }

        // Handle quantity decrease
        if (event.target.classList.contains('decrease')) {
            const quantityElement = event.target.nextElementSibling;
            const currentQuantity = parseInt(quantityElement.textContent);
            if (currentQuantity > 1) {
                quantityElement.textContent = currentQuantity - 1;
                updateTotal();
            }
        }

        // Handle remove item
        if (event.target.classList.contains('remove')) {
            event.target.parentElement.remove();
            updateTotal();
        }

        // Handle favorite toggle
        if (event.target.classList.contains('favorite')) {
            event.target.classList.toggle('favorited');
        }
    });

    // Initial total calculation
    updateTotal();
});