// JavaScript File

// UZYCIE KONSTRUKTORA OBIEKTY Z KILKOMA PARAMETRAMI

function kursy(tytul, cena, kategoria)
{
    this.tytul = tytul;
    this.cena = cena;
    this.kategoria = kategoria;
}

var kursAccess = new kursy("Kurs Access 2010", 69, "Biurowe");
var kursRuby = new kursy("Kurs Ruby 2.3", 80, "Internetowe");

document.write(kursAccess.tytul + "<br>");
document.write(kursAccess.cena + " zl" + "<br>");
document.write(kursAccess.kategoria + "<br>");

document.write("-----------------------------", "<br>")

document.write(kursRuby.tytul + "<br>");
document.write(kursRuby.cena + " zl" + "<br>");
document.write(kursRuby.kategoria + "<br>");


/* WYNIKI - WYDRUK

Kurs Access 2010
69 zl
Biurowe
-----------------------------
Kurs Ruby 2.3
80 zl
Internetowe

*/