// JavaScript File

// Warunek IF - jesli zostanie spelniony, wykonywana jest intrukcje do ";"
// albo szereg instrukcji zawartych miedzy {} oddzielonych ";"


var x = 10;

if (x == 10)
    document.write('x jest rowne 10'); //instrukcja if konczy sie na ";"
    
document.write('<br>');
document.write('-----------------------------------------------');
document.write('<br>', '<br>');

var y = 8;
var z = 3;

document.write('y =', y);
document.write('<br>');
document.write('z =', z);
document.write('<br>');
document.write('<br>');

if (x > z)
{
    document.write('warunek spelniony', '<br>');
    document.write('x > z')
}


/* WYNIK - WYDRUK

x jest rowne 10
-----------------------------------------------

y =8
z =3

warunek spelniony
x > z 

*/