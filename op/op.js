let div1 =document.getElementById("zu1");
let but1 = document.getElementById("zs");
var ss1 = document.getElementById("i1").value;
var ss3 = document.getElementById("i3").value;
var ss4 = document.getElementById("i4").value;
var ss5 = document.getElementById("i5").value;
var ss6 = document.getElementById("i6").value;
let d1 =document.getElementById("z1");
let d2 =document.getElementById("z2");
let d3 =document.getElementById("z3");
let d4 =document.getElementById("z4");
// دالة التي تحتوي على شروط الحقول
function zulu(){
    "use strict"
           if (Number(ss1)){
                alert("الحقول الاسم والصف والمرحلة و الشعبة لا يكتب بها رقم");
                
             }else if (ss3.length<8){
                alert("الرمز يجب ان يكون متكون من 8 ارقام و حروف");
            }else{true};
            d1.innerHTML = "الاسم : " + ss1;
            d2.innerHTML = "الصف : " + ss4;
            d3.innerHTML = "المرحلة : " + ss5;
            d4.innerHTML = "الشعبة : " + ss5;
        };



        

         
      
         
 

