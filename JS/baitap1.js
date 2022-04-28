
// Bài tập 1 : sắp xếp các số nguyên theo thứ tự tăng dần
function sortNumber () {
    //  B1 : Lấy giá trị của các input ;
    var numberOne = +document.getElementById ("numberOne").value ;
    var numberTow = +document.getElementById ("numberTow").value ; 
    var numberThree =  +document.getElementById ("numberThree").value ;
     var min ;
     var max ;

    
    // b2 : sắp xếp thoe thứ tự tăng dần
    min = numberOne < numberTow ? numberOne : numberTow ;
    max = numberOne + numberTow - min ;
    min = min < numberThree ? min : numberThree ;
    max = max > numberThree ? max : numberThree ;
     // mid :
    var mid = numberOne + numberTow + numberThree - min - max ;

    // var numberOder = [numberOne, numberTow ,numberThree  ];
    // sắp xếp các số theo thứ tự tăng dần
    // numberOder.sort(function(a, b) {
    //     return a - b ;
    // })

    // // sắp xếp các số thoe thứ tự giảm dần
    // numberOder.reverse() ;

    // b3 : xuất kết quả ra màn hình 
    document.getElementById ("ketQua").style.display = "block" ;
    document.getElementById ("numberOder").innerHTML = min + " " + mid + " " + max ;



} 
