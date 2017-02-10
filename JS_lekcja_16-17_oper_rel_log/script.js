// JavaScript File


/* ---------- OPERATORY RELACYJNE -------------------
x == y  równe
x != y  nierówne
x > y   wieksze
x < y   mniejsze
x >= y  wieksze lub rowne
x <= y  mniejsze lub rowne
*/

var x = 6;
var y = 3;

document.write("------------ OPERATORY RELACYJNE --------------","<br>");

if (x != y)
    document.write("prawda");
else
    document.write("falsz");
    
document.write("<br>");
    
if (x + y == 9)
    document.write("prawda");
else
    document.write("falsz");

document.write("<br>");


/* ------------ OPERATORY LOGICZNE ------------------
&&  koniunkcja, czyli "i"
||  "lub", czyli alternatywa
!   "nie", czyli zaprzeczenie (x == 5) && !(y == 1) x musi byc rowne 5, ale
    y nie moze byc rowne 1
*/

var x = 6;
var y = 5;

document.write("<br>", "------------ OPERATORY LOGICZNE --------------","<br>");

if ((x == 6) && !(y == 2))
    document.write("prawda");
else
    document.write("falsz");
    
document.write("<br>");
    
if ((x == 1) || (y == 2))
    document.write("prawda");
else
    document.write("falsz");
    
/* WYNIK - WYDRUK
------------ OPERATORY RELACYJNE --------------
prawda
prawda

------------ OPERATORY LOGICZNE --------------
prawda
falsz 
*/