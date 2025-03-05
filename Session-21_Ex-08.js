let sum = 0;
let number = +prompt('Nhap so bat ki ');
let temp = number;
while (temp > 0) {
    let remains = temp % 10;
    sum += remains**3
    temp = temp / 10;
}
if (sum == number) {
    document.write(`${number} La so Armstrong`);
}
else {
    document.write(`${number} Khong phai so Armstrong`);
}