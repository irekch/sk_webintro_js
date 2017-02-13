// JavaScript File

// UZYCIE FUNKCJI WYWOLUJACEJ INNE FUNKCJE


function pokazTytul()
{
    document.write("Kurs CSS 2016" + "<br>");
}

function pokazCene()
{
    document.write(42.50 + " zl"+ "<br>");
}

function pokazInfo()
{
    pokazTytul();
    pokazCene();
}

pokazInfo();        // uzycie funkcji zawierajacej 2 inne funkcje

/* WYNIK - WYDRUK

Kurs CSS 2016
42.5 zl

*/