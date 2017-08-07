
var y = 12;
var l = y+2;
for (var x = 0; x <= y+1; x++) {
	console.log(Array(l).join(" ")+ Array(x).join(" *"));
	l=l-1;
}
console.log(Array(y).join(" ") + ("||")); 