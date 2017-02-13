// JavaScript File


document.write("<br>", "---------------Licznik Staly---------------", "<br>");

var liczby = new Array(100, 200, 300, 400, 500);

for(var i = 0; i < 5; i++)
{
    document.write(liczby[i], "<br>");
}


document.write("<br>", "-----------Licznik-Dlugosc Tabeli----------", "<br>");

var liczby = new Array(100, 200, 300, 400, 500, 600, 700);

for(var i = 0; i < liczby.length; i++)
{
    document.write(liczby[i], "<br>");
}


document.write("<br>", "---Wprowadzanie Danych do Tabeli w Petli-----", "<br>");

var liczby = new Array();

for(var i = 1; i <= 5; i++)
{
    liczby[i] = i*100;
    document.write(liczby[i], "<br>");
}


/* WYNIK - WYDRUK

---------------Licznik Staly---------------
100
200
300
400
500

-----------Licznik-Dlugosc Tabeli----------
100
200
300
400
500
600
700

---Wprowadzanie Danych do Tabeli w Petli-----
100
200
300
400
500

*/