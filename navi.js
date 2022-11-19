function show_menu() {
    var a = document.querySelector("#mb-menu");
    a.style.display = "block";
    var b = document.querySelector("#mb-header");
    b.style.height = "100vh";
    b.style.position = "fixed";
    var c = document.querySelector("#show");
    c.style.display = "none"
    var d = document.querySelector("#hide");
    d.style.display = "block"
}

function hide_menu() {
    var a = document.querySelector("#mb-menu");
    a.style.display = "none";
    var b = document.querySelector("#mb-header");
    b.style.height = "unset";
    b.style.position = "statick";
    var c = document.querySelector("#show");
    c.style.display = "block"
    var d = document.querySelector("#hide");
    d.style.display = "none"
}