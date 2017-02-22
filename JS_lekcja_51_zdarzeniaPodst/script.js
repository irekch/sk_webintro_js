// JavaScript File

// ZDARZENIA - ROBIMY OKIENKU WYSKAKUJACE, GDY KLIKNIEMY NA DOKUMENT

/* tymczasowe skomentowanie aby druga funkcja zadzialala

document.onclick = function() // mamy tutaj obiekt i funkcje
{
    alert("Kurs programowania w PHP5"); // zostanie wyswietlone w okienku "alert"
}

*/

/* WYNIK:
gdy klikniemy gdziekolwiek na strone, pokaze sie okienko "alert"
z komunikatem "Kurs programowania w PHP5"
*/

//----------------------------------------------------------------

// ZADANIE - Teraz chcemy, aby komunikat pokazywal sie tylko wtedy gdy
// klikniemy na obrazek. W tym celu najpiew dodajemy "id" naszegi 'img'
// w pliku HTML

function pokazOkno()
{
    var obrazek = document.getElementById("obrazek");
    obrazek.onclick = function()
    {
        alert("Kurs Programowania PHP dla Początkujących");
    }
}

window.onload = function()
{
    pokazOkno();
}