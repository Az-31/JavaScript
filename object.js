let mhs1 = {
    nama: "Aksara",
    nim: "12345678",
    kelas: "TI-2A",
    jurusan: "Teknik Informatika"
}
console.log(mhs1);

function ObjectMahasiswa(nama, nim, kelas, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.kelas = kelas;
    mhs.jurusan = jurusan;
    return mhs;
}
let mhs2 = ObjectMahasiswa("Budi", "87654321", "TI-2B", "Sistem Informasi");
console.log(mhs2);

// constructor
function Mahasiswa(nama, nim, kelas, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
    this.jurusan = jurusan;
}

let mhs3 = new Mahasiswa("Siti", "13579246", "TI-2C", "Teknik Komputer");
console.log(mhs3);
