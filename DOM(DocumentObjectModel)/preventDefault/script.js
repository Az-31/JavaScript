//? preventDefault() -> mencegah aksi default dari sebuah elemen

const close = document.querySelectorAll(".close"); // HTMLCollection -> NodeList mengambil semua close

close.forEach(function (el) {
  // el = element
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    e.preventDefault(); // mencegah aksi default dari a
  });
});