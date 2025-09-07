const lb = document.querySelector('label');
const ipt = document.querySelector('input');
const check = document.getElementsByClassName('checkbox');

ipt.addEventListener('click', function() {
    document.body.classList.toggle('ch-color');
});

const br = document.createElement('br');
const chColor = document.createElement('button');
const textBtn = document.createTextNode('Random Color');

chColor.append(textBtn);
chColor.setAttribute('type', 'button');
lb.after(br);
br.after(chColor);

chColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

// const sRed = document.querySelector('input[name=sRed]');

// sRed.addEventListener('change', function() {
//     const r = sRed.value;
//     document.body.style.backgroundColor = 'rgb(' + r + ', 0, 0)';
// });

const SWarna = document.getElementsByClassName("sWarna"); //tangkap semua slider, sebelumnya dikasih class sWarna untuk semua slider
//cek event value masing-masing slider dengan loop
for (let i = 0; i < SWarna.length; i++) {
  SWarna[i].addEventListener("input", function () {
    const r = SWarna[0].value; //menangkap value r
    const g = SWarna[1].value; //menangkap value g
    const b = SWarna[2].value; //menangkap value b
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    // console.log(r, g, b); //cek console rgb
  });
}

document.body.addEventListener("mousemove", (e) => {
  const posX = Math.round((e.clientX / window.innerWidth) * 255);
  const posY = Math.round((e.clientY / window.innerWidth) * 255);
//   const green = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = `rgb(${posX}, ${posY}, ${10})`;
});