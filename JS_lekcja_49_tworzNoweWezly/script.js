// JavaScript File

// TWORZENIE WEZLOW W JAVASCRIPT


function stworzAkapit()
{
    var akapit = document.createElement("p"); // dodajemy <p> ale nie podajemy <>
    document.getElementById("rozwiniecie").appendChild(akapit);
    //pobieramy element wg "id" i dodajemy nasz paragraf przez "akapit"
    akapit.innerHTML = "<br>"+"Więcej na ten temat w kolejnym wykładzie";
    //przez innerHTML mwypelniamy zawartosc paragrafu
}

window.onload = function()
{
    stworzAkapit();
};

/* WYNIK:
ponizej drugiego akapitu dopisany jest akapit:
"Więcej na ten temat w kolejnym wykładzie"
*/


/* UWAGA
Dodanie akapity w Javascript nie zmienia oryginalnego kodu HTML.
Jedynie DOM, czyli sposob wyswietlania sie zmienia.
*/