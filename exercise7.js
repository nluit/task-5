var people = ["Greg", "Mary", "Devon", "James"];
// ---------------------------------------------
for (var i = 0; i < people.length; i++) {
    console.log(people[i]);

}
console.log('---------------------------------------------');
var pos = people.indexOf('Greg');
people.splice(pos, 1);
console.log(people);
console.log('---------------------------------------------');
var pos = people.indexOf('James');
people.splice(pos, 1);
console.log(people);
console.log('---------------------------------------------');
people.unshift('Matt');
console.log(people);
console.log('---------------------------------------------');
people.push('Nhat dep trai');
console.log(people);
console.log('---------------------------------------------');
for (var i = 0; i < people.length; i++) {
    if (people[i] == 'Mary') {
        console.log(people[i]);
        break;

    }

}
console.log('---------------------------------------------');
var pos1 = people.indexOf('Mary');
var pos2 = people.indexOf('Matt');

var temp = people.slice();
if (pos1 != -1) {
    temp.splice(pos1, 1);


}
if (pos2 != -1) {
    temp.splice(pos2, 1);

}
console.log(temp);
console.log('---------------------------------------------');
var index = people.indexOf("Mary");
console.log(index);
console.log('---------------------------------------------');
var index = people.indexOf("Foo");
console.log(index);

console.log('---------------------------------------------');
var people = ["Greg", "Mary", "Devon", "James"];
var pos = people.indexOf('Devon');

var index = pos;
people.splice(pos, 1);
people.splice(index, 0, 'Elizabeth', 'Artie');
console.log(people);
console.log('---------------------------------------------');
var withBob = 'Bob ';

var result = withBob.concat(people.toString());
console.log(result);