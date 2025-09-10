// const cards = document.querySelector('.card');
// const closes = document.querySelector('.close');

// closes.addEventListener('click', function() {
//     cards.remove();
// cards.style.display = 'none';  // same but different
// });

//! ↑ atas tidak bisa kalau ada banyak card

//* maka gunakan DOM Traversal
//? DOM Traversal adalah teknik untuk menavigasi DOM (naik, turun, ke samping) untuk memilih elemen yang diinginkan

const close = document.querySelectorAll(".close"); // HTMLCollection -> NodeList mengambil semua close
// const cards = document.querySelectorAll('.card'); //! ini bukan DOM Traversal

// for (let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(e) {
// cards[i].remove(); //! ini bukan DOM Traversal
// close[i].parentElement.remove(); //? ini DOM Traversal (naik ke parent lalu di remove/display none bisa)
// ↑↑↑ pengulangan bisa dihindari dengan mengisi parameter event(e) pada function
// console.log(e); //? banyak info sekaligus target dari event
//         e.target.parentElement.style.display = 'none'; // cari target dari event lalu naik ke parentElement
//     });
// }

//? versi dengan forEach
//* pakai forEach kalau ingin loop tanpa break
close.forEach(function (el) {
  // el = element
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

//? DOM Traversal         

//! Method                  Hasil
//? parentNode              node
//* parentElement           element
//? nextSibling             node
//* nextElementSibling      element
//? previousSibling         node
//* previousElementSibling  element


const name = document.querySelector(".nama");
console.log(name.parentElement); //? naik ke parent
console.log(name.parentElement.parentElement); //? naik ke parent lagi
console.log(name.nextSibling); //? ke next (text node)
console.log(name.nextElementSibling); //? ke next (telp)
console.log(name.previousElementSibling); //? ke previous (img)
console.log(name.nextElementSibling.nextElementSibling); //? ke next lagi (close)