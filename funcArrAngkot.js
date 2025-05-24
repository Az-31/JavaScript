let penumpang = [];

let tambahPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (let i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log("Penumpang " + namaPenumpang + " sudah naik.")
                return penumpang;
            } else if(i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
       }
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang) {
    if(penumpang.length == 0) {
        console.log("Angkot kosong.");
        return penumpang;
    } else {
        for(let i = 0; i < penumpang.length; i++) {
            if(penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
            } else if(i == penumpang.length - 1){
                console.log("Penumpang " + namaPenumpang + " tidak ada di dalam.");
                return penumpang;
            }
        }
    }
}