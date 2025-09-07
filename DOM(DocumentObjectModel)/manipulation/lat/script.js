// ===========================
// SOAL LATIHAN DOM MANIPULASI
// ===========================

// 1. Manipulasi atribut & class
// a) Tambahkan atribut title="ini judul utama" pada <h1>
const h1 = document.getElementsByTagName('h1')[0];
h1.setAttribute('title', 'ini judul utama');
// b) Tambahkan class "highlight" ke <h1>
h1.setAttribute('class', 'highlight')
// c) Cek apakah <h1> punya class "highlight", lalu console.log hasilnya
// h1.getAttribute('class') <-- ini cek di console browser
// 'highlight'
console.log(h1.getAttribute('class'));
// highlight <--hasil dari console.log

// 2. Menambah elemen baru
// a) Buat <p> baru dengan isi "Paragraf tambahan dari JavaScript"
const pBaru = document.createElement('p');
const textpBaru = document.createTextNode('Paragraf tambahan dari JavaScript');
pBaru.appendChild(textpBaru);
//    lalu tambahkan di akhir section A
const secA = document.getElementById('a');
secA.append(pBaru);
// b) Buat <li> baru dengan isi "Item baru JS"
const liBaru = document.createElement('li');
const textliBaru = document.createTextNode('Item baru JS');
liBaru.appendChild(textliBaru);
//    lalu sisipkan di antara Item 1 dan Item 2 di section B
const secB = document.getElementById('b');
const li2 = secB.querySelector('ul li:nth-child(2)');
li2.before(liBaru);

// 3. Menghapus elemen
// a) Hapus link <a> yang ada di section A
const a = secA.getElementsByTagName('a')[0];
a.remove();

// 4. Mengganti elemen
// a) Ganti paragraf di section B dengan elemen <h2>
//    berisi teks "Ini Judul Baru dari JavaScript"
const h2Baru = document.createElement('h2');
const texth2Baru = document.createTextNode('Ini Judul Baru dari JavaScript');
h2Baru.append(texth2Baru);

const pB = secB.getElementsByTagName('p')[0];

pB.replaceWith(h2Baru);

const pemisahSecAsecB = document.createElement('hr');
secB.before(pemisahSecAsecB);