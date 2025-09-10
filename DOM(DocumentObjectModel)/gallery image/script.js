// const bigImage = document.querySelector(".big");
// const thumbnails = document.querySelectorAll(".gallery-image");

// thumbnails.forEach((thumbnail) => {
//   thumbnail.addEventListener("click", (e) => {
//     thumbnails.forEach((t) => t.classList.remove("active"));
//     e.target.classList.add("active");
//     bigImage.src = e.target.src.replace("thumb_", "");
//   });
// });


const container = document.querySelector('.container');
const bigImage = document.querySelector(".big");
const thumbnails = document.querySelectorAll(".gallery-image");

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('gallery-image')) {
    bigImage.src = e.target.src;
    bigImage.classList.add('fade');
    setTimeout(function() {
      bigImage.classList.remove('fade');
    }, 500);

    thumbnails.forEach(function (t) {
      t.className = "gallery-image";
    });

    e.target.classList.add('active');
  }
});