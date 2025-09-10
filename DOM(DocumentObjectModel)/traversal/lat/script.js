// ==================================
// SOAL 1: Close button di card
// Klik tombol × maka hanya card itu yang hilang.
// (Hint: pakai e.target.parentElement.remove())
// ==================================
// const closeBtn = document.querySelector(".close");
// closeBtn.addEventListener("click", function (e) {
//   e.target.parentElement.remove();
// });
//! ↑↑↑ solo ini
const closeBtn = document.querySelectorAll(".close");
closeBtn.forEach(function (el) {
    el.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
});

// ==================================
// SOAL 2: Highlight nama yang diklik
// Kalau nama diklik → ubah warna background card jadi kuning
// ==================================
const names = document.querySelectorAll(".nama");

names.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.style.backgroundColor = "yellow";
    // console.log(el);
  });
});

// ==================================
// SOAL 3: Navigasi ke sibling
// Kalau nama diklik → tampilkan nomor telp di console
// (Hint: e.target.nextElementSibling)
// ==================================
names.forEach(function (el) {
  el.addEventListener("click", function (e) {
    console.log(e.target.nextElementSibling);
  });
});

// ==================================
// SOAL 4: Hitung jumlah card aktif
// Klik tombol "Hitung Card Aktif" → console.log jumlah card yang masih tampil
// ==================================
const hitung = document.getElementById("hitung");
const cards = document.querySelectorAll(".card");
hitung.addEventListener("click", function () {
  console.log(cards.length);
});
//! ↑↑↑ jban kurang tepat atau bahkan salah karena bukan traversal

hitung.addEventListener("click", function (e) {
  console.log("jumlah card aktif", e.target.previousElementSibling.children.length);
});

// ==================================
// SOAL 5: Previous sibling check
// Kalau telp diklik → ubah isi nama jadi "Tersentuh!"
// (Hint: e.target.previousElementSibling)
// ==================================
const telp = document.querySelectorAll(".telp");

telp.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.previousElementSibling.innerHTML = "Tersentuh!";
    // console.log(e.target.previousElementSibling);
  });
});
