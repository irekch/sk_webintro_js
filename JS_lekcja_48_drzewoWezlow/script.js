// JavaScript File

// DRZEWO WEZLOW

/* w kodzie HTML istnieje drzewo wezlow np <body> -> <div> -> <h1>
maja one pewna hierarhie */

function pokazWezly()
{
    alert(document.getElementById("wewn")); // sprawdza jaki to wezel
    alert(document.getElementById("wewn").hasChildNodes()); // czy ma podwezly?
    alert(document.getElementById("zewn").parentNode);
    alert(document.getElementById("wstep").childNodes[0].nodeValue);
}

window.onload = function()
{
    pokazWezly()
}

//document.getElementById("wewn")); sprawdza jaki to wezel
// wyswietla alert: [objectHTMLDiv element]

//document.getElementById("wewn").hasChildNodes(); sprawdza czy ma podwezly
// wyswiela alert: true - jesli ma, false - jesli nie ma

//(document.getElementById("wewn").parentNode); podaje nadwezel
// wyswietla alert: [objectHTMLBodyElement]

//document.getElementById("zewn").childNodes[0].nodeValue; podaje wartosc
// pierwszego podwezla
// wyswietla: w tym wypadku zawartosc akapitu wstepu