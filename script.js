setInterval(function() {
    var today = new Date();
    var hh = today.getHours();
    var mi = today.getMinutes();
    var ss = today.getSeconds();
    if (hh>=12){ //오후
        $(document).ready(function(){
            $("#blank").css("color","#255784");
            $("#blank").css("background","#2196f3");
            $("#blank").css("box-shadow","#0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3");
         });
        if (ss<10){ //초단위에 한자리수로 인한 텍스트의 축소를 방지하기 위하여
            document.getElementById("blank").innerHTML = " 오후 " + (hh-12) + "시 " + mi + "분 0" + ss + "초";    
        } 
        else {
        document.getElementById("blank").innerHTML = " 오후 " + (hh-12) + "시 " + mi + "분 " + ss + "초";
        }
    }
    if (hh<12){ //오전
        $(document).ready(function(){
            $("#blank").css("color","#7a3055");
            $("#blank").css("background","#f52c63");
            $("#blank").css("box-shadow"," 0 0 10px #f52c63, 0 0 40px #f52c63, 0 0 80px #f52c63");
        });
        if (ss<10){
            document.getElementById("blank").innerHTML = " 오전 " + hh + "시 " + mi + "분 0" + ss + "초";    
        }
        else {
        document.getElementById("blank").innerHTML = " 오전 " + hh + "시 " + mi + "분 " + ss + "초";
        }
    }
}, 1000);
// 날짜, 시간, 분, 초 따로 불러온뒤 html 속 id="blank"의 데이터에 넣는다(1000 -> 1초 마다 반복