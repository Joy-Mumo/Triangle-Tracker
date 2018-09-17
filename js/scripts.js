function triangleTracker() {

   // var sides =[document.getElementById("sideA").value,document.getElementById("sideB").innerHTML.value,document.getElementById("sideC").innerHTML.value];
   // var sideA=parseInt(sides[0]));
   // var sideB=parseInt(sides[1]));
   // var sideC=parseInt(sides[2]));
   //
   // console.log(typeof (sideA))
   // console.log(sideB);
   // console.log(sideC);
   var sideA=parseInt(document.getElementById("sideA").value;
  var sideB=parseInt(document.getElementById("sideB").value;
  var sideC=parseInt(document.getElementById("sideC").value;


  if (sideA==sideB && sideB==sideC) {
    result.innerHTML="This is an equilateral triangle";
  }
  else if (sideA==0 || sideB==0 || sideC==0) {
    result.innerHTML="This is not a triangle";
  }
  else if (sideA==sideB!=sideC ||sideA==sideC!=sideB ||sideB==sideC!=sideA) {
    result.innerHTML="This is an isoceles triangle";
  }
  else if (sideA!=sideB!=sideC) {
    result.innerHTML="This is a scalene triangle";
  }

}
