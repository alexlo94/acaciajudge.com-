function filterByTag(tag) {
    const cards = document.querySelectorAll(".card");
    for (let card of cards) {
        const tags = card.getAttribute("tags");
        const tagList = tags.split(" ");

        if (!tagList.includes(tag)) {
            card.parentElement.classList.add("hidden");
        } else {
            card.parentElement.classList.remove("hidden");
        }

    }
}

//do the initial sort based on the URL, I'm pretty sure this can be done in a smarter way lmao
console.log(window.location.hash);
const hash = (window.location.hash).substr(1);

if (hash === "3d-models") {
    filterByTag("3d-models");
    document.querySelector("a[filter=\"3d-models\"]").classList.toggle("active");
} else if (hash === "ux-ui-design") {
    filterByTag("ux-ui-design");
    document.querySelector("a[filter=\"ux-ui-design\"]").classList.toggle("active");
} else if (hash === "animation") {
    filterByTag("animation");
    document.querySelector("a[filter=\"animation\"]").classList.toggle("active");
} else if (hash === "interactive-media") {
    filterByTag("interactive-media");
    document.querySelector("a[filter=\"interactive-media\"]").classList.toggle("active");
} else if (hash === "physical-computing") {
    filterByTag("physical-computing");
    document.querySelector("a[filter=\"physical-computing\"]").classList.toggle("active");
} else {
    filterByTag("projects");
    document.querySelector("a[filter=\"projects\"]").classList.toggle("active");
}

for (link of navlinks) {
    if (link.getAttribute("filter")) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            for(link of navlinks) {
                link.classList.remove("active");
            }
            this.classList.add("active");
            filterByTag(this.getAttribute("filter"));
            document.querySelector('.menu').classList.toggle('collapsed');
            window.location.hash = this.getAttribute("filter");
        });
    }
}