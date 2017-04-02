export {displayResolution, winHei, winWid};

function displayResolution() {
    return winWid() + " * " + winHei();
}

function winHei() {
    return window.screen.availHeight;
}

function winWid() {
    return window.screen.availWidth;
}