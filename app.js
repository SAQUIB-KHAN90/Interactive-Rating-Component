const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thankyou");
const ratings = document.querySelectorAll(".rating span");
const button = document.querySelector(".btn");
const rate = document.getElementById("rate");
let rates = null;

ratings.forEach((rating) => {
  rating.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    rates = e.target.innerText;
  });
});

button.addEventListener("click", () => {
  if (rates) {
    rate.innerText = rates;
    mainContainer.classList.add("hidden");
    thankYou.classList.remove("hidden");
  }
});
