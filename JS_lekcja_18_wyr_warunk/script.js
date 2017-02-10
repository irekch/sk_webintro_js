// JavaScript File

/* ----------- WYRAŻENIA WARUNKOWE ----------------------

Jesli wyrazenie w nawiasie jest prawdziwe, zmienna "wynik"
przyjmuje wartosc za "?" jesli nieprawdziwe, wartosc po ":"

*/

var x = 5;
var y = 11;

var wynik = (x == 5) ? 1 : 0;
document.write(wynik);
document.write("<br>");

var wynik = (x == 7) ? 5 : 10;
document.write(wynik);
document.write("<br>");

var wynik = (x > y) ? 14 : 125;
document.write(wynik);
document.write("<br>");

var wynik = (x != y) ? "Prawda" : "Fałsz";
document.write(wynik);
document.write("<br>");

/* WYNIK - WYDRUK

1
10
125
Prawda

*/