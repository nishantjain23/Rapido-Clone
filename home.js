//  // To change the nav color while scrolling

//  let navbar = document.getElementById("navbar");
//  window.addEventListener("scroll", () => {
//      const scrollValue = Math.floor(window.scrollY);
//      // declaring the scrollValue as const so that it cant be later modified

//      if (scrollValue < 50) {
//          navbar.classList.remove("change_nav_col")
//      }
//      else {
//          navbar.classList.add("change_nav_col")
//      }
//  });

//  // To change the button color and the content when tapped

//  const btnone = () => {
//      document.getElementById("pg4_two_hide").style.display = "none";
//      document.getElementById("pg4_one_hide").style.display = "block";
//      document.getElementById("pg4_btn1").style.backgroundColor = "#f9c935";
//      document.getElementById("pg4_btn1").style.border = "2px solid #f9c935";
//      document.getElementById("pg4_btn2").style.backgroundColor = "white";
//      document.getElementById("pg4_btn2").style.border = "2px solid #0000001a";

//  }
//  const btntwo = () => {
//      document.getElementById("pg4_two_hide").style.display = "block";
//      document.getElementById("pg4_one_hide").style.display = "none";
//      document.getElementById("pg4_btn1").style.backgroundColor = "white";
//      document.getElementById("pg4_btn1").style.border = "2px solid #0000001a";
//      document.getElementById("pg4_btn2").style.backgroundColor = "#f9c935";
//      document.getElementById("pg4_btn2").style.border = "2px solid #f9c935";
//  }

//  var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 2,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });