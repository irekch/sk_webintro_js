// JavaScript File

// ON FOCUS, ON BLUR

/* on Focus - gdy umieszczamy kursor w polu formularza, to pole to jest "on focus"
Jesli wyjdziemy z tego pola na drugie, to to pierwsze jest "on blur", 
a z kolei to drugie staje sie "on focus" */

//1.  W pliku HTML przy nazwie produktu dodalismy 'value="Nazwa produktu"'
//    aby wyswietlao sie to w polu przy wywolaniu formularza. Chcemy aby wartosc
//    w plu znikala, gdy najedziemy na pole kursorem.

function poleProduktu()
{
    //przypisujemy zawartosc pola "produkt" do zmiennej
    var poleProdukt = document.getElementById("produkt");
    
    //jesli klikniemy na pole w ktorym byl napis "Nazwa produktu", zerujemy je
    poleProdukt.onfocus = function()
    {
        if(poleProdukt.value == "Nazwa produktu")
        {
            poleProdukt.value = "";
        }
    }
    
    //jesli wyszlismy z pola "produkt" i to pierwsze jest puste, dajemy kom. bledu
    poleProdukt.onblur = function()
    {
        if(poleProdukt.value == "")
        {
            document.getElementById("blad").innerHTML = "Uzupełnij Nazwe produktu";
        }
    }
}

window.onload = function()
{
    poleProduktu();
}

/* WYNIK:
- gdy klikniemy na pole "Nazwa produktu" napis w polu znika
- gdy nastepnie klikniemy na kolejne pole, na gorze pojawi sie komunikat bledu
  "Uzupełnij Nazwe produktu"
*/

// UWAGA - WYDRUKOWAC DWIE WERSJE FORMULARZA