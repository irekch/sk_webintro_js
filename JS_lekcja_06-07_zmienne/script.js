// JavaScript File

/* typu zmiennych w JavaScript nie trzeba deklarowac, 
przydzielane sa automatycznie */

var x = 125;
var y = 10.23;
var tekst = "Zmienna tekstowa"

document.write(x)
document.write("<br>")          // line break
document.write(y);
document.write('<br>');         // line break moze byc zarowno z "" jak i z ''
document.write(tekst);
document.write('<br>');
document.write(x, y, tekst);    // wszystko wyswietlane w jednej linii
document.write('<br>');
document.write(x,'<br>', y,'<br>', tekst); // wyswietlane jedno pod drugim

/* 
NIEPRAWIDLOWE NAZWY ZMIENNYCH

2tekst - zmienna nie moze sie zaczynac od cyfry -> lepniej tekst2
@witaj  - zadnych znakow specjalnych    -> mozna _witaj lub $witaj
kurs php    - zadncy spacji w zmiennej -> lepiej kurs_php lub kursPhp

*/