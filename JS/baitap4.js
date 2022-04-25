// Bài tập 4 : kiểm tra tam giác

function checkTriangle () {
    // B1 : lấy giá trị của input
    var canhA = +document.getElementById ("canhA").value ;
    var canhB = +document.getElementById ("canhB").value ;
    var canhC = +document.getElementById ("canhC").value ;
    // B2 : kiểm tra xem là tam giác gì 
    if ((canhA + canhB > canhC) && (canhA + canhB >  canhB) && (canhB + canhC >canhA)
    && (canhA >0) && (canhB >0) && (canhC >0) ){
        if ((canhA == canhB) && (canhB == canhC )) {
            document.getElementById ("tamGiac").innerHTML = "Là tam giác đều"
        }else if ((canhA == canhB) || (canhB == canhC ) || (canhA == canhC) ) {
            document.getElementById ("tamGiac").innerHTML = "Là tam giác cân"
        }else if ((canhC * canhC == canhA * canhA  +  canhB * canhB) ||
             (canhA * canhA == canhC * canhC + canhB * canhB ) ||
             (canhB * canhB == canhA * canhA + canhC * canhC ))  {
            document.getElementById ("tamGiac").innerHTML = "Là tam giác vuông"
        }else {
            document.getElementById ("tamGiac").innerHTML = "Là tam giác thường";
        }

    }else {
        document.getElementById ("tamGiac").innerHTML = "3 cạnh của tam giác không thỏa mãn điều kiện lập thành tam giác"
    }

    // B3 : HIển thị kết quả 
    document.getElementById ("result").style.display = "block";


}