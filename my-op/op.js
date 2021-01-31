

//متغيرات form1
let fss = [ "z1.jpg" , "z3.jpg" , "z4.jpg"];
let fss1 = document.getElementById("zz1");
let fss2 = document.getElementById("zz2");
let bfss1 = document.getElementById("zz3");
let bfss2 = document.getElementById("zz4");
//متغيرات form2
let div1 =document.getElementById("zu1");
let but1 = document.getElementById("zs");
var ss1 = document.getElementById("i1").value;
var ss = document.getElementById("i3").value;
var ss4 = document.getElementById("i4").value;
var ss5 = document.getElementById("i5").value;
var ss6 = document.getElementById("i6").value;
let d17 = document.getElementById("zu7");
let d21 = document.getElementById("z1");
let d22 = document.getElementById("z2");
let d23 = document.getElementById("z3");
let fd1 = document.getElementById("zsa1");
let fa1 = document.getElementById("zus1");
let fg1 = document.getElementById("zss1");
function shw() {
   
    document.slideShow.src = fss[i];

    if(i<fss.length -1){
        i++ ;
    }else{
        i=0;
    };
    setTimeout(shw(),3000)
}
shw()
function sd(){
        fss1.style.display = "none";
       bfss1.style.display = "none";
        fd1.style.display = "block";
};


// دالة التي تحتوي على شروط الحقول form 2
function zulu(){
    "use strict"
    
           if (Number(ss1) ){
                d17.innerHTML= "الحقول الاسم والصف والمرحلة و الشعبة لا يكتب بها رقم";
            }else{fss1.style.display = "none";
            bfss1.style.display = "none";
           fd1.style.display = "none";
           bfss2.style.display = "none";
           fa1.style.display = "block";
           d23.style.display = "block";
           fg1.style.display = "none";}; 
            };
//تسجيل الدخول            
function zul(){
                "use strict"
                fss1.style.display = "none";
                bfss1.style.display = "block";
               fd1.style.display = "none";
               bfss2.style.display = "none";
               fa1.style.display = "none";
               d23.style.display = "none";
               fg1.style.display = "block";
               
                       
             };
function by(){
                document.location.href = "cc.html";
            };
            
            
 
     
        


        

         
      
         
 

