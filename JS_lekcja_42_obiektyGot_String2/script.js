// JavaScript File

// OBIEKTY WBUDOWANE W JAVASCRIPT - OBIEKT "String" - FORMATOWANIE



var tekst = "Kurs JavaScript";

document.write("Tekst wyjściowy: ", tekst, "<br>");
document.write("------------------------------------", "<br>");

document.write("Tekst small: ", tekst.small(), "<br>");

document.write("Tekst big: ", tekst.big(), "<br>");

document.write("Tekst bold: ", tekst.bold(), "<br>");

document.write("Tekst fixed: ", tekst.fixed(), "<br>");

document.write("Tekst fontcolor(red): ", tekst.fontcolor("red"), "<br>");

document.write("Tekst fontsize(1): ", tekst.fontsize(1), "<br>");
document.write("Tekst fontsize(5): ", tekst.fontsize(5), "<br>");

document.write("Tekst italics: ", tekst.italics(), "<br>");

document.write("<br>", "---------Formatowanie Zlożone--------------", "<br>");

document.write("Tekst bold, italics, fontcolor(blue): ", 
        tekst.bold().italics().fontcolor("blue"), "<br>");
        
        
/* WYNIKI: Ponizej trzeba wkleic wydruk z uruchomienia skryptu
bo inaczej nie widac formatowania */