const ratingsContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let ratingComment = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    ratingComment = e.target.nextElementSibling.innerHTML;
  }
});

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove("active"));
}

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${ratingComment}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});
