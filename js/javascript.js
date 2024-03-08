function setActive(element) {
  var links = document.querySelectorAll(".header-link");
  links.forEach(function (item) {
    item.classList.remove("active");
  });
  element.classList.add("active");
}
