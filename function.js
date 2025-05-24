function kubus(a,b){
    let volumeA;
    let volumeB;
    let total;

    volumeA = a*a*a;
    volumeB = b*b*b;

    total = volumeA + volumeB;

    return total;

}

console.log(kubus(8,3));
console.log(kubus(8,8));

function tambah (a,b) {
    return a + b;
}

let hasil = tambah (9,3);
console.log(hasil);


let angka1=parseInt(prompt("Masukkan angka 1 :"));
let angka2=parseInt(prompt("Masukkan angka 2 :"));
function penambahaan (angka1, angka2) {
    return angka1 + angka2;
}

let hasilnya = penambahaan (angka1, angka2);

alert('hasilnya adalah: ' + hasilnya);

console.log(' ==== ===== ==== ');

function plusPlus() {
    var hasil = 0;
    for (var i = 0; i < arguments.length; i++) {
        hasil = hasil += arguments[i];
    }
    return hasil;
}

var coba = plusPlus(1,2,3,4,5); // perhatikan, harusnya krn parameter cuma a dan b, maka yg 3 dan 4 (dst.) harusnya di abaikan.
console.log(coba);