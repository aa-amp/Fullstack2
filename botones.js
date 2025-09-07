document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.btn-comprar').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'carrito.html';
    });
  });
});
