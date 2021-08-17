console.log("Hello World!");
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date.toDateString() + " and you look beautiful!");
}
greet('Angela', new Date());
var msg = 'hello there!';
function printName(obj) {
    var _a;
    console.log("hello " + obj.first + " and " + obj.second + "! Have a great day!");
    /* if (obj.second !== undefined){
        console.log(obj.second.toUpperCase()+'😍');
    } */
    //hmm didn't know you can do this
    console.log(((_a = obj.second) === null || _a === void 0 ? void 0 : _a.toUpperCase()) + '😍');
}
printName({ first: "Manuel" });
printName({ first: "Manuel", second: "Angela" });
//Union Types
function printId(id) {
    //console.log("your ID is:" + id);
    //when working with unions, we can use methods only available for both types:
    //console.log(id.toUpperCase())
    //this line above won't work
    if (typeof id === "string") {
        //we know that here, id is of type string
        console.log(id.toUpperCase());
    }
    else {
        //here id is of type number
        console.log(id);
    }
}
//yep
printId(101);
//yep
printId("hello world");
//nop
//printId({myID: 22342});
function WelcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("hello, " + x.join(" and "));
    }
    else {
        console.log("welcome " + x + ",our favorite lone traveler");
    }
}
var names = ['Vania', 'Rosario', 'Carlos'];
WelcomePeople(names);
function getFirstThree(x) {
    return x.slice(0, 3);
}
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var normalString = 'hello world!';
var result = getFirstThree(numbersArray);
console.log('the first three:', result);
result = getFirstThree(normalString);
console.log('the first three:', result);
//awesome, instead of doing pt: {x: type, y: type}
function printCoord(pt) {
    console.log("the coordinate's x value is " + pt.x);
    console.log("the coordinate's y value is " + pt.y);
}
printCoord({ x: 100, y: 200 });
//Type vs Interface --> let's use interface for now, until we need features from type.
//LITERAL TYPES
function printText(s, alignment) {
    console.log(s + " is at your " + alignment);
}
printText('gladys', "left");
printText('He', 'right');
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
var otherResult = compare('igual', 'igual');
console.log(otherResult);
