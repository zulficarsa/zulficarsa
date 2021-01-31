function student(x,y){
    this.x=x;
    this.y=y;
    this.z=z;

};
let studentsUI = function (){}
studentsUI.prototype.addStudentToList = function (student){
    const list = document.getElementById("w1");
    const row =document.createElement("tr");
    row.innerHTML =`
    <td>${student.x}</td>
    <td>${student.y}</td>
    <td>${Math.floor(Math.random()*10000000000)}</td>
    <td>${Math.floor(Math.random()*100000)}</td>
    <td> <a src='#' class = 'xx'>x</a> </td>
    `
    list.appendChild(row)
}

document.getElementById("xx1").addEventListener("submit", function(e){
var x = document.getElementById("x").value;
  var  y = document.getElementById("y").value;
  const stu =  new studentsUI(x , y);
  studentUI.addStudentToList(student);
    e.preventDefault();
});

studentsUI.prototype.deleteStudent = function(target){
    if(target.className === 'xx'){
        target.parentElement.parentElement.remove()
    }
};
document.getElementById("xx1").addEventListener("submit", function(e){
   
      const stu =new studentsUI(x,y);
      studentUI.addStudentToList(e.target);
        e.preventDefault();
    });

