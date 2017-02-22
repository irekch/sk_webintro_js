// JavaScript File

// OKIENKA

//-------------------------------------------------------
// Wyprowadzanie ciagu znakow w okienku "alert"
/*
window.onload = function()
{
    alert("Kurs JS");
}
*/
// WYNIK: okienko "alert" z "Kurs JS"

//-------------------------------------------------------
// Wyprowadzanie sumy z kilku liczb w okienku "alert"
/*
window.onload = function()
{
    var x = 10;
    var y = 5;
    alert(x + y);
}
*/
// WYNIK: okienko "alert" z liczba 15

//-------------------------------------------------------
// Okienko pobierajace zawartosc od uzytkownika
/*
window.onload = function()
{
    prompt("Podaj liczbę");
}
*/
// WYNIK: okienko "alert" napisem "Podaj liczbę" i okienkiem do wpisania liczby

//-------------------------------------------------------
// Okienka pobierajace liczbe od uzytkownika i wyswietlenie sumy

window.onload = function()
{
    var x = prompt("Podaj pierwszą liczbę");
    var y = prompt("Podaj drugą liczbę");
    x = parseInt(x);    //zamieniamy tekst na liczbe
    y = parseInt(y);    //zamieniamy tekst na liczbe
    alert(x + y);
}

// UWAGA!!! prompt czyta liczbe jako tekst, wiec pierwotnie bez "parseInt" 
// po podaniu liczb 10 i 5 wynikiem bylo  105, a nie 15.

// WYNIK po zastosowaniu "parseInt":
// wpisuje w pierwszym okienku "alert": 20
// wpisuje w pierwszym okienku "alert": 40
// wynik w trzecim z kolei okienku "alert": 60
