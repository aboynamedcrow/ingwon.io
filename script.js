
//when the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

//get the navbar
var navbar = document.getElementsByClassName("navbar");

//get the offset position of the navbar
var sticky = navbar.offsetTop;

//add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

function stickyNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
    
}