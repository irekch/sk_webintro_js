// JavaScript File

// UZYCIE STALYCH KLASOWYCH


// Przyklad ponizej nie zawiera Stalej Klasowej, stad musimy powtarzac
// "Programowanie" przy tworzeniach obiektow

document.write("------PROBLEM - bez stosowania stałej Klasowej--  -","<br>");

function Szkolenia(tytul, kategoria)
{
    this.tytul = tytul;
    this.kategoria = kategoria;
}

Szkolenia.prototype.pokazTytul = function() // tworzymy metode Klasy "Szkolenia"
{
    document.write(this.tytul);
    document.write(" - ", this.kategoria, "<br>");
}

var kursJava = new Szkolenia("Kurs Java", "Programowanie");
var kursRails = new Szkolenia("Kurs Rails", "Programowanie");
var kursRuby = new Szkolenia("Kurs Ruby", "Programowanie");

kursJava.pokazTytul();
kursRails.pokazTytul();
kursRuby.pokazTytul();

//---------------------------------------------------------------------------
document.write("<br>","------SOLUTION -stosujemy stałą Klasową--  -","<br>");

function Kursy(tytul)
{
    this.tytul = tytul;
}

Kursy.prototype.pokazTytul = function() // tworzymy metode Klasy "Kursy"
{
    document.write(this.tytul, " - ");
}

Kursy.prototype.KATEGORIA = "Programowanie"; //deklaracja stalej klasowej
Kursy.prototype.pokazKategorie = function()  //deklaracja Klasy do stalej
{
    document.write(this.KATEGORIA, "<br>"); // stala DUZYMI LITERAMI
}

var kursJavascript = new Kursy("Kurs Javascript");
var kursElixir = new Kursy("Kurs Elixir");
var kursPhyton = new Kursy("Kurs Phyton");

kursJavascript.pokazTytul(); kursJavascript.pokazKategorie();
kursElixir.pokazTytul(); kursElixir.pokazKategorie();
kursPhyton.pokazTytul(); kursPhyton.pokazKategorie();

/* WYNIKI - WYDRUK
------PROBLEM - bez stosowania stałej Klasowej-- -
Kurs Java - Programowanie
Kurs Rails - Programowanie
Kurs Ruby - Programowanie

------SOLUTION -stosujemy stałą Klasową-- -
Kurs Javascript - Programowanie
Kurs Elixir - Programowanie
Kurs Phyton - Programowanie
*/