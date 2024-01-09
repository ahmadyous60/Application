
function calculateTriangleArea(a, b, c) {
    var s = (a + b + c) / 2;
    var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
}

var side1 = 5;
var side2 = 6;
var side3 = 7;

var area = calculateTriangleArea(side1, side2, side3);

document.getElementById('demo').innerHTML = "Area of Triangle is: "+ area;
