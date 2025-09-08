const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  freeMode: true,
  slidesPerView: "auto",
  spaceBetween: 40,
});

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.querySelector(".answer");
    const dash = question.querySelector(".dash-vert");
    answer.classList.toggle("active");
    dash.classList.toggle("active");
  });
});
