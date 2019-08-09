window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout((event) => {
        document.getElementsByTagName('body')[0].classList.add("loaded");
    }, 0);
})

function delay(URL) {
    if (screen.width <= 700) {
        setTimeout(function () { window.location = URL }, 600);
    }
    else{
        setTimeout(function () { window.location = URL }, 0);
    }
}