let sum = 0
for (let i = 0; i < 5; i++) {
    let num = +prompt(`Nhap vao so thu ${i+1}`)
    if (num % 2 != 0) {
        sum += num
    }
}
document.write(`Tong cac so le la : ${sum}`)
