// $('.parallax-window').parallax({ imageSrc: '/path/to/image.jpg' });

function show() {
    $('.journey').removeClass("hide").addClass("display");
}

function hide() {
    $('.journey').removeClass("display").addClass("hide");
}

let scrollpos = window.scrollY
const header = document.getElementsByClassName("nav");
const header_height = header.offsetHeight


const add_class_on_scroll = () => $(".nav").addClass("showNav")
const remove_class_on_scroll = () => $(".nav").removeClass("showNav")


window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;
    if(scrollpos >= 200) {
        add_class_on_scroll();
    } else {
        remove_class_on_scroll();
    }

    console.log(scrollpos);
})