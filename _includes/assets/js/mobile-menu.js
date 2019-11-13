const state = {
    mobileLinksCollapsed: true
}

/* Mobile Menu onClick */
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelector('.mobile-links');
mobileMenu.addEventListener('click', (event) => {
    state.mobileLinksCollapsed = !state.mobileLinksCollapsed;
    // mobileLinks.style.display = state.mobileLinksCollapsed ? "none" : "block";
    if (!state.mobileLinksCollapsed) {
        mobileLinks.classList.remove("display\:none");
    } else {
        mobileLinks.classList.add("display\:none");
    }
});