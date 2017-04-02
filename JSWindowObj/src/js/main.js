import 'normalize.css';
import 'bootstrap/scss/bootstrap.scss';
import '../scss/main.scss';
import {displayResolution, winHei, winWid} from './modules/display';

let divID = document.getElementById("button");
let inputButton = document.getElementById("inpBut");
let inputWidth = document.getElementById("inpWid");
let divBox = document.getElementById("box");

function scaling(element, width) {
    let _height = Math.floor((winHei() / winWid()) * width);
    // console.log(_height);
    element.style.height = _height + "px";
    element.style.width = width + "px";
}

divID.onclick = function() {
    alert("Your resolution is: " + displayResolution());
}

inputButton.onclick = function() {
    let reg = new RegExp("^[0-9]*$");
    let value = inputWidth.value;
    if (value === "") {
        alert("Input width is null!");
    } else {
        if (!reg.test(value)) {
            alert("Please input a number!");
        } else {
            scaling(divBox, value);
            // console.log(value);
        }
    }
}

window.onload = function() {
    divBox.style.height = winHei() + "px";
    divBox.style.width = winWid() + "px";
}