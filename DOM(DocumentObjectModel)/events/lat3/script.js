// ===========================
// SOAL LATIHAN DOM (25 Soal)
// ===========================

// ==========
// 1. Selector
// ==========
const secA = document.getElementById('a');
const secB = document.getElementById('b');

// 1. Ubah teks <h1 id="judul"> menjadi "Latihan DOM Lengkap"
const title = document.getElementById('judul');
title.innerHTML = 'Latihan DOM Lengkap';
// 2. Ubah warna teks semua <p> menjadi hijau
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.color = 'green';
};
// 3. Ubah background <p> kedua menjadi kuning
p[1].style.backgroundColor = 'yellow';
// 4. Ubah isi <p class="p1"> menjadi "Paragraf 1 dimodifikasi"
p[0].setAttribute('class', 'Paragraf 1 dimodifikasi');  //! → ini mengganti class, bukan isi teks. Jadi yang bener harusnya p[0].textContent = "Paragraf 1 dimodifikasi";
// 5. Pilih <li> ketiga di section#a dan ubah teksnya jadi "Item A3 Edited"
const li3 = secA.querySelector('ul li:nth-child(3)');
li3.innerHTML = 'Item A3 Edited';
// 6. Ubah semua <li> di section#b jadi berwarna biru muda (background)
const liB = secB.querySelectorAll('li');
for (let i = 0; i < liB.length; i++) {
    liB[i].style.backgroundColor = 'lightblue';
}
// 7. Gunakan querySelector untuk memilih <p> di section#b lalu ubah jadi miring (italic)
const pB = secB.querySelector('p');
pB.style.fontStyle = 'italic';
// 8. Tambahkan border merah ke semua paragraf (<p>)
for (let i = 0; i < p.length; i++) {
    p[i].style.border = '1px solid red';
};

// ===========================
// 2. Manipulasi Element & Node
// ===========================

// 9. Tambahkan atribut title="judul utama" pada <h1>
title.setAttribute('title', 'judul utama');
// 10. Tambahkan class "highlight" ke <h1>
title.setAttribute('class', 'highlight'); // kenapa pake setAttribute di sini? karena tidak ada class lain
// 11. Cek apakah <h1> punya class "highlight" (console.log hasil true/false)
console.log(title.hasAttribute('highlight'));
console.log(title.classList.contains('highlight')); //* ini yang benar untuk cek class "highlight" (console.log hasil true/false)
// kok hasilnya false?? di element web ada padahal
// 12. Buat <p> baru "Paragraf tambahan JS" lalu tambahkan di section A
const newp = document.createElement('p');
const textp = document.createTextNode('Paragraf tambahan JS');

newp.append(textp);
secA.append(newp);
// 13. Buat <li> baru "Item baru A" dan letakkan setelah Item A2
const newli = document.createElement('li');
const textli3 = document.createTextNode('Item baru A');
newli.append(textli3);

const li3A = secA.querySelector('ul li:nth-child(3)');

li3A.before(newli);
// 14. Hapus <a> di section A
const a = secA.getElementsByTagName('a')[0];
a.remove();
// 15. Ganti paragraf di section B dengan <h2> "Judul Baru JS"
const newh2 = document.createElement('h2');
const texth2 = document.createTextNode('Judul Baru JS');

newh2.append(texth2);

pB.replaceWith(newh2);
// 16. Buat <hr> dan sisipkan di antara section A dan section B
const hr = document.createElement('hr');
secB.before(hr);
// 17. Tambahkan 3 <li> baru sekaligus ke ul di section B (pakai loop)
const ulB = secB.querySelector('ul');

for (let i = 0; i < 3; i++) {
    const B3li = document.createElement('li');
    const isili = document.createTextNode(`li baru ${i + 1}`);
    B3li.append(isili);
    ulB.append(B3li);
}
// 18. Tambahkan class "biru-muda" ke body lalu toggle class tsb 2 kali
document.body.classList.toggle('biru-muda');
document.body.classList.toggle('biru-muda');

// ===========================
// 3. Event (Click dan lainnya)
// ===========================

// 19. Tambahkan event click pada <p class="p2"> untuk mengubah background jadi pink
function ubahWarna(){
    p2.style.backgroundColor = 'pink';
}
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;
// 20. Tambahkan event click pada <p class="p3"> untuk menambahkan teks " (clicked!)"
const p3 = document.querySelector('.p3');

p3.addEventListener('click', function() {
    p3.textContent += ' (clicked!)';
});
// 21. Tambahkan event click pada <p> di section B agar menambah 1 item baru "Item baru (klik)"
newh2.addEventListener('click', function() {
    const pBaru = document.createElement('p');
    const textpBaru = document.createTextNode('Item baru (klik)');

    pBaru.append(textpBaru);
    newh2.append(pBaru);
}); //tag p sudah berubah menjadi h2 pada soal 15
// 22. Tambahkan 2 event listener pada <h1>:
//     - klik pertama ubah warnanya jadi biru
const h1 = document.getElementsByTagName('h1')[0];
title.addEventListener('click', function(){
    title.style.color = 'blue';
});
//     - klik kedua ubah ukurannya jadi 50px
title.addEventListener('dblclick', function(){ // ni dblclick napa ga work di brave chrome bisa. lah jadi bisa. ini butuh waktu buat adaptasi dulu? woila harus keluar mode inspect
    title.style.fontSize = '50px';
});
// 23. Tambahkan event mouseenter pada <h1> agar background berubah kuning
title.addEventListener('mouseenter', function(){ // ni mouseenter napa ga work di brave chrome bisa. lah butuh waktu buat adaptasi dulu? woila harus keluar mode inspect
    title.style.backgroundColor = 'yellow';
});
// 24. Tambahkan event mouseleave pada <h1> agar background kembali transparan
title.addEventListener('mouseleave', function(){ 
    title.style.backgroundColor = 'transparent';
});
// 25. Tambahkan event double-click (dblclick) pada body agar seluruh teks di halaman berubah menjadi uppercase
document.body.addEventListener('dblclick', function(){
    document.body.style.textTransform = 'uppercase';
    console.log('The document body was clicked!');
});