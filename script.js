document.getElementById('btn-apply').addEventListener('click', function () {
    const discountField = document.getElementById('discount-field');
    const discountValue = discountField.value;
    discountField.value = '';
    if (isNaN(discountValue) || discountValue < 1) {
        return alert('Please Input Positive Number')
    }
    const discountPercentage = parseFloat(discountValue);
    const productPrice = document.getElementById('product-price').innerText;
    const discount = (productPrice / 100) * discountPercentage;
    const result = productPrice - discount;
    const discountedPrice = document.getElementById('discounted-price');
    discountedPrice.innerText = result;

})