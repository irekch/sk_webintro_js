

// ODWOLANIA SIE DO WEZLOW, CZYLI BLOKOW W PLIKU HTML


/*	Najpierw nadajemy id blokom w pliku HTML 
	np. <h1 id="tytul">Kurs programowania w PHP5</h1>
	nastepnie odwolujemy sie do tego id w JavaScript
*/

function zmienTytul()		// nazwa naszej funkcji
{
	var tytul = document.getElementById("tytul"); 
	// "getElementById" odwolanie do elementu o okreslonym id 
	//  i przypisanie do zmiennej
	tytul.innerHTML += " Podstawy"; 
	//metoda ".innerHTML" umozliwia modyfikacje tresci
	// tytul.innerHTML += " Podstawy"; -> dopisuje do tekstu z HTML
	// tytul.innerHTML = " Podstawy"; -> zamienia tekst z HTML
}

/* window.onload umozliwia ladowanie sie funcji w momenci zaladowania
sie strony do przegladarki. Aby skrypt zadzialal musimy wywolac funkcje
*/

window.onload = function()
{
	zmienTytul();
}

/* documentgetElementByID("")
"document" to nadrzedny element
.getElementById("") - metoda mowiaca "dostan sie do elementu Id"
*/

/* Skrypt Javascript nie zmienia oryginalmnego HTML, lecz modyfikuje DOM */