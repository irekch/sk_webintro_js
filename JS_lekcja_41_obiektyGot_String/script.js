// JavaScript File

// OBIEKTY WBUDOWANE W JAVASCRIPT - OBIEKT "String" - METODY

var tekst = new String("Kurs Elixir Podstawy");

//---------METODY obiektu "String"---------------------------------

// Metoda ".length" zwraca dlugosz ciagu znakow
document.write(tekst.length, "<br>");
// WYNIK:
// 20

// Metoda ".charAt" zwraca litere wg pozycji w ciagu zankow
document.write(tekst.charAt(3), "<br>"); // 3 znak liczony od lewej i od 0
// WYNIK: (0 znak to "K", a 3-ci to "s")
// s

// Metoda ".indexOf" zwraca pierwsza pozycje litery w ciagu znakow
// a ignoruje nastepne wystapienia
document.write(tekst.indexOf("K"), "<br>");
document.write(tekst.indexOf("z"), "<br>");
// WYNIK:
// 0
// -1   (bo literka "z" w ogole nie wystepuje w ciagu znakow)

// Metoda ".lastIndexOf" zwraca ostatnia pozycje litery w ciagu znakow
// a ignoruje nastepne wystapienia
document.write(tekst.lastIndexOf("s"), "<br>");
// WYNIK:
// 15

// Metoda ".lastIndexOf" zwraca ostatnia pozycje litery w ciagu znakow
// a ignoruje poprzednie wystapienia
document.write(tekst.toLowerCase(), "<br>");
document.write(tekst.toUpperCase(), "<br>");
// WYNIK:
// kurs elixir podstawy
// KURS ELIXIR PODSTAWY

// Metoda ".search" zwraca miejsce znaku lub kilku zn. w ciagu znakow
// podawane jest miejsce pierwszego ze znakow w ciagu
document.write(tekst.search("Eli"), "<br>");
document.write(tekst.search("abs"), "<br>");
// WYNIK:
// 5
// -1       (bo "abs" nie ma w naszy ciagu znakow)

// Metoda ".match" zwraca ciag znakow jesli jest w naszym string, albo "null"
document.write(tekst.match("Elixir"), "<br>");
document.write(tekst.match("absent"), "<br>");
// WYNIK:
// Elixir
// null       (bo "absent" nie ma w naszy ciagu znakow)

// Metoda ".split" dzieli nasz string i rozdziela go przez ","
document.write(tekst.split(" "), "<br>");
// WYNIK:
// Kurs,Elixir,Podstawy

// Uzycie metody ".split" do oddzielenia fragmentu
var tekst = new String("Kurs Elixir Podstawy");
var tekst2 = tekst.split(" ", 1);
document.write(tekst2, "<br>");
// WYNIK: 
// Kurs