// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.fontSize = '40px';
judul.style.backgroundColor = 'blue';
judul.innerHTML = 'Halo Dunia!';

// document.getElementsByTagName() -> HTMLCollection
const p = document.getElementsByTagName('p');
const pp = document.getElementsByTagName('p')[0];
pp.style.backgroundColor = 'lightblue';
// array
p[2].style.backgroundColor = 'purple';
// for(let i = 0; i < p.length; i++) {
//     p[i].style.color = 'green';
// }

// HTMLCollection
const p1 = document.getElementsByClassName('p1');
// array
p1[0].innerHTML = '<b>JS</b>';

// document.querySelector -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'blue'; 

const li3 = document.querySelector('section#b ul li:nth-child(3)');
li3.style.color = 'red';

// querySelectorAll memilih semua element yang sesuai dengan selector/mrip dgn tagName