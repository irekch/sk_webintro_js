// zmienna globalna
var country = "UK";

// ponizej zmienna lokalna wewnatrz funckji
var showCountry = function() {
    var country = "Poland";
    console.log(country);
}

// wyswietli wart. zmiennej globalnej, czyli "UK"
// console.log(country);

// wyswietli wartosc zmiennej lokalnej, czyli "Poland"
showCountry();