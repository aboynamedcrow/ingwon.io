
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

/* $(document).ready(function() {
  
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
  });*/