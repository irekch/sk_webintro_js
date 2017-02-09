// JavaScript File

const cena = 200;

// const cena = 100;     <- wartosci stalej nie mozemy juz zmienic !!!
// cena = 100;          <- nie mozemy rowniez nadac tej nazwy do zmiennej !!!

var cena_koncowa = cena * 0.8; // ale mozemy uzyc dodatkowej zmiennej

document.write('cena = ', cena);

document.write('<br>');

document.write('cena z rabatem 20% = ', cena_koncowa);
document.write('<br>');

document.write('---------------------------------------------------------', '<br>');

var cena_wstepna = 300;
const rabat = 0.2;      // czyli 20%

var cena_zRabatem = cena_wstepna - (cena_wstepna*rabat);

document.write('cena poczatkowa = ', cena_wstepna);
document.write('<br>');
document.write('cena z rabatem 20% = ', cena_zRabatem);


/* WYNIK - WYDRUK

cena = 200
cena z rabatem 20% = 160
---------------------------------------------------------
cena poczatkowa = 300
cena z rabatem 20% = 240 

*/