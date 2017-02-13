// JavaScript File


// for(deklaracja pocz.licznika, wart konc licznika, increment licznika)
// instrukcje do wykonania w petli zawsze w nawiasach klamrowych "{ }"

document.write("----------Petla for rosnaca-----------", "<br>")

for(var i = 1; i <= 10; i++) 
{                           
    document.write("i= ", i, "<br>");
}

document.write("<br>", "----------Petla for malejaca-----------", "<br>")

for(var i = 20; i >= 10; i--) 
{                           
    document.write("i= ", i, "<br>");
}

/* WYNIK - WYDRK

----------Petla for rosnaca-----------
i= 1
i= 2
i= 3
i= 4
i= 5
i= 6
i= 7
i= 8
i= 9
i= 10

----------Petla for malejaca-----------
i= 20
i= 19
i= 18
i= 17
i= 16
i= 15
i= 14
i= 13
i= 12
i= 11
i= 10

*/