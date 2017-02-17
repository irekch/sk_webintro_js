// JavaScript File


// OBIEKTY - METODY to czynnosci wykonywane przez nasze obiekty

function kursy(tytul, cena)
{
    this.tytul = tytul;
    this.cena = cena;
    this.pokazTytul = pokazTytul;
    this.pokazCene = pokazCene;
}

// stworzenie obiektu o nazwie "kursElixir"
var kursElixir = new kursy("Kurs Elixir", 125.00);

// definiowanie metod
function pokazTytul()
{
    document.write(this.tytul + "<br>");
}

function pokazCene()
{
    document.write(this.cena + "<br>");
}

// wywolanie, czyli uzycie metody
kursElixir.pokazTytul();
kursElixir.pokazCene();

//---------------------------------------------------------------------------
document.write("-------to samo ale przez jedna metode-----------","<br>");

function szkolenia(tytul, cena)
{
    this.tytul = tytul;
    this.cena = cena;
    this.pokazInfo = pokazInfo;
}

// stworzenie obiektu o nazwie "kursJava"
var kursJava = new szkolenia("Kurs Java", 69.00);
var kursRails = new szkolenia("Kurs Rails", 89.00);

// definiowanie metody
function pokazInfo()
{
    document.write(this.tytul+"<br>");
    document.write(this.cena+"zl"+"<br>");
}

// wywolanie, czyli uzycie metody
kursJava.pokazInfo();
kursRails.pokazInfo();

/* WYNIKI - WYDRUK

Kurs Elixir
125
-------to samo ale przez jedna metode-----------
Kurs Java
69zl
Kurs Rails
89zl

*/