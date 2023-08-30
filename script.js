const images = [
  "./images/coffee.jpg",
  "./images/blackberry-mint-cucumber-gin-spritzer.jpg",
  "./images/blue-lagoon-mocktail.jpg",
  "./images/candy-cane-freakshake.jpg",
  "./images/brownie-milkshake.jpg",
  "./images/watermelon-lemonade.jpg",
  "./images/cookies-and-milk-milkshake.jpg",
  "./images/dreamy-caramel-milkshake.jpg",
  "./images/italian-lemonade.jpg",
  "./images/mango-dragonfruit-lemonade.jpg",
  "./images/raspberry-lemonade.jpg",
  "./images/lavender-lemonade.jpg",
  "./images/strawberry-boba.jpg",
  "./images/korean-green-plum-iced-tea.jpg",
  "./images/mocha-frapuccino.jpg",
  "./images/sparkling-strawberry-cucumber-mocktail.jpg",
  "./images/strawberry-cheescake-milkshake.jpg"
];

const names = [
  "Coffee",
  "Blueberry, Mint & Cucumber Gin spritzer",
  "Blue Lagoon Mocktail",
  "Candy Cane Freakshake",
  "Brownie Milkshake",
  "Watermelon Lemonade",
  "Cookies & Milk Milkshake",
  "Dreamy Caramel Milkshake",
  "Italian Lemonade",
  "Mango Dragonfruit Lemonade",
  "Raspberry Lemonade",
  "Lavender Lemonade",
  "Strawberry Boba",
  "Korean Green Plum Iced Tea",
  "Mocha Frapuccino",
  "Strawberry Cucumber Mocktail",
  "Strawberry Cheesecake Milkshake"
];

const imgHref = [
  "#coffee",
  "#blackberry-mint-cucumber-gin-spritzer",
  "#blue-lagoon-mocktail",
  "#candy-cane-freakshake",
  "#brownie-milkshake",
  "#watermelon-lemonade",
  "#cookies-and-milk-milkshake",
  "#dreamy-caramel-milkshake",
  "#italian-lemonade",
  "#mango-dragonfruit-lemonade",
  "#raspberry-lemonade",
  "#lavender-lemonade",
  "#strawberry-boba",
  "#korean-green-plum-iced-tea",
  "#mocha-frapuccino",
  "#sparkling-strawberry-cucumber-mocktail",
  "#strawberry-cheescake-milkshake",
];

let currentIndex = 0;


/* menu carousel  */
function changeSlide(step) {
  currentIndex += step;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  const imageName = document.getElementById("beverage-name");
  imageName.innerText = names[currentIndex];
  const sliderImage = document.getElementById("slider-image");
  sliderImage.src = images[currentIndex];
}


/* order field and dialog box  */
const orderNow = document.querySelector(".order-now");
const selectField = document.querySelector("#beverages");
const inputField = document.querySelector("#qty");
const showAlertButton = document.getElementById("show-alert");
const modal = document.querySelector(".modal");
const closeModalButton = document.getElementById("close-modal");
const successButton = document.getElementById("success");
const failButton = document.getElementById("fail");

showAlertButton.addEventListener("click", () => {
  if (selectField.value === '' || inputField.value === '') {
    modal.style.display = "flex";
    successButton.style.display = "none";
    failButton.style.display = "block";
  } else {
    modal.style.display = "flex";
    failButton.style.display = "none";
    successButton.style.display = "block";
  }
});

closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});




