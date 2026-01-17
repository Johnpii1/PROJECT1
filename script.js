//FOR MENU BUTTON DROPDOWN FOR MOBILE ONLY 
const btn = document.getElementById("btns");
const menus = document.getElementById("menu");
const closes = document.getElementById("close");

btn.addEventListener("click", () => {
menus.classList.toggle("hidden");
});

closes.addEventListener("click", () => {
    menus.classList.toggle("hidden");
});
