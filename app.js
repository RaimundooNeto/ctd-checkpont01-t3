const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const toElement = getScrollTopByHref(event.target);

    scrollToPosition(toElement);
}

function scrollToPosition(targetElement) {
    window.scroll({
        top: targetElement,
        behavior: "smooth"
    });
}

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}