function goTo(element) {
    var element = document.getElementById(element);
    element.scrollIntoView({block: "center" , behavior: "smooth"});
}
