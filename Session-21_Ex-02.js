let count = 0
for (let i = 0; i < 5; i++) {
    let num = +prompt(`Nhap vao so thu ${i+1}`)
    if (num % 2 == 0) {
        count++;
    }
}
document.write(`So luong so chan la : ${count}<br>
    So luong so le la : ${5 - count}`)
