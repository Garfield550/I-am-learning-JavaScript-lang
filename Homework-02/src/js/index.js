let countEnter = (number) => {
    for (let count = 1; count <= number; count++) {
        document.write(count + ' ');
        if ((count % 3) === 0) {
            document.write("<br>");
        }
    }
}
let count = countEnter(30);