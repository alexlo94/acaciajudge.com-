/* Active link highlighting */
const navlinks = document.querySelectorAll(".work a, .navigation a");

for(link of navlinks ){
    if(window.location.href.includes(link.getAttribute("href"))) {
        link.classList.toggle("active");
    }
}

document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('collapsed');
});