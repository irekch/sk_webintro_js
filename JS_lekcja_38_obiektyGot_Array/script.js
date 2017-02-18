// JavaScript File

// OBIEKTY WBUDOWANE W JAVASCRIPT - OBIEKT "Array"

// tworzymy nowa tablice konstruktorem "Array", czyli powstaje obiekt
var liczby = new Array(10, 20, 30, 40, 50);

document.write(liczby);
// WYDRUK: 10,20,30,40,50

// Metoda "pop" usuwajaca ostatni element tablicy
liczby.pop();
document.write("<br>", liczby);
// WYDRUK: 10,20,30,40

// "pop" uzyte do usuniecia ostatniego elementu i wyswietlenia go na ekranie
document.write("<br>", liczby.pop());
// WYDRUK: 40

// Metoda "shift" - usuwqa element na poczatku tabeli
liczby.shift();
document.write("<br>", liczby);
// WYDRUK: 20,30 (10-tka zostala usunieta, 20 ma element 0, 30 jest elementem 1

// Metoda "push" - dodaje element na koncu tabeli
liczby.push(40);
document.write("<br>", liczby);
// WYDRUK: 20,30,40

// "push" dodanie na koncu kilku wartosci
liczby.push(50, 60, 70);
document.write("<br>", liczby);
// WYDRUK: 20,30,40,50,60,70

// Metoda "unshift" - dodaje elementy na poczatku
liczby.unshift(15, 10);
document.write("<br>", liczby);
// WYDRUK: 15,10,20,30,40,50,60,70

// Metoda "slice" - wycinanie elementow spoza zakresy
document.write("<br>", liczby.slice(2,7)); // element 2 do 6 pozostaly
// WYDRUK: 20,30,40,50,60

// Metoda "reverse" - sortowanie odwrotne
liczby.reverse();
document.write("<br>", liczby);
// WYDRUK: 70,60,50,40,30,20,10,15

// Metoda "join" - umozliwia wprowadzanie naszego separatora
document.write("<br>", liczby.join("+"));
// WYDRUK: 70+60+50+40+30+20+10+15

// WLASCIWOSC "lenght" - wyswietla wielkosc tabeli
document.write("<br>", "Ilosc elementow w tabeli - ", liczby.length);
// WYDRUK: Ilosc elementow w tabeli - 8

// Metoda: "concat" - laczenie tabel
var liczby1 = new Array(10, 20, 30, 40);
var liczby2 = new Array(100, 200, 300, 400);

var liczbyRazem = liczby1.concat(liczby2); // laczymy tabele i przypisujemy
document.write("<br>", liczbyRazem);
// WYDRUK: 10,20,30,40,100,200,300,400