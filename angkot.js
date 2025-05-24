var jmlAngkot = 10;
var angkotOperasi = 6;
var noAngkot = 1;

// while(noAngkot <= angkotOperasi){
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');                               
// noAngkot++;
// }

// for(angkotOperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    //     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    // }
    
    
    
for(;noAngkot <= jmlAngkot; noAngkot++) {
    if(noAngkot <= angkotOperasi && noAngkot !== 5 && noAngkot !=1) { // !== tidak sama dengan
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.'); 
    }else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.')                           
    // }else if(noAngkot === 10){
    //     console.log('Angkot No. ' + noAngkot + ' sedang lembur.')                           
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}  
    