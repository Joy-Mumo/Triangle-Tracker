var triangleTracker = function() {
  var sides =[document.getElemtById("sideA").value,document.getElemtById("sideB").innerHTML.value,document.getElemtById("sideC").innerHTML.value];
var sideA=parseFloat(sides[0]));
var sideB=parseFloat(sides[1]));
var sideC=parseFloat(sides[2]));

console.log(typeof (sideA))
console.log(sideB);
console.log(sideC);
  // var sideA=parseInt(document.getElementById("sideA").value;
  // var sideB=parseInt(document.getElementById("sideB").value;
  // var sideC=parseInt(document.getElementById("sideC").value;


  if (sideA===sideB===sideC) {
  document.getElemtById("sideB").innerHTML= ("This is an equilateral triangle")
  }
  else if (sideA===0 || sideB===0 || sideC===0) {
document.getElemtById("sideA").innerHTML= ("This is not a triangle")
}=
  else if (sideA===sideB!=sideC ||sideA==sideC!=sideB ||sideB===sideC!=sideA) {
  document.getElemtById("sideB").innerHTML=("This is an isoceles triangle")
  }
  else if (sideA!=sideB!=sideC) {
  document.getElemtById("sideC").innerHTML=("This is a scalene triangle")
  }

  }
