/* Active link highlighting */
const navlinks = document.querySelectorAll(".mobile-links a, .work a, .navigation a");

for(link of navlinks ){
    if(window.location.pathname.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }
}