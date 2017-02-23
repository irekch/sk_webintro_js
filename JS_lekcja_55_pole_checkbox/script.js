// JavaScript File

// POLE CHECKBOX - VALIDATION

/* Pole typu checkbox rowniex musi podlegac validacji, jesli chodzi
np. o to aby formularz zostal przyjety po akceptacji regulaminu, wowczas
oczekujemy, ze uzytkownik zrobi znaczek w odpowiednim polu */

// w naszym HTML pole typu checkbox ma id="regulamin"

function zatwierdzRegulamin()
{
    //najpierw odnosimy sie do formularza wg. "id" i funkcji 'submit'
    document.getElementById("zamowienie").onsubmit = function()
    {
        if (document.getElementById("regulamin").checked == true)
        {
            //zeruje zawartosc <div> o id "blad" w pliku HTML
            document.getElementById("blad").innerHTML = "";
            return true;
            //przyjmuje formularz
        }
        else
        {
            //wpisuje zawartosc do <div> o id="blad" przez "innerHTML"
            document.getElementById("blad").innerHTML = "Zatwierdż Regulamin";
            return false;
            //return false - oznacza odmowe przyjecia formularza
        }
    }
}

window.onload = function()
{
    zatwierdzRegulamin();
}

// UWAGA - WYDRUKOWAC FORMULARZ