// Menambahkan item ke dalam daftar pemesanan
const orderList = document.getElementById('order-list');
const orderBtns = document.querySelectorAll('.order-btn');
const checkoutBtn = document.getElementById('checkout-btn');

orderBtns.forEach(button => {
  button.addEventListener('click', function() {
    const itemName = button.getAttribute('data-name');
    const li = document.createElement('li');
    li.textContent = itemName;
    orderList.appendChild(li);
    checkoutBtn.style.display = 'block'; // Menampilkan tombol checkout
  });
});

// Fungsi untuk melanjutkan ke pembayaran (sementara hanya alert)
checkoutBtn.addEventListener('click', function() {
  alert('Anda telah melanjutkan ke pembayaran!');
});
