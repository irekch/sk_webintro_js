// JavaScript File

// FORMULARZE / FORMS - VALIDATION

/* Sprawdzanie zawartosci/poprawnosci wpisu do pol zrobimy w Javascript
odwoloujac sie do "id" pol w pliku HTML. Caly formularz rowniez posiada 
swoj "id" o nazwie 'zamowienie'
*/


function sprawdzImie()
{
    //najpierw odnosimy sie do formularza wg. "id" i funkcji 'submit'
    document.getElementById("zamowienie").onsubmit = function()
    {
        if (document.getElementById("imie").value == "") //jesli imie puste
        {
            //wpisuje zawartosc do <div> o id="blad" przez "innerHTML"
            document.getElementById("blad").innerHTML = "Uzupelnij imie";
            return false;
            //return false - oznacza odmowe przyjecia formularza
        }
        else
        {
            //zeruje zawartosc <div> o id "blad" w pliku HTML
            document.getElementById("blad"). innerHTNL = "";
            return true;
            //przyjmuje formularz
        }
    }
}

window.onload = function()
{
    sprawdzImie();
}


// UWAGA - WYDRUKOWAC FORMULARZ
