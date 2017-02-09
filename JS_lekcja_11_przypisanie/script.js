// JavaScript File


// przypisanie wartosci jednej zmiennej do drugiek

var x = 5;
var y = x;

document.write('y = ', y);

document.write('<br>');
document.write('<br>');


// przypisanie sumy dwoch zmiennych do trzciej zmiennej

var a = 3;
var b = 5;
var suma = a + b;

document.write('a = ', a);
document.write('<br>');

document.write('b = ', b);
document.write('<br>');

document.write('suma a+b wynosi = ', suma);

document.write('<br>');
document.write('<br>');

// skrocony zapis zwiekszania wartosci zmiennej x = x + 5

var x = 4;
document.write('poczatkowe x = ', x, '<br>');

x += 5;     // to jest to samo co: x = x + 5;
document.write('x = x + 5 lub  x += 5  wynosi ', x);

document.write('<br>');

// skrocony zapis zwiekszania wartosci zmiennej z = z * 5

var z = 3
document.write('poczatkowe z = ', z, '<br>');

z *= 5      // to samo co: z = z * 5
document.write('z = z * 5 lub  z *= 5  wynosi ', z);

/* WYNIK - WYDRUK

y = 5

a = 3
b = 5
suma a+b wynosi = 8

poczatkowe x = 4
x = x + 5 lub x += 5 wynosi 9
poczatkowe z = 3
z = z * 5 lub z *= 5 wynosi 15 

*/