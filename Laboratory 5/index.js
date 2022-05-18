var el = document.getElementById('element');
el.style.backgroundColor = "red";

function elementClick(){
    var el = document.querySelector("#nextElement");
    el.style.backgroundColor = "red";
}

function add(){
    var el = document.getElementById("imageContainer");
    el.style.display = "";
}

function max(){
    var el = document.getElementById("image");
    el.style.width = "1920px";
}

function min(){
    var el = document.getElementById("image");
    el.style.width = "1000px";
}

function remove(){
    var el = document.getElementById("imageContainer");
    el.style.display = "none";
}