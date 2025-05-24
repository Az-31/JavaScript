function tes(){
    a = 2;
}

tes();
console.log(a);

console.log("=======");
// ? Rekursif
function angka(n) {
    if (n == 0) {
        return;
    }
    console.log(n);
    angka(n-1);
}

angka(10);
