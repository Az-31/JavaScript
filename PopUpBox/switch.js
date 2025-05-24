// var ulang = true;
// while(ulang) {
//     console.log("Hello World");
    //     ulang = confirm("more?");
// } 

// var nilai = 1; //tentukan nilai awal dulu
// while(nilai <= 10){
//     console.log('Hello world! ' + nilai + 'x');
//     nilai++;
// }

// for(var nilai = 1; nilai <= 10; nilai++){
//     console.log('Hello world');
// }

// var angka = prompt('Masukkan angka:');
// if(angka % 2 == 0){
//     alert(angka + ' adalah bilangan genap.');
// } else if(angka % 2 ==1){
//     alert(angka + ' adalah bilangan ganjil.')
// } else{
//     alert(' yang anda masukkan bukan angka.')
// }


var item = prompt("masukan nama makanan / minuman : \n (contoh: roti, daging, sayuran, burger, frozen food, sorfdrink)");
switch(item) {
    case "roti":
    //     alert("makanan / minuman SEHAT!")
    // break;
    case "daging":
    //     alert("makanan / minuman SEHAT!")
    // break;
    case "sayuran":
        alert("makanan SEHAT!")
    break;

    case "burger":
    //     alert("makanan / minuman TIDAK SEHAT!")
    // break;
    case "frozen food":
    //     alert("makanan / minuman TIDAK SEHAT!")
    // break;
    case "softdrink":
        alert("makanan / minuman TIDAK SEHAT!")
    break;
    
    default:
        alert("makanan / minuman salah")
}
