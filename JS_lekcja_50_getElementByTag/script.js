// JavaScript File

// GET ELEMENT BY TAG NAME

/*  Zamiast odwolywac sie do pojedynczego elementu przez "id", chcemy
odwilac sie do calej grupy np wszystkich <h1> lub wszystkich <p> */

function pokazInfo()
{
    var info = document.getElementsByTagName("p"); // tutaj paragraf bez <>
    // wszystkie akapity <p> w formie tablicy zostana przypisane zmiennej
    
    //ZADANIE - chcemy sprawdzic ile takich akapitow mamy, czyli sprawdzic
    //ile elementow ma nasza tablica "info"
    alert(info.length);
}

window.onload = function()
{
    pokazInfo();
}

// WYNIK: 2 w okienku "alert" (bo mamy dwa akapity)


//------------------------------------------------------------
// Chcemy sprawdzic, ile obrazkow jest w naszym dokumencie HTML

function pokazInfo2()
{
    var info2 = document.images.length; // tutaj paragraf bez <>
    // wszystkie images w formie tablicy zostana przypisane zmiennej
    
    //ZADANIE - chcemy sprawdzic ile mamy zdjec, czyli sprawdzic
    //ile elementow ma nasza tablica "info"
    alert(info2);
}
/*
window.onload = function()
{
    pokazInfo2();
}
*/



// WYNIK: 1 w okienku "alert" (bo mamy 1 zdjecie)

/*  UWAGA - JESLI CHCEMY WIDZIEC OBIE FUNKCJE W AKCJI, MUSIMY JEDNA Z NICH
    ZAMKNAC W KOMENTARZY- NIE MOGA OBIE ZALADOWAC SIE W window.onload 
*/