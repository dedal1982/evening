const newsPopup = document.querySelector(".news-popup");
const newsPopupClose = document.querySelector(".news-popup-close");
const newsPopupInner = document.querySelector(".news-popup-inner");
const newsContainerInner = document.querySelectorAll(".news__container-inner");

if (newsContainerInner) {
  newsContainerInner.forEach((item) => {
    const newsElement = item.querySelector(".news__container-text");
    newsElement.addEventListener("click", () => {
      newsPopup.classList.add("active");
      newsPopupInner.textContent = newsElement.textContent;
    });
  });
}
if (newsPopupClose) {
  newsPopupClose.addEventListener("click", () => {
    newsPopup.classList.remove("active");
  });
}
//перебор кнопок навигации
const newsNavList = document.querySelectorAll(".news__nav-list li");

if (newsNavList) {
  newsNavList.forEach((item) => {
    item.addEventListener("click", () => {
      newsNavList.forEach((elem) => {
        elem.classList.remove("active");
        item.classList.add("active");
      });
    });
  });
}

//функция переключения табов
const makeCodeUniversal = (
  tabItemsQuery,
  formItemsQuery,
  tabClassName = "active"
) => {
  const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
  const formItems = Array.from(document.querySelectorAll(formItemsQuery));

  const clearActiveTabs = (element) => {
    element.find((item) => item.classList.remove(tabClassName));
  };

  const setActiveTab = (element, index) => {
    element[index].classList.add(tabClassName);
  };

  const chekTab = (item, index) => {
    item.addEventListener("click", () => {
      clearActiveTabs(tabItems);
      clearActiveTabs(formItems);

      setActiveTab(tabItems, index);
      setActiveTab(formItems, index);
    });
  };
  tabItems.forEach(chekTab);
};
// /*табы / секция Наши реализованные проекты*/
makeCodeUniversal(".news__nav-list li", ".news__container");
