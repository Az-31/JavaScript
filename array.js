let array = ['jamal', 'ludin', 'surya', true, '50:50', [1, 2, 3]];

console.log(array[5][0]); 

var arr = [1, 2, 3, 4, 5];
// join
console.log(arr.join(' - '));
// length
console.log(arr.length);
// push=menambahkan di akhir || unshift=di awal 
arr.push(90);
console.log(arr);
// pop=menghapus indx akhir || shift=menghapus di awal
arr.pop();
arr.pop();
console.log(arr);

let name = ['sudo', 'surya', 'ludin', 'jamal'];
for(let i = 0; i < name.length; i++) {
    console.log('Nama ke-' + (i+1) + ' ' + name[i]);
}
// forEach
let nmber = [1, 2, 3, 4, 5, 6, 7];
// nmber.forEach(function(m) {
//     console.log(m);
// });

nmber.forEach(element => {
    console.log(element);
});