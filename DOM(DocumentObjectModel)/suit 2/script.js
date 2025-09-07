// Helper untuk pilihan komputer
function getPilihanKomputer() {
  const comp = Math.random();
  let hasil;
  if (comp < 0.34) hasil = "kertas";
  else if (comp >= 0.34 && comp < 0.67) hasil = "gunting";
  else hasil = "batu";
  //   console.log("[DEBUG] Pilihan komputer (random):", hasil);
  return hasil;
}

// Helper untuk menentukan hasil
function getHasil(player, comp) {
  let hasil;
  if (player === comp) hasil = "Seri!";
  else if (player === "kertas") hasil = comp === "gunting" ? "Kalah!" : "Menang!";
  else if (player === "gunting") hasil = comp === "batu" ? "Kalah!" : "Menang!";
  else if (player === "batu") hasil = comp === "kertas" ? "Kalah!" : "Menang!";
  else hasil = "Pilihan tidak valid!";
  //   console.log(`[DEBUG] Hasil: Player=${player}, Komputer=${comp}, Hasil=${hasil}`);
  return hasil;
}

// Helper untuk animasi gambar komputer
function putarGambarKomputer() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["kertas", "gunting", "batu"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  //   console.log("[DEBUG] Mulai animasi gambar komputer");
  return setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval(this);
      //   console.log("[DEBUG] Selesai animasi gambar komputer");
      return;
    }
    imgKomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i === gambar.length) i = 0;
  }, 100);
}

let scorePlayer = 0;
let scoreKomputer = 0;

const pilihan = document.querySelectorAll(".area-player img");
pilihan.forEach(function (p) {
  p.addEventListener("click", function () {
    const pilihanPlayer = this.className;
    const imgKomputer = document.querySelector(".img-komputer");
    const info = document.querySelector(".info");
    const scorePlayerEl = document.getElementById("score-player");
    const scoreKomputerEl = document.getElementById("score-komputer");

    // Hilangkan info hasil saat suit dimulai
    info.textContent = "";

    // animasi gambar komputer
    let interval = putarGambarKomputer();

    setTimeout(function () {
      clearInterval(interval);
      const pilihanKomputer = getPilihanKomputer();
      imgKomputer.setAttribute("src", "img/" + pilihanKomputer + ".png");
      const hasil = getHasil(pilihanPlayer, pilihanKomputer);
      info.textContent = hasil;

      // Update score
      if (hasil === "Menang!") {
        scorePlayer++;
      } else if (hasil === "Kalah!") {
        scoreKomputer++;
      }
      scorePlayerEl.textContent = scorePlayer;
      scoreKomputerEl.textContent = scoreKomputer;
    }, 1000);
  });
});
