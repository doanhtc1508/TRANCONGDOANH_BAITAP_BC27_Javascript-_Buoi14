// bài tập 3 ;  kiểm tra có bao nhiêu số chẵn và bao nhiêu số lẻ
function checkNumber () {
    // B1 : lấy giá trị của input
    var numberOne = +document.getElementById ("soThuNhat").value ;
    var numberTow = +document.getElementById ("soThuHai").value ;
    var numberThree = +document.getElementById ("soThuBa").value ;
    var countSoLe = 0;
    var countSoChan= 0 ;
 
    
    // B2 : kiểm tra số chẵn số lẻ 
  
    if (numberOne % 2 == 0) {
        document.getElementById ("ketQua1").innerHTML = numberOne + " Là số chẵn";
        countSoChan += 1 ;
    }else {
        
        document.getElementById ("ketQua1").innerHTML = numberOne + " Là số lẻ";
        countSoLe += 1 ;
    }
    if (numberTow % 2 == 0) {
        document.getElementById ("ketQua2").innerHTML = numberTow + " Là số chẵn";
        countSoChan += 1 ;
    }else {
        document.getElementById ("ketQua2").innerHTML = numberTow + " Là số lẻ";
        countSoLe += 1;
    }
    if (numberThree % 2 == 0 ) {
        document.getElementById ("ketQua3").innerHTML = numberThree + " Là số chẵn";
        countSoChan += 1 ;
    }else {
        document.getElementById ("ketQua3").innerHTML = numberThree + " Là số lẻ";
        countSoLe += 1 ;
    }
   
    // console.log('countSoLe: ', countSoLe)
    // (numberOne % 2 == 0) ? 
    //  document.getElementById ("ketQua1").innerHTML = numberOne + " Là số chẵn" :
    // document.getElementById ("ketQua1").innerHTML = numberOne + " Là số lẻ";

    // (numberTow % 2 == 0) ? 
    // document.getElementById ("ketQua2").innerHTML = numberTow + " Là số chẵn" : 
    // document.getElementById ("ketQua2").innerHTML = numberTow + " Là số lẻ";

    // (numberThree % 2 == 0 ) ?
    // document.getElementById ("ketQua3").innerHTML = numberThree + " Là số chẵn" :
    // document.getElementById ("ketQua3").innerHTML = numberThree + " Là số lẻ";

    // B3: xuất kết quả 
    document.getElementById ("soChanSoLe").style.display = "block" ;
    document.getElementById ("ketQua4").innerHTML = `<span>Tổng chẵn: ${countSoChan}</span><br/>
    <span>Tổng lẻ: ${countSoLe}</span>
    `


    
}


