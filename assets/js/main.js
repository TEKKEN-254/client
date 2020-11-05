/* READY DOCUMENT FUNCTION CALLS */

const main = () => {
    carouselInit();
    tooltipInit();
    trimAuthorSpace();
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

const authorSpace = document.getElementsByClassName("author-whitespace");
const trimAuthorSpace = () => {
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