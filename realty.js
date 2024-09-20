const realtyPriceBtn = document.querySelector(".realty__price");
const realtyInputs = document.querySelector(".realty__inputs");
const realtyPriceBracket = document.querySelector(".realty__price-img");

if (realtyPriceBtn) {
  realtyPriceBtn.addEventListener("click", () => {
    realtyInputs.classList.toggle("active");
    realtyPriceBracket.classList.toggle("active");
  });
}

const swiperRealty = new Swiper(".realty__swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
