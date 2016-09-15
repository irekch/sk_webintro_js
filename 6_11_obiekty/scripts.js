var person = {
    firstName: "Tomek",
    lastName: "Chojnacki",
    age: 29,
    showGreeting: function() {
        console.log("Witaj " + this.firstName);
    }
}

// wyswietlenie konkretnej wlasciwosci obieku
// console.log(person.lastName);

// uzycie funckji bedacej wlasciwoscia obiektu
person.showGreeting();
//tutaj wynik "Witaj Tomek"