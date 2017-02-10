// JavaScript File

//------------------- TABLICE -------------------------------

var liczby = new Array();   //tworzymy pusta tablice o nazwie "liczby"
                            //w nawiasie mozna podaj liczbe elementow w tablicy

liczby[0] = 1000;           // dodajemy pierwszy element do tablicy
liczby[1] = 2000;
liczby[2] = 3000;

document.write(liczby);     //wyswietlamy cala tablice

document.write("<br>");

document.write(liczby[1]);  //wyswietlamy drugi element tablicy


// Tablice mozna przy tworzeniu wypelniac wartosciami
document.write("<br>", "------------inicjacja Tablicy--------------", "<br>");

var nowe_liczby = new Array(111, 222, 333, 444);

document.write(nowe_liczby);     //wyswietlamy cala tablice

document.write("<br>");

document.write(nowe_liczby[1]);  //wyswietlamy drugi element tablicy


document.write("<br>", "------------inna inicjacja Tablicy--------------", "<br>");

var liczby_test = [10, 20, 30, 40, 50];

document.write(liczby_test);     //wyswietlamy cala tablice

document.write("<br>");

document.write(liczby_test[4]);  //wyswietlamy 4-ty element tablicy


document.write("<br>", "------------tablice tekstowe--------------", "<br>");

var imiona = ["Tomek", 'Irek', "Monika"];


document.write(imiona);     //wyswietlamy cala tablice

document.write("<br>");

document.write(imiona[2]);  //wyswietlamy 2-gi element tablicy

/* WYNIK - WYDRUK
1000,2000,3000
2000
------------inicjacja Tablicy--------------
111,222,333,444
222
------------inna inicjacja Tablicy--------------
10,20,30,40,50
50
------------tablice tekstowe--------------
Tomek,Irek,Monika
Monika 
*/