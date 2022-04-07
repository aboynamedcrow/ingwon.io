//Toggle Dark Mode via localStorage
$(document).ready(function() {
    const darkSwitch = document.querySelector(".switch");

    console.log(darkSwitch);

    const currentTheme = localStorage.getItem("theme");

    console.log(currentTheme);

    if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    }

    darkSwitch.addEventListener("change", function () {

        let theme = "dark";
        
        if(this.checked) {
            theme = "dark";
            if (document.body.classList.contains("dark-theme")){
                theme = "dark";
            } else {
                document.body.classList.add("dark-theme");
            }}
            else {
            theme = ""
                if (document.body.classList.contains("dark-theme")){
                    document.body.classList.toggle("dark-theme");
                } else {
                    theme = "";
                }
            }
        localStorage.setItem("theme", theme);
        console.log(this);
    });
});



//NavBar Functions

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

 /*$(document).ready(function() {*/
  
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
      var height = $('#business-card').height();
      if ($(window).scrollTop() > height+5) {
        $('.navbar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < height+4) {
        $('.navbar').removeClass('navbar-fixed');
      }
    });
  /*});*/