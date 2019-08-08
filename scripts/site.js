window.addEventListener('DOMContentLoaded', (event) => {
    setTimeout((event) => {
        document.getElementsByTagName('body')[0].classList.add("loaded");
    }, 0);
})

function delay (URL) {
    setTimeout( function() { window.location = URL }, 500 );
}