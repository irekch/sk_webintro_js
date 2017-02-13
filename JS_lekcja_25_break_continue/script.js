// JavaScript File




document.write("<br>", "-------przerwanie petli przez break-----------", "<br>");

for(var i = 1; i <= 10; i++)
{
    document.write(i + "<br>");
    if(i == 5)
    {
        break;
    }
}


/* w przypadku spelnienia warunku "if" czyli gdy "i" rowne 2, lub bedzie
  w zakresie 5 do 7 to przez "continue" te wartosci zostana pominiete */
  
document.write("<br>", "-----usuniecie 2 oraz 5-7 przez continue------", "<br>");

for(var i = 1; i <= 10; i++)
{
    if(i == 2 || (i > 4 && i < 8))
    {
        continue;
    }
    document.write(i + "<br>");
}

/* gdy chcemy usunac parzyste, lub nieparzyste przy pomocy "continue"
   uzywamy "%" czyli module odpoweidnie z "==" lub "!=" */

document.write("<br>", "-----usuniecie nieparzyst. przez continue----", "<br>");

for(var i = 1; i <= 10; i++)
{
    if(i % 2 != 0)
    {
        continue;
    }
    document.write(i + "<br>");
}

/* WYNIK - WYDRUK
-------przerwanie petli przez break-----------
1
2
3
4
5

-----usuniecie 2 oraz 5-7 przez continue------
1
3
4
8
9
10

-----usuniecie nieparzyst. przez continue----
2
4
6
8
10
*/