const radioButtons = document.querySelectorAll(".toggle__wrapper input");
const body = document.querySelector("body");
const lightRadioButton = document.getElementById("light");
const darkRadioButton = document.getElementById("dark");

const getColorMode = () => {
  let colorMode = localStorage.getItem("colorMode");
  if (!colorMode) {
    body.classList = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } else body.classList = colorMode;

  if (body.classList[0] === "dark") {
    darkRadioButton.checked = true;
  } else if (body.classList[0] === "light") {
    lightRadioButton.checked = true;
  }
};

const toggleDarkMode = () => {
  if (document.getElementById("dark").checked) {
    body.classList = "dark";
    localStorage.setItem("colorMode", "dark");
  } else {
    body.classList = "light";
    localStorage.setItem("colorMode", "light");
  }
};

radioButtons.forEach((element) => {
  element.addEventListener("click", toggleDarkMode);
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", getColorMode);

getColorMode();
