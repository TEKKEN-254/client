/* READY DOCUMENT FUNCTION CALLS */

const main = () => {
    carouselInit();
    tooltipInit();
    trimAuthorSpace();
    searchValidation();
}

$(document).ready(main);

/* CAROUSEL BACKGROUND IMAGES */

const carouselInit = () => {
    const $carouselItems = $('.carousel-item');
    for (let i = 0; i < $carouselItems.length; i++) {
        let item = $carouselItems[i];
        $(item).css("background-image", "url(./assets/img/slideshow/slide-" + i + ".jpg)");
    }
};

/* INITIALISING TOOLTIPS */

const tooltipInit = () => {
    $('[data-toggle="tooltip"]').tooltip();
}

/* TRIMMING WHITESPACE IN AUTHOR BOX FOR BLOG POSTS */

const trimAuthorSpace = () => {
    const authorSpace = document.getElementsByClassName("author-whitespace");
    for (const space of authorSpace) {
        space.innerHTML = null;
    }
}

/* GIF TOGGLER */
const toggleGifs = () => {
    const $gifs = $("figure.inline-fig, .gif-row")
    const $infoText = $(".gif-info>ul, .gif-info>p")

    $gifs.toggleClass("flex");
    $infoText.toggleClass("col-lg-7");
}

/* SEARCH VALIDATION (CHECKS FOR PLAYER OR CHARACTER INPUT) */

const searchValidation = () => {
    const $searchBar = $(".top-search");
    const $field = $(".top-search>input");
    const $value = $field.val().toLowerCase().replace(/\s/g, "");

    const params = (new URL(document.location)).searchParams;
    const query = params.get("q");

    const circuitWords = ["circuit", "savannacircuit", "tekken254circuit"];
    const sfnWords = ["fightnight", "sfn", "savannafightnight", "savannahfightnight"];

    const validate = () => {
        $searchBar.attr("action", "/search.html");
    }

    $searchBar.submit(validate);
}