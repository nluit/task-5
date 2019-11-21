var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
    if (names[i].substring(0, 1) == 'J' || names[i].substring(0, 1) == 'j') console.log('Goodbye ' + names[i]);
    else {
        console.log('Hello ' + names[i]);
    }
}