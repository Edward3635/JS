/* eslint-disable no-unused-vars */
var x = 6, y = 14, z = 4,
	res1, res2, res3, res4, res5;
res1 = x += y - x++ * z;
x = 6;
res2 = --x - y * 5;
x = 6;
y /= x + 5 % z;
res3 = y;
x = 6, y = 14;
res4 = z - x++ + y * 5;
x = 6;
res5 = y - x++ * z;
document.write('<main>');
document.write('<div class="container">');
document.write('<div class="content">');

document.write('<h1>x = 6, y = 14, z = 4;</h1>');

document.write('<h4>1) x += y - x++ * z</h4>');
document.write('<h5>x = ' + res1 + '</h5>');
document.write('<h6> x++ -> x * z -> y - (x * z) -> x + ( y - ( x * z )</h6>');

document.write('<h4>2) z = --x - y * 5;</h4>');
document.write('<h5>z = ' + res2 + '</h5>');
document.write('<h6>--x -> y * 5 -> x - ( y * 5 )</h6>');

document.write('<h4>3) y /= x + 5 % z;</h4>');
document.write('<h5>y = ' + res3 + '</h5>');
document.write('<h6>5 % z -> x + ( 5 % z ) -> y / ( x + ( 5 % z ) )</h6>');

document.write('<h4>4) z - x++ + y * 5;</h4>');
document.write('<h5>result = ' + res4 + '</h5>');
document.write('<h6> x++ -> y * 5 -> z - x -> ( z - x ) + ( y * 5 )</h6>');

document.write('<h4>5) x = y - x++ * z;</h4>');
document.write('<h5>x = ' + res5 + '</h5>');
document.write('<h6> x++ -> x * z -> y - ( x * z )</h6>');

document.write('</div>');
document.write('</div>');
document.write('</main>');