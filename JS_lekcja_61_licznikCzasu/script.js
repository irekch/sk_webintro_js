// JavaScript File

// LICZNIKI CZASU

/* Liczniki czasu umozliwiaja wykonywanie kody badz to z opoznieniem, badz
   wielokrotnie w pewnych odstepach czasu */
   
/* Znaczenie funkcji:
   setTimeout("co ma byc", czas) -po czasie w ms nastapi wydazenie (1s=1000ms)
   setInterval("co ma byc", czas) - w odstepie czasu w ms nastapi czynnosc
        czynnosc ta bedze wykonywana, dopoki nie zamkniemy okna przegladarki,
        lub zostanie uzyta funkcja clearInterval()
*/

function pokazOkno()
{
    setTimeout("alert('Kurs JS - jednorazowy')", 2000);
    
//  setInterval("alert('Kurs JS - wielokrotny')", 2000);

    //ponizej strona bedzie odswiezana co czas w ms
//  setInterval("window.location.reload()", 2000);
//  alert("Kurs JS");
}

window.onload = function()
{
    pokazOkno();
}