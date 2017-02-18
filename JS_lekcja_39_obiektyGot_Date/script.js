// JavaScript File

// OBIEKTY WBUDOWANE W JAVASCRIPT - OBIEKT "Date"

var data = new Date();
document.write(data, "<br>");

// WYNIK: dokladna data w momencie uruchomienia metody
// Sat Feb 18 2017 23:04:12 GMT+0100 (Środkowoeuropejski czas stand.)

//-------------------------------------------------------------------

var data1 = new Date(2011, 9, 11); // nadanie daty
document.write(data1, "<br>");
// WYNIK:
// Tue Oct 11 2011 00:00:00 GMT+0200 (Środkowoeuropejski czas letni)
// UWAGA! - miesiace sa liczone od zera, wiec jesli chcemy miec "Sept"
// zamiast "Oct" musimy wpisac "Date(2011,08,11)"