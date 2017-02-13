// JavaScript File

function pokazX()
{
    var x = 1200;
    return x;
}

document.write(pokazX(), "<br>");

/* UWAGA - ponizej "x" sie nie wyswietli, poniewaz zmienna "x" zostala
zadeklarowana wewnatrz funkcji, a wiec lokalnie */

document.write(x, "<br>");  // tutaj wyswietli sie "undefined" bo zmiennej "x"
                            // nie widac

//-----------------------------------------------------

document.write("<br>", "--------------------", "<br>");

/* UWAGA ponizej zmienna "x" jest zadeklarowana globalnie, a wiec jest
widzialna zarowno wewnatrz funcji, jak i poza nia */

var x = 555;

function showX()
{
    return x;
}

document.write(showX(), "<br>");

document.write(x, "<br>"); 


/* WYNIK - WYDRUK

1200
undefined

--------------------
555
555

*/