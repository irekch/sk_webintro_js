// JavaScript File

// ZAGNIEZDZENIE PETLI W PETLI


for(var i =1; i <=5; i++)
{
    document.write("seria nr. " + i + "<br>");
    for(var j = 1; j <= 4; j++)
    {
        document.write("j= " + j + "<br>");
    }
}

/* WYNIK - WYDRUK

seria nr. 1
j= 1
j= 2
j= 3
j= 4
seria nr. 2
j= 1
j= 2
j= 3
j= 4
seria nr. 3
j= 1
j= 2
j= 3
j= 4
seria nr. 4
j= 1
j= 2
j= 3
j= 4
seria nr. 5
j= 1
j= 2
j= 3
j= 4

*/