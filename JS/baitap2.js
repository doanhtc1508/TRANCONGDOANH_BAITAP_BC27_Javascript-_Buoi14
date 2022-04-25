// Bài tập 2 : viết chương trình chào hỏi 

function checkName (){
    // B1 : lấy giá trị của input
    var name = document.getElementById ("name").value;

    // B2 : kiểm tra 
    if (name === "Bố" || name === "Mẹ" || name === "anh Trai" || name === "em Gía" ) {
        document.getElementById("display").innerHTML = "Hello " + name ;
    }else {
        document.getElementById("display").innerHTML = "Thử lại";
    }


    // B3 : hiển thị kết quả
    document.getElementById ("test").style.display = "block";
}