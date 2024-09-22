const telVisibleBtn = document.querySelector(".job-openings__tel");
const telVisible = document.querySelector(".tel-visible");
const telHidden = document.querySelector(".tel-hidden");

if (telVisibleBtn) {
  telVisibleBtn.addEventListener("click", () => {
    telVisible.classList.toggle("active");
    telHidden.classList.toggle("active");
  });
}

const jobInnerItems = document.querySelectorAll(".job-openings__inner");

jobInnerItems.forEach((item) => {
  const titleImg = item.querySelector(".job-openings__title-img");
  titleImg.addEventListener("click", () => {
    titleImg.classList.toggle("active");
  });
});
