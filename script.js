const btn = document.getElementById("colorBtn");

btn.addEventListener("click", () => {

  const colores = ["#f4f6f9", "#e6ffe6", "#e6f0ff", "#fff5e6", "#ffe6f2"];
    const random = colores[Math.floor(Math.random() * colores.length)];


  document.body.style.background = random;
});