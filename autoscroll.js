var firstval = 0;

function Carousel() {
    firstval += 2;
    parent = document.querySelector(".inside-content");
    parent.style.left = "-" + firstval + "px";
    if (!(firstval % 150)) {
        setTimeout(Carousel, 3000);
        firstval = 0;
        var firstChild = parent.firstElementChild;
        parent.appendChild(firstChild);
        parent.style.left= 0;
        return;
    }
    runCarousel = setTimeout(Carousel, 10);
}
Carousel();