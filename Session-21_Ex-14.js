let width = +prompt("Nhập chiều dài:");
let height = +prompt("Nhập chiều rộng:");
for (let i = 0; i < height; i++) {
    if (i === 0 || i === height - 1) {
        for (let j = 0; j < width; j++) {
            document.write("* ");
        }
    } else {
        document.write("*");
        for (let j = 0; j < width - 2; j++) {
            document.write("&nbsp;&nbsp;&nbsp;");
        }
        if (width > 1) document.write(" *");
    }
    document.write("<br>");
}

