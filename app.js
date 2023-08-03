
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  item.addEventListener("click", function() {
    this.classList.toggle("active");

    const accordionText = this.querySelector(".accordion-text");
    if (accordionText.style.display === "block") {
      accordionText.style.display = "none";
    } else {
      accordionText.style.display = "block";
    }
    const icon = this.querySelector("i");
    icon.classList.toggle("rotate-icon");
  });
});
