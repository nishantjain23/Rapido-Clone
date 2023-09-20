let navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollValue = Math.floor(window.scrollY);

  //   console.log(scrollValue);

  if (scrollValue < 50) {
    navbar.classList.remove("ChangeBgcolor");
  } else {
    navbar.classList.add("ChangeBgcolor");
  }
});

var downlode = document.querySelector(".downlode");

const download_App = () => {
  downlode.classList.add("black_screen");
  document.querySelector("body").style.overflowY = "hidden";
};

const downlode_app_clode = () => {
  downlode.classList.remove("black_screen");
  document.querySelector("body").style.overflowY = "scroll";
};