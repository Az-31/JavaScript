// Gunakan getElementById untuk:
// Mengubah warna teks #judul menjadi hijau.
const title = document.getElementById('judul');
title.style.color = 'green';
// Ubah teksnya menjadi "Selamat Datang di DOM!".
title.innerHTML = 'Selamat Datang di DOM!';

// Gunakan getElementsByTagName untuk:
// Memberi background kuning pada semua elemen <p>.
const p = document.getElementsByTagName('p');
for (let i = 0; i < p.length; i++) {
    p[i].style.color = '#e5a800ff';
}
// Memberi teks tebal hanya pada paragraf kedua.
p[1].style.fontWeight = 'bold';

// Gunakan getElementsByClassName untuk:
// Mengubah isi p1 menjadi "Paragraf pertama diubah lewat DOM".
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Paragraf pertama diubah lewat DOM';

// Gunakan querySelector untuk:
// Memilih <li> ketiga pada section#a lalu ubah warnanya jadi merah.
const li3 = document.querySelector('section#a ul li:nth-child(3)'); 
li3.style.color = 'red';

// Gunakan querySelectorAll untuk:
// Memilih semua <li> di section#b lalu ubah warna background jadi lightblue.
const secB = document.getElementById('b');
const li = secB.querySelectorAll('li');
for (let j =0; j < li.length; j++) {
    li[j].style.backgroundColor = 'lightblue';
}
