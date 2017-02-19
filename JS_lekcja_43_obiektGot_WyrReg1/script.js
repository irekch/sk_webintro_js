// JavaScript File

// WYRAZENIA REGULARNE _ cz.1

var tekst = "Kurs Access Podstawy";
document.write("Tekst: ", tekst, "<br>");
document.write("-----------------------------------------", "<br>");

// Wyrazenie regularne tworzy sie przez zawarcie tekstu miedzy / /
var szukaj = /Kurs/;    //przypisanie Wyrazenia Regularnego do zmiennej
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: Kurs

var szukaj = /kurs/;    //przypisanie Wyrazenia Regularnego do zmiennej
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: null  (dlatego ze w tekscie mamy "Kurs", a nie "kurs")

// wprowadzamy modyfikator "i" ktory powoduje ignorowanie duzych i malych liter
var szukaj = /kurs/i;    //do Wyrazenia Regularnego dodajemy modyfikator
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: Kurs

// wprowadzamy modyfikator "g" ktory powoduje globalne wyszukiwania
var szukaj = /s/ig;    //dodajemy modyfikator dodatkowy modyfikator
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: s,s,s,s   
// g- globalne wyszukiwanie wyszukuje wszystkie wystapienia liter

// wprowadzamy modyfikator "g" ktory powoduje globalne wyszukiwania
var szukaj = /a/ig;    //dodajemy modyfikator dodatkowy modyfikator
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: A,a

//-----------POCZATEK LEKCJI KOLEJNE, CZYLI 44--------------------------

document.write("----------LEKCJA 44----------", "<br>");

// wystapien "abc" w tekscie, czyli ciagu znakow w calosci
var szukaj = /abc/ig;
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: null

// do Wyrazenia Regularnego wprowadzamy [ ] co umozliwia szukanie wszystkich
// wystapien a b c (niezaleznie od wielkosci liter bo mamy modyfikator "i")
var szukaj = /[abc]/ig;    //dodajemy modyfikator dodatkowy modyfikator
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: A,c,c,a   (litera"b" nie zostala znaleziona w tekscie)


/*  MODYFIKATORY
i - ignoruje wielkosc liter
g - powoduje globalne wyszukiwanie
*/

/* WYNIKI -WYDRUK
Tekst: Kurs Access Podstawy
-----------------------------------------
Kurs
null
Kurs
s,s,s,s
A,a
----------LEKCJA 44----------
null
A,c,c,a
*/