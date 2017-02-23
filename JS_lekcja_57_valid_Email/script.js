// JavaScript File

// SPRAWDZANIE (VALIDATION) poprawnosci wpisania adresu e-mail

function sprawdzEmail()
{
    //najpierw odnosimy sie do formularza wg. "id" i funkcji 'submit'
    document.getElementById("zamowienie").onsubmit = function()
    {
        //tworzymy wzorzec: w srodku tekstu musi byc "@"
        var wzorzecEmail = /[@]/;
        
        //jesli nasz element email jest zgodny z wzorcem
        if (document.getElementById("email").value.match(wzorzecEmail)) 
        {
            //zeruje zawartosc <div> o id "blad" w pliku HTML
            document.getElementById("blad").innerHTML = "";
            return true;
            //przyjmuje formularz
        }
        else 
        {
            //wpisuje zawartosc do <div> o id="blad" przez "innerHTML"
            document.getElementById("blad").innerHTML = "Wpisz prawidłowy E-mail";
            return false;
            //return false - oznacza odmowe przyjecia formularza
        }
    }
}

window.onload = function()
{
    sprawdzEmail();
}

// UWAGA - WYDRUKOWAC FORMULARZ