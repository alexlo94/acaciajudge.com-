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

//do the initial sort based on the URL
console.log(window.location.hash);
const hash = (window.location.hash).substr(1);

if (hash === "3d-models") {
    filterByTag("3d-models");
} else if (hash === "ux-ui-design") {
    filterByTag("ux-ui-design");
} else if (hash === "animation") {
    filterByTag("animation");
} else if (hash === "interactive-media") {
    filterByTag("interactive-media");
} else if (hash === "physical-computing") {
    filterByTag("physical-computing");
} else {
    filterByTag("projects");
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
        });
    }
}