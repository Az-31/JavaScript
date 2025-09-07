//! event handler  <-- akan menimpa event yang lama
// inline html attribute --> harus menyentuh html
const p3 = document.querySelector('.p3');
function ubahWarnaP3(){
    p3.style.backgroundColor = '#eb7878';
}

function ubahWarnaP2(){
    p2.style.backgroundColor = 'lightblue';
}
// element method  <-- tanpa menyentuh html
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;

//! addEventListener() <-- bisa banyak event
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    // alert('ok');
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textliBaru = document.createTextNode('item baru');
    liBaru.append(textliBaru);
    ul.append(liBaru);
});
