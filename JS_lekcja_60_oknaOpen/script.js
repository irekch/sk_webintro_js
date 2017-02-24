// JavaScript File

// OTWIERANIE OKIEN

/* Okna:
   - "window" - oznacza okno przegladarki
   - "alert" - okno komunikatow.
Sytuacja: mamy strone z przyciskiem "Kliknij" na dole. 
1. Chcemy, aby po kliknieciu otwieralo sie nowe okno przegladarki.
2. Ale chcemy tez aby wczesniej pokazalo sie okno, 
   czy chcemy przejsc do innej strony.
   
Uzywamy funkcji Javascript:
- "window.open()" - otwiera nowe okno przegladarki
- "confirm()" - otwiera okienko typu "alert" z przycikami "OK" i "Anuluj"
  oraz przekazuje wartosc "true" lub "false"
*/

function noweOkno()
{
    //przypisujemy wartosc z id do zmiennej (bez "var na poczatku tez dziala")
    var przycKliknij = document.getElementById("przycisk");
    
    //po kliknieciu uruchamiana jest funkcja
    przycKliknij.onclick = function()
    {
        //uzywamy funkcji JS "confirm" i wartosc t/f przypisujemy do zmiennej
        var zapytanie = confirm("Cza na pewno chcesz otworzyc nowe okno?");
        
        if (zapytanie == true)
        {
            window.open("https://www.w3schools.com/js/");
        }
    }
}

window.onload = function()
{
    noweOkno()
}

/* WYNIK: Po kliknieciu na przycisk "Kliknij" otwiera sie okienko "alert"
z apytaniem "Cza na pewno chcesz otworzyc nowe okno?" oraz przyciskami "OK"
jak i "Anuluj". Po nacisnieciu "OK" przechodzimy do strony przy "window.open()"
przy "Anuluj"  pozostajemy na naszej stronie. */

// UWAGA - Wydrukj zrzut ekranu