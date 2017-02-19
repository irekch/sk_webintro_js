// JavaScript File

// WYRAZENIA REGULARNE _ cz.2

//-------------------------------------------------------------------------
var tekst = "Kurs Access 2010 Podstawy";
document.write("<br>", "Tekst: ", tekst, "<br>");
document.write("-----------------------------------------", "<br>");
//-------------------------------------------------------------------------

var szukaj = /[Pys]/g;    //dodajemy modyfikator dodatkowy modyfikator
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: s,s,s,P,s,y

var szukaj = /[a-z]/g;    //wszystkie litery od "a" do "z" (male litery)
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: u,r,s,c,c,e,s,s,o,d,s,t,a,w,y

var szukaj = /[A-Z]/g;    //wszystkie litery od "A" do "Z" (duze litery)
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: K,A,P

var szukaj = /[0-9]/g;    //wszystkie cyfry od "0" do "9" (duze litery)
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: 2,0,1,0

var szukaj = /[\w]/g;    //usuniecie wszystkich spacji
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: K,u,r,s,A,c,c,e,s,s,2,0,1,0,P,o,d,s,t,a,w,y

var szukaj = /[\W]/g;    //usuniecie wszystkiego oprocz spacji
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: , ,   (spacje zostaly zamienione na "," czyli przewy miedzy znakami)

var szukaj = /[\d]/g;    //wyprowadzenie cyfr
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: 2,0,1,0

var szukaj = /[\D]/g;    //wyprowadzenie wszystkiego, co nie jest cyfra
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: K,u,r,s, ,A,c,c,e,s,s, , ,P,o,d,s,t,a,w,y

var szukaj = /[^a]/g;    //wyprowadzenie wszystkiego, co nie jest mala "a"
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: K,u,r,s, ,A,c,c,e,s,s, ,2,0,1,0, ,P,o,d,s,t,w,y

var szukaj = /[^aA]/g;  //wyprowadzenie wszystkiego, co nie jest "a" i "A"
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: K,u,r,s, ,c,c,e,s,s, ,2,0,1,0, ,P,o,d,s,t,w,y

var szukaj = /stawy$/g;  //sprawdzamy, czy na koncu nie ma "stawy"
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: stawy 
// znak "$" sprawdza koniec ciagu znakow

var szukaj = /^Kurs/g;  //sprawdzamy, czy na poczatku nie ma "Kurs"
document.write(tekst.match(szukaj), "<br>"); // .match z poprzedniej lekcji
// WYNIK: Kurs
// znak "^" sprawdza poczatek ciagu znakow

//UWAGA - jesli przy uzyciu ^ lub $ wynik bedzie negatywny, wyswietli sie "null"

/*  MODYFIKATORY
i - ignoruje wielkosc liter
g - powoduje globalne wyszukiwanie
*/