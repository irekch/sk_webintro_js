// JavaScript File

// OBIEKTY - TWORZENIE KLAS

document.write("<br>", "-----uzycie funkcji anonimowej bez Klasy-----", "<br>");

function Kursy(tytul)
{
    this.tytul = tytul;
    this.pokazTytul = function()
    {
        document.write(this.tytul, "<br>");
    }
}

var kursPHP = new Kursy("Kurs PHP")     // tworzenie nowego obiektu
var kursRuby = new Kursy("Kurs Ruby");  // tworzenie nowego obiektu

kursPHP.pokazTytul();
kursRuby.pokazTytul();

//-----------------------------------------------------------------------
/* UWAGA - W powyzszym wypadku przy kazdym wywolaniu funkcji powstaje nowa
 kopia metody pokazTytul. Aby tego uniknac tworzymy klase pokazTytul */
 
document.write("<br>", "---------zastosowanie Klasy---------", "<br>");
 
function Szkolenia(tytul)
{
    this.tytul = tytul;
}

// tworzymy Klase UWAGA - nazwe klasy piszemy od duzej litery
// WAZNE - Klasy tworzymy za pomoca ".prototype."
Szkolenia.prototype.pokazTytul = function() // tworzymy metode Klasy "Szkolenia"
{
    document.write(this.tytul, "<br>");
}

var kursJava = new Szkolenia("Kurs Java");      //tworzenie nowego obiektu
var kursRails = new Szkolenia("Kurs Rails");    //tworzenie nowego obiektu

kursJava.pokazTytul();
kursRails.pokazTytul();

/* WYNIKI - WYDRUK


-----uzycie funkcji anonimowej bez Klasy-----
Kurs PHP
Kurs Ruby

---------zastosowanie Klasy---------
Kurs Java
Kurs Rails

*/