let precio = 400000;
let cantidad = 0;

let precioSpan = document.querySelector(".precio-inicial");
let cantidadSpan = document.querySelector(".cantidad");
let totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;

document.querySelectorAll("button")[0].onclick = function() {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  totalSpan.innerHTML = precio * cantidad;
}

document.querySelectorAll("button")[1].onclick = function() {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    totalSpan.innerHTML = precio * cantidad;
  }
}
