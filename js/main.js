const darkModeToggles = document.querySelectorAll(".darkModeToggle");
window.localStorage.clear();
const enableDarkMode = (persist = false) => {
    document.body.classList.add("darkmode");
    if (persist) {
        localStorage.setItem("darkMode", "enabled");
    }
};
const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", "disabled");
};
localStorage.item;
//initial check for previous configuration
let darkMode = localStorage.getItem("darkMode");

if (darkMode !== null) {
    if (darkMode === "enabled") {
        enableDarkMode(); //already persisted
    }
} else if (!window.matchMedia) {
    //matchMedia method not supported
    //disableDarkMode();
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //OS theme setting detected as dark
    console.log("dark theme");
    enableDarkMode(); //no need to persist to keep it responsive to system changes
} else {
    const today = new Date();
    const hour = today.getHours();
    if (hour > 21 || hour < 7) {
        //night time
        console.log("night time");
        //enableDarkMode(); //no need to persist to keep it responsive to time changes
    }
}
// Click funtionality on the toggle buttons (will override the defaults)
for (let i = 0; i < darkModeToggles.length; i++) {
    darkModeToggles[i].addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");

        if (darkMode !== "enabled") {
            enableDarkMode(true); //persist the choice
        } else {
            disableDarkMode();
        }
    });
}
