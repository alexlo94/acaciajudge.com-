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

function observeGrid(gridNode) {
    // Feature detect ResizeObserver
    if ('ResizeObserver' in window) {
        // Get the min value from data-min="[min]"
        const min = gridNode.dataset.min;
        // Create a proxy element to measure and convert
        // the `min` value (which might be em, rem, etc) to `px`
        const test = document.createElement('div');
        test.style.width = min;
        gridNode.appendChild(test);
        const minToPixels = test.offsetWidth;
        gridNode.removeChild(test);

        const ro = new ResizeObserver(entries => {
            for (let entry of entries) {
                // Get the element's current dimensions
                const cr = entry.contentRect;
                // `true` if the container is wider than the minimum
                const isWide = cr.width > minToPixels;
                // toggle the class conditionally
                gridNode.classList.toggle('aboveMin', isWide);
            }
        });

        ro.observe(gridNode);
    }
}

const grid = document.querySelector('.grid');
observeGrid(grid);

if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
        if (!user) {
            window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
            });
        }
    });
}