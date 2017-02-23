// JavaScript File

// SPRAWDZANIE (VALIDATION) WARTOSCI LICZBOWYCH W FORMULARZU

function sprawdzCzyLiczba()
{
    //najpierw odnosimy sie do formularza wg. "id" i funkcji 'submit'
    document.getElementById("zamowienie").onsubmit = function()
    {
        // sprawdzamy przez "isNaN" (nie jest liczba)
        if (isNaN(document.getElementById("ilosc").value))
        {
            //wpisuje zawartosc do <div> o id="blad" przez "innerHTML"
            document.getElementById("blad").innerHTML = "Wprowadż wartość liczbową";
            return false;
            //return false - oznacza odmowe przyjecia formularza
        }
        else
        {
            //zeruje zawartosc <div> o id "blad" w pliku HTML
            document.getElementById("blad").innerHTML = "";
            return true;
            //przyjmuje formularz
        }
    }
}

window.onload = function()
{
    sprawdzCzyLiczba();
}

// UWAGA - WYDRUKOWAC FORMULARZ