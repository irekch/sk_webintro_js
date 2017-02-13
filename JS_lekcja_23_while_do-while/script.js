// JavaScript File



document.write("<br>", "----------Petla while Rosnaco----------", "<br>");

var x= 1;
while(x <= 5)
{
    document.write("x= ",x, "<br>");
    x++;                                // inkrementacja
}


document.write("<br>", "----------Petla while Malejaco----------", "<br>");

var x = 20;
while(x >= 15)
{
    document.write("x= ",x, "<br>");
    x--;                                // dekrementacja
}


document.write("<br>", "----------Petla do-while----------", "<br>");

// UWAGA !!! PETLA DO-WHILE JEST WYKONYWANA PRZYNAJMNIEJ 1 RAZ

var x = 1;
do
{
    document.write(x, "<br>");
    x++;
}
while(x <= 5);


/* WYNIK - WYDRUK

----------Petla while Rosnaco----------
x= 1
x= 2
x= 3
x= 4
x= 5

----------Petla while Malejaco----------
x= 20
x= 19
x= 18
x= 17
x= 16
x= 15

----------Petla do-while----------
1
2
3
4
5
*/