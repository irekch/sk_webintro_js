// JavaScript File

// OBIEKTY WBUDOWANE W JAVASCRIPT - OBIEKT "Date" - METODY


// Metoda ".getFullYear" - wyprowadz rok biezacy
var data = new Date(); // bez parametru - poda biezacy rok
document.write("rok biezacy - ", data.getFullYear(), "<br>");
// WYNIK:
// rok biezacy - 2017

var data = new Date(2015, 3, 12);   // z parametrem - poda rok z daty parametru
document.write("podany rok - ", data.getFullYear(), "<br>");
// WYNIK:
// podany rok - 2015


// Metoda ".getMinutes" - wyprowadz rok
var data = new Date(2011, 8, 11, 15, 23, 40);
document.write('podana minuta - ', data.getMinutes(), "<br>");
// WYNIK:
// podana minuta - 23

// Przyklad zastosowania metody "Date"
var data = new Date();
document.write("Godzina: ", data.getHours(), "<br>");
document.write("Minuta: ", data.getMinutes(), "<br>");
document.write("Sekunda: ", data.getSeconds(), "<br>");
/* WYNIK:
   Godzina: 14
   Minuta: 1
   Sekunda: 20
*/

// Metoda ".getValue" - podanie wartosci daty w milisekundach
var data = new Date();
document.write("Wartosc daty w ms: ", data.valueOf(), "<br>");
// WYNIK:
// Wartosc daty w ms: 1487509280091

// Metoda ".toLocaleString" i ".toLocalDateString" wyswietlanie daty w formacie lokalnym
var data = new Date();
document.write("data i godz. w formacie lokalnym (PL): ", data.toLocaleString(), "<br>");
document.write("data w formacie lokalnym (PL): ", data.toLocaleDateString(), "<br>");
/* WYNIKI:
   data i godz. w formacie lokalnym (PL): 19.02.2017, 14:01:20
   data w formacie lokalnym (PL): 19.02.2017
*/

var data1 = new Date();
data1.setFullYear(2011, 3, 20); // zamiast aktualnego roku nadaje konkretny
document.write(data1, "<br>"); // wyswietla pelen format z nadanym rokiem
// WYNIK:
// Wed Apr 20 2011 14:15:41 GMT+0200 (Środkowoeuropejski czas letni)
// godzina i inne jest biezaca, ale rok jest ten narzucony przez setFullYear

/* JESZCZE RAZ WYNIKI - WYDRUK
rok biezacy - 2017
podany rok - 2015
podana minuta - 23
Godzina: 14
Minuta: 1
Sekunda: 20
Wartosc daty w ms: 1487509280091
data i godz. w formacie lokalnym (PL): 19.02.2017, 14:01:20
data w formacie lokalnym (PL): 19.02.2017
Wed Apr 20 2011 14:15:41 GMT+0200 (Środkowoeuropejski czas letni)
*/