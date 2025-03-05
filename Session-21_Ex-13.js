document.write("a.<br>");
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        document.write(`*`);
    }
    document.write("<br>");
}

document.write("<br>b.<br>");
for (let i = 0; i < 10; i++) {
    for (let j = 0; j <= i; j++) {
        document.write(`*`);
    }
    document.write("<br>");
}

document.write("<br>c.<br>");
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        document.write("&nbsp;&nbsp;");
    }
    for (let k = i; k < 10; k++) {
        document.write(`*`);
    }
    document.write("<br>");
}

document.write("<br>d.<br>");
for (let i = 10; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
        document.write("&nbsp;&nbsp;");
    }
    for (let k = i - 1; k < 10; k++) {
        document.write(`*`);
    }
    document.write("<br>");
}
