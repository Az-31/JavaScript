function getPilihanKomputer() {
  const rand = Math.random();
  if (rand < 0.34) return "kertas";
  if (rand < 0.67) return "gunting";
  return "batu";
}

function getHasil(player, komputer) {
  if (player === komputer) return "Seri!";
  if (player === "kertas") return komputer === "gunting" ? "Kalah!" : "Menang!";
  if (player === "gunting") return komputer === "batu" ? "Kalah!" : "Menang!";
  if (player === "batu") return komputer === "kertas" ? "Kalah!" : "Menang!";
  return "Pilihan tidak valid!";
}

function animasiKomputer() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["kertas", "gunting", "batu"];
  let i = 0;
  const start = Date.now();
  return setInterval(() => {
    if (Date.now() - start > 1000) {
      clearInterval(this);
      return;
    }
    imgKomputer.setAttribute("src", `img/${gambar[i++]}.png`);
    if (i === gambar.length) i = 0;
  }, 100);
}

let scorePlayer = 0;
let scoreKomputer = 0;

function updateScore(playerScore, komputerScore) {
  document.getElementById("score-player").textContent = playerScore;
  document.getElementById("score-komputer").textContent = komputerScore;
}

function resetInfo() {
  const info = document.querySelector(".info");
  info.textContent = "";
  info.className = "info";
}

function tampilkanHasil(hasil) {
  const info = document.querySelector(".info");
  info.textContent = hasil;
}

document.querySelectorAll(".area-player img").forEach((img) => {
  img.addEventListener("click", function () {
    const pilihanPlayer = this.className;
    const imgKomputer = document.querySelector(".img-komputer");
    resetInfo();
    let interval = animasiKomputer();
    setTimeout(() => {
      clearInterval(interval);
      const pilihanKomputer = getPilihanKomputer();
      imgKomputer.setAttribute("src", `img/${pilihanKomputer}.png`);
      const hasil = getHasil(pilihanPlayer, pilihanKomputer);
      tampilkanHasil(hasil);
      if (hasil === "Menang!") scorePlayer++;
      else if (hasil === "Kalah!") scoreKomputer++;
      updateScore(scorePlayer, scoreKomputer);
    }, 1000);
  });
});
