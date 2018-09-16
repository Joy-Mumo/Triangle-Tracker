function () {
var sideA=parseInt(document.getElementById("sideA").value;
var sideB=parseInt(document.getElementById("sideB").value;
var sideC=parseInt(document.getElementById("sideC").value;

if (sideA==0 || sideB==0 || sideC==0) {
("This is not a triangle")

}
else if (sideA==sideB==sideC) {
("This is an equilateral triangle")
}

else if (sideA==sideB!=sideC ||sideA==sideC!=sideB ||sideB==sideC!=sideA) {
("This is an isoceles triangle")
}
else if (sideA!=sideB!=sideC) {
("This is a scalene triangle")
}

}
