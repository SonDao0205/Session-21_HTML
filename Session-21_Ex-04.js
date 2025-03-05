let numA = +prompt("Nhap so a") 
let numB = +prompt("Nhap so b")
let numC = +prompt("Nhap so c")
if(numA == 0){
    if (numB == 0) {
        if (numC == 0) {
            document.write(`Phuong trinh vo so nghiem`)
        }
        else{
            document.write(`Phuong trinh vo nghiem`)
        }
    }
    else{
        document.write(`Phuong trinh co 1 nghiem : x = ${-numC/numB}`)
    }
}
else{
    let delta = Math.pow(numB,2) - 4 * numA * numC;
    if(delta < 0){
        document.write("Phuong trinh vo nghiem!");
    }
    else if(delta == 0){
        document.write(`Phuong trinh co nghiem kep : x1 = x2 = x = ${-numB / (2*numA)}`)
    }
    else{
        let x1 = (-numB + Math.sqrt(delta))/(2*numA)
        let x2 = (-numB - Math.sqrt(delta))/(2*numA)
        document.write(`Phuong trinh co 2 nghiem phan biet : 
            x1 = ${x1}<br>
            x2 = ${x2}<br>
        `);
    }
}



