// JavaScript File



function kursy(tytul) // tworzenie Konstruktora o nazwie "kursy" z parametrem
{
    this.tytul = tytul; // po "this" jest nazwa wlasciwosci o nazwie "tytul"
                        // i do niej przypisujemy wartosc parametru
                        // this. wskazuje na konkretny obiekt
}

// tworzenie konkretnego obiektu o nazwie "kursExcel"

// UWAGA - kazdy obiekt stworzony przy pomocy "kursy" bedzie posiadal wlasciwosc
// o nazwie "tytul"

var kursExcel = new kursy("Kurs Excel 2010");


// wysweitlenie obiektu

document.write("-------bez podania wlasciwosci obiektu------", "<br>", "<br>");

// ten zapis nie wystarczy, gdyz nie podalismy wlasciwosci obiektu
document.write(kursExcel);

document.write("<br>","<br>", "-------z podaniem wlasciwosci obiektu------", "<br>", "<br>");

// dopiero po podanie wlasciwosci obiektu, czyli "tytul" obiekt sie wyswietla
document.write(kursExcel.tytul);

//-----------------------------
document.write("<br>","<br>", "-------inny przyklad------", "<br>", "<br>");

var kursWord = new kursy("Kurs Word 2010");
document.write(kursWord.tytul);


/* WYNIKI - WYDRUK

-------bez podania wlasciwosci obiektu------

[object Object]

-------z podaniem wlasciwosci obiektu------

Kurs Excel 2010

-------inny przyklad------

Kurs Word 2010

*/