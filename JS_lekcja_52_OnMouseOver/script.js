// JavaScript File

// ON MOUSE OVER - obrazek ma sie powiekszac, gdy najedziemy na niego kursorek

// Wyjsciowa strona wyswietla maly obrazek

// 1. aby odniesc sie do obrazka w HTML musimy mu nadac "id"

function duzyObrazek()
{
    document.getElementById("obrazek").src = "kurs_php_duzy.jpg";
}

function malyObrazek()
{
    document.getElementById("obrazek").src = "kurs_php_maly.jpg";
}


// WYNIK: Po najechaniu kursorem na zdjecie wyswietla sie duzy obrazek
// gdy odjedziemy, ponownie maly

/* CO ZMIENILISMY w pliku HTML:

1.  dodalismy  id="obrazek" do <img>
2.  dodalismy: onmouseover = "duzyObrazek()" onmouseout = "malyObrazek()"
    do <img> wywolujace funcje Javascript duzyObrazek() i malyObraze() 
    z pliku "script.js"
    
*/