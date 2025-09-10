// ===========================================
// SOAL LATIHAN DOM LENGKAP
// ===========================================

// 1. Jika tombol close (×) diklik → hapus card itu saja.
//    (Hint: e.target.parentElement.remove())
const closeBtn = document.querySelectorAll(".close");
closeBtn.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.parentElement.remove();
  });
});

// 2. Jika nama diklik → ubah background card jadi kuning.
const names = document.querySelectorAll(".nama");
names.forEach(function (el) {
  el.addEventListener("click", function (e) {
    //! ↓↓↓ wrong
    // e.target.style.backgroundColor = "yellow";

    e.target.parentElement.style.backgroundColor = "yellow";
  });
});

// 3. Jika nama diklik → tampilkan nomor telp di console.
//    (Hint: nextElementSibling)
names.forEach(function (el) {
  el.addEventListener("click", function (e) {
    console.log(e.target.nextElementSibling.nextElementSibling);
  });
});

// 4. Jika telp diklik → ubah isi nama (previousElementSibling) jadi "Tersentuh!"
const telp = document.querySelectorAll(".telp");
telp.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.previousElementSibling.previousElementSibling.innerHTML = "Tersentuh!";
  });
});

// 5. Jika tombol "Hitung Card Aktif" ditekan → tampilkan di console jumlah card yang masih ada.
const hitung = document.getElementById("hitung");

hitung.addEventListener("click", function (e) {
  const parent = e.target.parentElement;
  let jumlah = 0;
  for (let child of parent.children) {
    if (child.classList.contains("card")) jumlah++;
  }
  console.log("jumlah card aktif", jumlah);
});

// 6. Cegah link <a> ke Google agar tidak berpindah halaman.
//    (Hint: preventDefault)
const link = document.querySelector("#link");
//! salah ↓↓↓
link.addEventListener("click", function (e) {
  e.target.setAttribute("href", "");
  e.target.preventDefault();
  console.log("oke");
});

//! benar ↓↓↓
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Link dicegah!");
});

// 7. Event Bubbling:
//    - Tambahkan event listener di container.
//    - Jika yang diklik adalah card manapun, tampilkan teks "Card diklik!" di console.
//    (Hint: e.target.classList.contains('card'))
const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  // if (e.target.classList == "card") {
if (e.target.classList.contains("card")) {  //! lebih sefe jika nama class ada spasi
    console.log("Card diklik!");
  }
});
