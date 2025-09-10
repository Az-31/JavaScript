//? event bubbling -> peristiwa yang terjadi pada sebuah elemen akan "merambat" ke elemen induknya
//? misal klik pada <p> maka event akan merambat ke <div> lalu ke <body> lalu ke <html>

// const close = document.querySelectorAll(".close"); // HTMLCollection -> NodeList mengambil semua close

// close.forEach(function (el) { // el = element
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     e.preventDefault(); // mencegah aksi default dari a
//     e.stopPropagation(); // menghentikan perambatan event / bubling
//   });
// });

// misal mempunyai event pada card
// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function (e) {
//     alert("ok");
//   });
// });

//* maka ketika klik close, yang muncul pertama adalah event pada card baru event pada close
//? gunakan stopPropagation() untuk menghentikan perambatan event

//! ini tidak efesien karena mempunyai banyak event listener

//? solusi
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  console.log(e.target); //? untuk mengetahui target dari event
  if (e.target.className == 'close') { //* kalau targetnya ada class close
    e.target.parentElement.style.display = "none";
    e.preventDefault(); // mencegah aksi default
  }
});