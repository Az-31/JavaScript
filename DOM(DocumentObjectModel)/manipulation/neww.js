//! element
// set attribute
// set, get, remove
const jdul = document.getElementsByTagName('h1')[0];
jdul.setAttribute('class', 'judul'); //membuat attribut class

// classlist
// add(), remove(), toggle(), item(), contains(), replace()
jdul.classList.add('label');
document.body.classList.toggle('biru-muda'); //true
document.body.classList.toggle('biru-muda'); //false
document.body.classList.toggle('biru-muda'); //true

//! node
// menambahkan p baru di secA
// bikin tag => bikin tulisan yang akan dimasukkan => masukkan tulisan ke4 tag
const newp = document.createElement('p');
const newTextp = document.createTextNode('paragraf javascript');
// simpan teks baru ke tag p baru
newp.append(newTextp); // append -- simpan diakhir element
// simpan p ke secA di akhir/bawah
const secA = document.getElementById('a');
secA.append(newp);

// buat tag baru antara li 1 dan li 2
const newli = document.createElement('li');
const nTextli = document.createTextNode('list javasript');
newli.append(nTextli);

const ul = document.querySelector('section#b ul'); // cari parent li
const li2 = ul.querySelector('li:nth-child(2)');

li2.before(newli); // tambahkan node baru sebelum

// menghapus link/<a>
const link = document.getElementsByTagName('a')[0];
link.remove(); // secA = parent, link child

// mengubah/menggantikan node
const secB = document.getElementById('b');
const p4 = secB.querySelector('p');

const newh2 = document.createElement('h2');
const newTexth2 = document.createTextNode('judul javascript');

newh2.append(newTexth2);

p4.replaceWith(newh2);