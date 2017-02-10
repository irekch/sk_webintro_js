// JavaScript File

var x = 1;

document.write("przed komendą 'switch case' x = ", x);
document.write("<br>", "------------------------------------", "<br>", "<br>");

document.write("SYNTAX PRAWIDŁOWY, z użyciem 'break'","<br>");

switch (x)
{
    case 1:                                 // WAZNE - tutaj na koncu ":"
        document.write("x jest równe 1");   // a tutaj ";"
        break;
    case 2:
        document.write("x jest równe 2");
        break;
    case 3:
        document.write("x jest równe 3");
        break;
    // instrukcja "default" ponizej zostanie wykonana 
    // jesli poprzednie "case" nie zostana spelnione
    default:    
        document.write("x nie jest w przedziale 1 do 3");
}

document.write('<br>', '<br>');

// UWAGA, PONIZEJ JEST BLEDNY SYNTAX, bo nie został uzyty "break"
// wówczas wszystkie instrukcje po każdym "case" są wykonywane

document.write("SYNTAX Z BŁĘDEM, bo bez 'break'","<br>");

switch (x)
{
    case 1:                                 // WAZNE - tutaj na koncu ":"
        document.write("x jest równe 1 ");   // a tutaj ";"
    case 2:
        document.write("x jest równe 2 ");
    case 3:
        document.write("x jest równe 3 ");
    default:
        document.write("x nie jest w przedziale 1 do 3");
}

/* WYNIK _ WYDRUK

przed komendą 'switch case' x = 1
------------------------------------

SYNTAX PRAWIDŁOWY, z użyciem 'break'
x jest równe 1

SYNTAX Z BŁĘDEM, bo bez 'break'
x jest równe 1 x jest równe 2 x jest równe 3 x nie jest w przedziale 1 do 3 

*/