// JavaScript File

/* WEZLY
przyklady wezlow <h1> <h3> <p>
Elementy maja elementy podrzedne np zawartosc <h1> jest podrzednym wezlem 
do wezla <h1>. */

function zmienAtrybut()
{
    var tytul = document.getElementById("tytul");
    tytul.setAttribute("title", "Kurs PHP akuku"); // w nawiasie nazwa atrybutu i jego wartosc
}

window.onload = function()
{
    zmienAtrybut();
}

/* WYNIK DZIALANIA SKRYPTU
po najechaniu na nasz tytul "Kurs programowania w PHP" pojawi sie "Kurs PHP akuku"

Oryginalnie nasz tytul w HTML nie ma atrybutu "title", ten zostal nadany w JS
*/