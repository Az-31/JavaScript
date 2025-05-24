// let penumpang = [];

// let angkot = {
//     namaSupir: ['arman','maulana','kirizk'],
//     NamaAngkot: ['A1','A2','A3'],
//     tryek: ['cisayur - cisaur','cikuning - cibiru'],
//     namaPenumpang: [],
//     kas: 0
// }

function objectAngkot(namaSupir,tryek,penumpang, kas = 0) {
    this.namaSupir = namaSupir;
    this.tryek = tryek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
      
    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length == 0) {
            alert('angkot masih kosong.');
            return false;
        }
        for(let i = 0; i < this.penumpang.length; i++) {
            if(this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

let angkot = new objectAngkot('arman', ['cisayur','cisaur'],['maulana'], 3000);
let angkot1 = new objectAngkot('maulana',['cikuing','cibitu'],[]);
console.log(angkot);
console.log(angkot1);