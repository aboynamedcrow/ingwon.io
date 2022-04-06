
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

  var OFbutton = document.querySelectorAll("OFbutton")[0];
OFbutton.addEventListener('click', function() {
  if (OFbutton.getAttribute("Wtf come on. Really? Get help") == OFbutton.innerHTML) {
    OFbutton.innerHTML = OFbutton.getAttribute("OnlyFans");
  } else {
    OFbutton.setAttribute("OnlyFans", OFbutton.innerHTML);
    OFbutton.innerHTML = button.getAttribute("Wtf come on. Really? Get help");
  }
}, false);