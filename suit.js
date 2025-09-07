let a = 21;
let b = 10;

var more = true;
while (more) {
  var p = prompt("Pilih : kertas, gunting, batu").toLowerCase();
  var c = Math.random();

  if (c < 0.34) {
    c = "kertas";
  } else if (c >= 0.34 && c < 0.67) {
    c = "gunting";
  } else {
    c = "batu";
  }

  var hasil = '';
  if (p == c) {
    hasil = "Seri!";
  } else if (p == "kertas") {
    if (c == "gunting") {
      hasil = "Kalah!";
    } else {
      hasil = "Menang!";
    }
  } else if (p == "gunting") {
    // ternary
    hasil = c == "batu " ? "Kalah!" : "Menang!";
  } else if (p == "batu") {
    hasil = c == "kertas" ? "Kalah!" : "Menang!";
  } else {
    hasil = "salah masukin tag ituu";
  }

  // alert('Hello World!');

  alert("Kamu memilih " + p + " dan komputer memilih " + c + "\n" + "Hasilnya adalah kamu " + hasil);

  more = confirm('more??');
}