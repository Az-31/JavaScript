//? DOM Selection

//! document.getElementById() -> element
const title = document.getElementById('judul');
title.style.color = 'red';
title.style.fontSize = '40px';
title.style.backgroundColor = 'blue';
title.innerHTML = 'Inilah Dunia!';

//! document.getElementsByTagName() -> HTMLCollection (pakai index)
const p = document.getElementsByTagName('p');
const pp = document.getElementsByTagName('p')[0];
pp.style.backgroundColor = 'lightblue';
// array
p[2].style.backgroundColor = '#dcbbf0';
// for(let i = 0; i < p.length; i++) {
//     p[i].style.color = '#1c9205ff';
// }

//! getElementsByClassName   HTMLCollection (pakai index)
const p1 = document.getElementsByClassName('p1');
// array
p1[0].innerHTML = '<b>1. paragraf</b>';


// document.querySelector -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'blue'; 

const li3 = document.querySelector('section#b ul li:nth-child(3)');
li3.style.color = 'red';

//! querySelectorAll memilih semua element yang sesuai dengan selector/mrip dgn tagName

// node root -> document
const secB = document.getElementById('b');
const pB = secB.querySelector('p');
pB.style.backgroundColor = '#ffc626';
