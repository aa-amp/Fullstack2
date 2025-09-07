//boton comprar 
document.body.addEventListener('click', function(e) {
  if (e.target && e.target.classList.contains('btn-comprar')) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Producto agregado al carrito";
    document.body.appendChild(toast);

    setTimeout(() => toast.style.opacity = "1", 100);
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }
});
