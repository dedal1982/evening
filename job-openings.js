const jobInnerItems = document.querySelectorAll(".job-openings__inner");

jobInnerItems.forEach((item) => {
  const telVisibleBtn = item.querySelector(".job-openings__tel");
  const telVisible = telVisibleBtn.querySelector(".tel-visible");
  const telHidden = telVisibleBtn.querySelector(".tel-hidden");
  telVisibleBtn.addEventListener("click", () => {
    telVisible.classList.toggle("active");
    telHidden.classList.toggle("active");
  });
  const titleImg = item.querySelector(".job-openings__title-img");
  titleImg.addEventListener("click", () => {
    titleImg.classList.toggle("active");
  });
});
