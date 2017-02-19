// JavaScript File

// OBIEKTY WBUDOWANE W JAVASCRIPT - OBIEKT "Date" - INICJALIZACJA ob. "Date"


// Inicjalizacja z biezaca data
var data = new Date();
document.write(data, "<br>");

// WYNIK: dokladna data w momencie uruchomienia metody
// np. Sat Feb 18 2017 23:04:12 GMT+0100 (Środkowoeuropejski czas stand.)

//-------------------------------------------------------------------

// Inicjalizacja z nadaniem konkretnej daty
var data1 = new Date(2011, 9, 11); // nadanie daty
document.write(data1, "<br>");

// WYNIK:
// Tue Oct 11 2011 00:00:00 GMT+0200 (Środkowoeuropejski czas letni)

// UWAGA! - miesiace sa liczone od zera, wiec jesli chcemy miec "Sept"
// zamiast "Oct" musimy wpisac "Date(2011,08,11)"

//-------------------------------------------------------------------

// Inicjalizacja z podaniem polnej daty i czasu az do sekundy
var data1 = new Date(2011, 8, 11, 15, 23, 40); // nadanie daty na wrzesien
// podane sa w nawiasie (rok, miesiac od 0, dzien, gozina, minuta, sekunda)
document.write(data1, "<br>");

// WYNIK: data wrzesniowa z godzina:minuta:sekunda
// Sun Sep 11 2011 15:23:40 GMT+0200 (Środkowoeuropejski czas letni)

//-------------------------------------------------------------------

// Co sie dzieje, kiedy przyinicjalizacji podamy wartosc wuzsza niz
// normaly zakres np. zamiast godz. do 24 podamy 30
var data1 = new Date(2011, 8, 11, 30, 23, 40); // wpisalem 30 godzine
document.write(data1, "<br>");

// WYNIK: nadmiarowe 24 godz zostaly przeniesione na kolejny dzzien
// Mon Sep 12 2011 06:23:40 GMT+0200 (Środkowoeuropejski czas letni)
// normalnie bylo: Sun Sep 11 2011 15:23:40 GMT+0200 (Środkowoeuropejski czas letni)

// UWAGA: czas mierzony jest w milisekundach 1 sek = 1000 milisekund

