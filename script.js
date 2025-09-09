const swiper = new Swiper(".swiper", {
  spaceBetween: 40,
  loop: false,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.querySelector(".answer");
    const dash = question.querySelector("question");
    answer.classList.toggle("active");
    question.classList.toggle("active");
  });
});
