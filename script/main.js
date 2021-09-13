const Header = document.querySelector("header");
const Body   = document.querySelector("body");
const Footer = document.querySelector("footer");
const buttonLight = document.getElementById("buttonLight");
const buttonDark  = document.getElementById("buttonDark");

const button = {
    light: buttonLight,
    dark : buttonDark,
};

function DarkMode() {
    Header.className = "dark";
    Body.className   = "dark";
    Footer.className = "dark";
    button.light.style.display  = "block";
    button.dark.style.display = "none";
}

function LightMode() {
    Header.className = "";
    Body.className   = "";
    Footer.className = "";
    button.dark.style.display  = "block";
    button.light.style.display = "none";
}