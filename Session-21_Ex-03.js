let pass;
let password = "123";
do {
    pass = prompt("Nhap mat khau");
    if (pass !== password) {
        console.log(`Mat khau sai`);
    }
} while (pass !== password);
if (pass === password) {
    console.log(`Dang nhap thanh cong`);
}
