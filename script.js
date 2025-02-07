const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");


function openmenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}
function closemenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}



window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/70', 'dark:bg-transparent');
    }
})

//---------------light mode and dark mode---------------------------

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
// } else {
//     document.documentElement.classList.remove('dark')
// }

function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    }
    else {
        localStorage.theme = 'light';
    }
}




const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
    });
    if (response.ok) {
        // Show success message
        successMessage.classList.remove("hidden");
        form.reset(); // Clear the form
    } else {
        alert("Something went wrong. Please try again.");
    }
});


function downloadResume(event) {
    // Open the PDF in a new tab
    const newTab = window.open("./images/TarunRathore-NodeJSDeveloper-jzUk.pdf", "_blank");

    if (newTab) {
        newTab.focus(); // Bring the new tab to focus
    } else {
        alert("Popup blocked! Please allow popups for this site.");
    }

    // Trigger download
    const link = document.createElement("a");
    link.href = "./images/TarunRathore-NodeJSDeveloper-jzUk.pdf";
    link.download = "TarunRathore-Resume.pdf"; // Optional: set a custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Prevent default anchor behavior
    event.preventDefault();
}