// JavaScript File


document.write("------funkcje z jednym parametrem---------", "<br>");

function pokazTytul(tytul)      // stworzenie funcji pobierajacej Parametr
{
    document.write(tytul, "<br>");
}

pokazTytul("Kurs HTML");        // podanie Parametru do funkcji
pokazTytul("Kurs RUBY");


document.write("<br>", "------funkcje z kilkoma parametrami---------", "<br>");

function infoKurs(tytul, cena, kategoria)
{
    document.write(tytul + "<br>");
    document.write(cena + "<br>");
    document.write(kategoria + "<br>");
}

infoKurs("Kurs Rails", 152+" zl", "Komputerowe"); // uzycie 3 parametrow

document.write("<br>", "----funkcje operacja mat. na parametrach----", "<br>");

function suma(x, y)
{
    document.write("suma = ", x + y, "<br>");
}

suma(100, 200);

/* WYNIK - WYDRUK
------funkcje z jednym parametrem---------
Kurs HTML
Kurs RUBY

------funkcje z kilkoma parametrami---------
Kurs Rails
152 zl
Komputerowe

----funkcje operacja mat. na parametrach----
suma = 300
*/