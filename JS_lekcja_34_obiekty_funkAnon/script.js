// JavaScript File

// OBIEKTY - FUNKCJE ANONIMOWE

/* funkcja nonimowa nie posiada swojej nazwy. Jest ona tworzona dynamicznie 
 w momencie gdy ja wywolujemy. Najpierw przypisujemy ja do zmiennej */
 
document.write("-----Tradycyjna Funkcja Anonimowa-------", "<br>");
 
 var tytul = function()  // funkcja anonimowa przypisana do zmiennej
 {
     document.write("Kurs Javascript" + "<br>");
 };
 
 tytul();
 
//---------------------------------------------------------------------
document.write("<br>", "-------Uzycie Obiektu i Metody-------", "<br>");
 
function Kursy(tytul)
{
    this.tytul = tytul;
    function pokazTytul()
    {
        document.write(this.tytul, "<br>");
    }
    this.pokazTytul = pokazTytul;
}

var kursPHP = new Kursy("Kurs PHP");

kursPHP.pokazTytul();
 
//---------------------------------------------------------------------
document.write("<br>", "-------Uzycie Funkcji Anonimowej-------", "<br>");
   
function Kurs(tytul)
 {
    this.tytul = tytul;
    this.pokazTytul = function() //anonimowa funkcj.zostala przypisana do metody
    {
        document.write(this.tytul, "<br>");
    };
 }
 
var kursRuby = new Kurs("Kurs Ruby");
 
kursRuby.pokazTytul();     //teraz automatycznie tworzona jest nasza funkcja
 
 /* WYNIKI - WYDRUK
 
 -----Tradycyjna Funkcja Anonimowa-------
Kurs Javascript

-------Uzycie Obiektu i Metody-------
Kurs PHP

-------Uzycie Funkcji Anonimowej-------
Kurs Ruby

*/
 