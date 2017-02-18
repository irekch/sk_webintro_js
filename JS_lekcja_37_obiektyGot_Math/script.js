// JavaScript File

// OBIEKTY WBUDOWANE W JAVASCRIPT - OBIEKT "Math"



// Math.round - zaokraglanie
document.write("-----Obiekt 'Math' funkcja 'round' - zaokraglanie -----","<br>");
document.write(4.65+" zaokraglone daje " + Math.round(4.65), "<br>");
document.write(3.24+" zaokraglone daje " + Math.round(3.24), "<br>");

// Math.floor - zaokraglanie w dol
document.write("----Obiekt 'Math' funkcja 'floor' -zaokraglanie w dol---","<br>");
document.write(4.65+" zaokraglone daje " + Math.floor(4.65), "<br>");
document.write(3.24+" zaokraglone daje " + Math.floor(3.24), "<br>");

// Math.ceil - zaokraglanie w gore
document.write("----Obiekt 'Math' funkcja 'ceil' -zaokraglanie w gore---","<br>");
document.write(4.65+" zaokraglone daje " + Math.ceil(4.65), "<br>");
document.write(3.24+" zaokraglone daje " + Math.ceil(3.24), "<br>");

// Math.abs - wartosc absolutna
document.write("----Obiekt 'Math' funkcja 'abs' -wart. absolutna---","<br>");
document.write(4.65+" wartosc absolutna daje " + Math.abs(4.65), "<br>");
document.write(-4.65+" wartosc absolutna daje " + Math.abs(-4.65), "<br>");

// Math.pow - podnoszenie do potegi
document.write("----Obiekt 'Math' funkcja 'pow' - liczba do potegi---","<br>");
document.write(4 + " do potegi "+ 3 + " = " + Math.pow(4, 3), "<br>");

// Math.sqrt - pierwiastek kwadratowy
document.write("----Obiekt 'Math' funkcja 'sqrt' -pierw.kwadratowy---","<br>");
document.write("pierwiastek kwadratowy z "+ 16 + " = " + Math.sqrt(16), "<br>");

// Math.max - wybranie wartosci maksymalnej z dwoch liczb, podobna jest "Math.min"
document.write("----Obiekt 'Math' funkcja 'max' -wart. maksymalna---","<br>");
var x = 3; var y = 9;
document.write("wartosc wieksza z liczb 3 i 9", " to " + Math.max(x,y), "<br>");

// Math.random - wartosc losowa z zakresu 0 do 1
document.write("----Obiekt 'Math' funkcja 'random' -losowa z zakresu---","<br>");
document.write("losowa z zakresu (0-1) wynosi " + Math.random(), "<br>");
document.write("losowa z zakresu (0-1) * 10 wynosi " + Math.random()*10, "<br>");

/* WYNIKI - WYDRUK
-----Obiekt 'Math' funkcja 'round' - zaokraglanie -----
4.65 zaokraglone daje 5
3.24 zaokraglone daje 3
----Obiekt 'Math' funkcja 'floor' -zaokraglanie w dol---
4.65 zaokraglone daje 4
3.24 zaokraglone daje 3
----Obiekt 'Math' funkcja 'ceil' -zaokraglanie w gore---
4.65 zaokraglone daje 5
3.24 zaokraglone daje 4
----Obiekt 'Math' funkcja 'abs' -wart. absolutna---
4.65 wartosc absolutna daje 4.65
-4.65 wartosc absolutna daje 4.65
----Obiekt 'Math' funkcja 'pow' - liczba do potegi---
4 do potegi 3 = 64
----Obiekt 'Math' funkcja 'sqrt' -pierw.kwadratowy---
pierwiastek kwadratowy z 16 = 4
----Obiekt 'Math' funkcja 'max' -wart. maksymalna---
wartosc wieksza z liczb 3 i 9 to 9
----Obiekt 'Math' funkcja 'random' -losowa z zakresu---
losowa z zakresu (0-1) wynosi 0.00006365897560511868
losowa z zakresu (0-1) * 10 wynosi 8.865388796383327
*/