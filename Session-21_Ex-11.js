let day = +prompt("Nhap ngay sinh")
let month = +prompt("Nhap thang sinh")
if ((day < 1 || day > 31) || (month < 1 || month > 12) ) {
    document.write(`Ngay thang khong hop le!`)
}
else{
    switch (month) {
        case 1:
            if (day > 31) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 19) {
                document.write(`Ma ket`)
            }
            else{
                document.write(`Bao binh`)
            }
            break;
        case 2:
            if (day > 28) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 18) {
                document.write(`Bao Binh`)
            }
            else {
                document.write(`Song ngu`)
            }
            break;
        case 3:
            if (day > 31) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 20) {
                document.write(`Song ngu`)
            }
            else{
                document.write(`Bach duong`)
            }
            break;
        case 4:
            if (day > 30) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 20) {
                document.write(`Bach duong`)
            }
            else{
                document.write(`Kim nguu`)
            }
            break;
        case 5:
            if (day > 31) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 20 ) {
                document.write(`Kim nguu`)
            }
            else{
                document.write(`Song tu`)
            }
            break;
        case 6:
            if (day > 30) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 21) {
                document.write(`Song tu`)
            }
            else{
                document.write(`Cu giai`)
            }
            break;
        case 7:
            if (day > 31) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 22) {
                document.write(`Cu giai`)
            }
            else{
                document.write(`Su tu`)
            }
            break;
        case 8:
            if (day > 31) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 22) {
                document.write(`Su tu`)
            }
            else{
                document.write(`Xu nu`)
            }
            break;
        case 9:
            if (day > 30) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 22) {
                document.write(`Xu nu`)
            }
            else{
                document.write(`Thien binh`)
            }
            break;
        case 10:
            if (day > 31) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 23) {
                document.write(`Thien binh`)
            }
            else{
                document.write(`Bo cap`)
            }
            break;
        case 11:
            if (day > 30) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 22) {
                document.write(`Bo cap`)
            }
            else{
                document.write(`Nhan ma`)
            }
            break;
        case 12:
            if (day > 31) {
                document.write(`Ngay khong hop le`)
                break
            }
            else if (day <= 21) {
                document.write(`Nhan ma`)
            }
            else{
                document.write(`Ma ket`)
            }
            break;
    }
}
