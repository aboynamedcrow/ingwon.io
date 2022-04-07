
//Toggle Dark Mode via localStorage
/*$(document).ready(function() {*/
$(document).ready(function() {
    var darkSwitch = document.querySelector(".dark-checkbox");

    console.log(darkSwitch);

    const currentTheme = localStorage.getItem("theme");

    console.log(currentTheme);

    if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
    }

    darkSwitch.addEventListener("change", function () {

        let theme = "dark";
        console.log(darkSwitch.checked);

        if(this.checked) {
            console.log(darkSwitch.checked);
            theme = "dark";
            if (document.body.classList.contains("dark-theme")){
                theme = "dark";
            } else {
                document.body.classList.add("dark-theme");
            }}
            else {
            console.log(darkSwitch.checked);
            theme = ""
                if (document.body.classList.contains("dark-theme")){
                    document.body.classList.toggle("dark-theme");
                } else {
                    theme = "";
                }
            }
        localStorage.setItem("theme", theme);
        console.log(darkSwitch);
    });
});