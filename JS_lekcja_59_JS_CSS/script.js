// JavaScript File

// WYKORZYSTANIE JAVASCRIPT DO ZMIANY KLASY W CSS

/* Sytuacja: pierwotnie obrazek wyswietlany jest w klasie CSS ".obrazki"
w rozmiarze 240px na 206px, tymczasem rozmiar oryginalny to 480x412px.
Chcemy aby po kliknieciu pojawial sie oryginalny rozmiar przez usuniecie klasy 
CSS zmniejszajacej rozmiar obrazka */

function zusunKlase()
{
    //przypisujemy obrazek do zmiennej
    var obrazek = document.getElementById("obrazek");
    
    //uruchamiamy funkcje reagujaca na click
    obrazek.onclick = function()
    {
        //sprawdzamy przez ".className" jaka klase ma obrazek
        if(obrazek.className == "obrazki") //UWAGA! klasa CSS bez "."
        {
            //jesli "obrazek" ma klase ".obrazki" to usuwamy klase
            obrazek.className = "";
        }
        else
        {
            //jesli "obrazek" nie ma klasy, przywracamy klase ".obrazki"
            obrazek.className = "obrazki";
        }
    }
}

window.onload = function()
{
    zusunKlase();
}

/* WYNIK: PO kliknieciu na obrazek powieksza sie on, powtorne klikniecie
powoduje zmniejszenie sie obrazka poprzez powrot do klasy zapisanie w CSS */

// UWAGA: Wydrukuj zrzuty ekranow