console.log("Hello World!");
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + " and you look beautiful!");
}
greet('Angela', new Date());
var msg = 'hello there!';
function printName(obj) {
    console.log("hello " + obj.first + " and " + obj.second + "! Have a great day!");
}
printName({ first: "Manuel" });
printName({ first: "Manuel", second: "angela" });
