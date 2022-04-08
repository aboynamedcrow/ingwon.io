
//Toggle Dark Mode via localStorage
$(document).ready(function() {
    var darkSwitch = document.querySelector(".power-switch input[type='checkbox']");

    const currentTheme = localStorage.getItem("theme");

    if (currentTheme == "dark-theme") {
    darkSwitch.checked = true;
    document.body.classList.add("dark-theme");
    }

    darkSwitch.addEventListener("change", function () {

        let theme = "dark-theme";

        if(this.checked) {
            theme = "dark-theme";
            if (document.body.classList.contains("dark-theme")){
                theme = "dark-theme";
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
    });
});