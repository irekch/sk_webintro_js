// JavaScript File

// UZYCIE FUNKCJI Z WYPROWADZENIEM WYNIKU

//--------------------------------------------------------------------

document.write("<br>", "---funkcja z wyprowadzeniem wyniku---", "<br>");

function zwrocWartosc()
{
    document.write("Funkcja ");
    return 100;     // UWAGA polecenie "return" konczy wykonywanie funkcji
}

document.write(zwrocWartosc());

//--------------------------------------------------------------------

document.write("<br>");
document.write("<br>", "---funkcja z parametr. i wyprowadzeniem wyniku---", "<br>");

function sumuj(x, y)
{
    return(x + y);
}

document.write("suma = "+ sumuj(15, 35), "<br>");
document.write("suma = "+ sumuj(115, 350), "<br>");

//--------------------------------------------------------------------

document.write("<br>");
document.write("<br>", "---funkcja z parametr. i wyprowadz true/false---", "<br>");

function porownaj(x, y)
{
    return x == y;
}

document.write(porownaj(10, 10), "<br>");
document.write(porownaj(10, 15));


/* WYNIK - WYDRUK
---funkcja z wyprowadzeniem wyniku---
Funkcja 100

---funkcja z parametr. i wyprowadzeniem wyniku---
suma = 50
suma = 465


---funkcja z parametr. i wyprowadz true/false---
true
false
*/