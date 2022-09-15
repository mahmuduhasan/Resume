const inputEl = document.querySelector(".input");
const hOneEl = document.querySelector("h1");
const hTwoEl = document.querySelectorAll("h2");
const pEl = document.querySelectorAll("p");
const liEl = document.querySelectorAll("li");
const aEl = document.querySelectorAll("a");

inputEl.checked = false;

updateContent();

function updateContent() {
  if (inputEl.checked) {
    document.body.style.backgroundColor = "black";
    hOneEl.style.color = "white";
    hTwoEl.forEach((e) => (e.style.color = "white"));
    pEl.forEach((e) => (e.style.color = "white"));
    liEl.forEach((e) => (e.style.color = "white"));
    aEl.forEach((e) => (e.style.color = "white"));
  } else {
    document.body.style.backgroundColor = "white";
    hOneEl.style.color = "black";
    hTwoEl.forEach((e) => (e.style.color = "black"));
    pEl.forEach((e) => (e.style.color = "black"));
    liEl.forEach((e) => (e.style.color = "black"));
    aEl.forEach((e) => (e.style.color = "black"));
  }
}

inputEl.addEventListener("input", () => {
  updateContent();
});
