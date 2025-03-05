let money = +prompt("Nhap so tien can rut");
if (money % 1000 != 0) {
    document.write("So tien khong hop le")
}
else{
    let money_500k = 500000;
    let count_500k = 0;
    let money_200k = 200000;
    let count_200k = 0;
    let money_100k = 100000;
    let count_100k = 0;
    let money_50k = 50000;
    let count_50k = 0;
    let money_20k = 20000;
    let count_20k = 0;
    let money_10k = 10000;
    let count_10k = 0;
    let money_5k = 5000;
    let count_5k = 0;
    let money_2k = 2000;
    let count_2k = 0;
    let money_1k = 1000;
    let count_1k = 0;

    while (money > 0) {
        if (money >= money_500k) {
            count_500k = Math.floor(money / money_500k);
            money -= count_500k * money_500k;
        }   
        else if (money >= money_200k) {
            count_200k = Math.floor(money / money_200k);
            money -= count_200k * money_200k;
        }
        else if (money >= money_100k) {
            count_100k = Math.floor(money / money_100k);
            money -= count_100k * money_100k;
        }
        else if (money >= money_50k) {
            count_50k = Math.floor(money / money_50k);
            money -= count_50k * money_50k;
        }
        else if (money >= money_20k) {
            count_20k = Math.floor(money / money_20k);
            money -= count_20k * money_20k;
        }
        else if (money >= money_10k) {
            count_10k = Math.floor(money / money_10k);
            money -= count_10k * money_10k;
        }
        else if (money >= money_5k) {
            count_5k = Math.floor(money / money_5k);
            money -= count_5k * money_5k;
        }
        else if (money >= money_2k) {
            count_2k = Math.floor(money / money_2k);
            money -= count_2k * money_2k;
        }
        else if (money >= money_1k) {
            count_1k = Math.floor(money / money_1k);
            money -= count_1k * money_1k;
        }
        }

        if (count_500k > 0){
            document.write(`500.000 - ${count_500k} to<br>`);}
        if (count_200k > 0){ 
            document.write(`200.000 - ${count_200k} to<br>`);}
        if (count_100k > 0){ 
            document.write(`100.000 - ${count_100k} to<br>`);}
        if (count_50k > 0){ 
            document.write(`50.000 - ${count_50k} to<br>`);
        }
        if (count_20k > 0){ 
            document.write(`20.000 - ${count_20k} to<br>`);
        }
        if (count_10k > 0){ 
            document.write(`10.000 - ${count_10k} to<br>`);
        }
        if (count_5k > 0){ 
            document.write(`5.000 - ${count_5k} to<br>`);
        }
        if (count_2k > 0){ 
            document.write(`2.000 - ${count_2k} to<br>`);
        }
        if (count_1k > 0){ 
            document.write(`1.000 - ${count_1k} to<br>`);
        }

}
