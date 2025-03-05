let money = +prompt("Nhap so tien")
let month = +prompt("Nhap so thang")
let rate = +prompt("Nhap so lai suat")
rate /= 100;
let total = money * (1+rate)**month;
let interest = total - money
document.write(`Tien lai : ${interest.toFixed(3)}<br>Tien nhan duoc : ${total.toFixed(3)}`)