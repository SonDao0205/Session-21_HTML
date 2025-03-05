let num = +prompt("Nhap so bat ki")
for (let i = -num; i <= num; i++) {
    if (num % i == 0) {
        console.log(`${i}  `);
    }
}