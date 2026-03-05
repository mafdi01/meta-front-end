let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    // Current scroll position
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // User is scrolling down AND has scrolled past 100px
        header.classList.add("header-hidden");
    } else {
        // User is scrolling up
        header.classList.remove("header-hidden");
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;
});