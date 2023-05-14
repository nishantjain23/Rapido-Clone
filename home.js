// To change the nav color while scrolling

let navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    const scrollValue = Math.floor(window.scrollY);
    // declaring the scrollValue as const so that it cant be later modified

    if (scrollValue < 50) {
        navbar.classList.remove("change_nav_col")
    }
    else {
        navbar.classList.add("change_nav_col")
    }
});

// To change the button color and the content when tapped

const btnone = () => {
    document.getElementById("pg4_two_hide").style.display = "none";
    document.getElementById("pg4_one_hide").style.display = "block";
    document.getElementById("pg4_btn1").style.backgroundColor = "#f9c935";
    document.getElementById("pg4_btn1").style.border = "2px solid #f9c935";
    document.getElementById("pg4_btn2").style.backgroundColor = "white";
    document.getElementById("pg4_btn2").style.border = "2px solid #0000001a";

}
const btntwo = () => {
    document.getElementById("pg4_two_hide").style.display = "block";
    document.getElementById("pg4_one_hide").style.display = "none";
    document.getElementById("pg4_btn1").style.backgroundColor = "white";
    document.getElementById("pg4_btn1").style.border = "2px solid #0000001a";
    document.getElementById("pg4_btn2").style.backgroundColor = "#f9c935";
    document.getElementById("pg4_btn2").style.border = "2px solid #f9c935";
}

var pg5_customer = document.getElementById("pg5_customer")
var pg5_captain = document.getElementById("pg5_captain")

const show = () => {
    pg5_customer.style.display = "block"
    pg5_captain.style.display = "none"
    document.getElementById("pg5_btn1").style.backgroundColor = "#f9c935";
    document.getElementById("pg5_btn1").style.border = "2px solid #f9c935";
    document.getElementById("pg5_btn2").style.backgroundColor = "white";
    document.getElementById("pg5_btn2").style.border = "2px solid #0000001a";
}
const hide = () => {
    pg5_customer.style.display = "none"
    pg5_captain.style.display = "block"
    document.getElementById("pg5_btn1").style.backgroundColor = "white";
    document.getElementById("pg5_btn1").style.border = "2px solid #0000001a";
    document.getElementById("pg5_btn2").style.backgroundColor = "#f9c935";
    document.getElementById("pg5_btn2").style.border = "2px solid #f9c935";
}

// for getting the black screen when tapped on dwnld_app and sign_up btn

var download = document.querySelector(".download");
const dwnld_app = () => {
    download.classList.add("black_screen")
    document.querySelector("body").style.overflowY = "hidden";

    // P.S. : The purpose of overflowY or overflowX  is to get the scroll bar and when its hidden then it will be removed from the screen. 

}
const dwnld_app_close = () => {
    download.classList.remove("black_screen")
    document.querySelector("body").style.overflowY = "scroll";
}

var sign_up = document.getElementById("sign_up");
const signup = () => {
    sign_up.classList.add("black_screen")
    sign_up.style.display = "block"
    document.querySelector("body").style.overflowY = "hidden";
}
const signup_close = () => {
    sign_up.classList.remove("black_screen")
    sign_up.style.display = "none"
    document.querySelector("body").style.overflowY = "scroll";
}