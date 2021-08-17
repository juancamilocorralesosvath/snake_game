console.log("Hello World!");
function greet(person: string , date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()} and you look beautiful!`);
}
greet('Angela', new Date());
let msg = 'hello there!';
function printName(obj:{first: string, second?: string}){
    console.log(`hello ${obj.first} and ${obj.second}! Have a great day!`)
    /* if (obj.second !== undefined){
        console.log(obj.second.toUpperCase()+'😍');
    } */
    //hmm didn't know you can do this
    console.log(obj.second?.toUpperCase()+'😍');
}
printName({first: "Manuel"})

printName({first: "Manuel", second: "Angela"})
//Union Types
function printId(id: number | string){
    //console.log("your ID is:" + id);
    //when working with unions, we can use methods only available for both types:
    //console.log(id.toUpperCase())
    //this line above won't work
    if(typeof id === "string"){
        //we know that here, id is of type string
        console.log(id.toUpperCase())
    } else{
        //here id is of type number
        console.log(id)
    }
}
//yep
printId(101);
//yep
printId("hello world");
//nop
//printId({myID: 22342});
function WelcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
        console.log("hello, "+x.join(" and "))
    } else {
        console.log("welcome "+ x + ",our favorite lone traveler")
    }
}
let names = ['Vania', 'Rosario', 'Carlos'];
WelcomePeople(names);
function getFirstThree(x: number[] | string){
    return x.slice(0,3);
}
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let normalString = 'hello world!';
let result = getFirstThree(numbersArray);
console.log('the first three:', result)
result = getFirstThree(normalString);
console.log('the first three:', result)
//Type Aliases
type Point = {
    x: number;
    y: number;
};
//awesome, instead of doing pt: {x: type, y: type}
function printCoord(pt: Point) {
    console.log("the coordinate's x value is " + pt.x)
    console.log("the coordinate's y value is " + pt.y)
}
printCoord({x:100, y:200})
//we also can use aliases with unions:
type ID = number | string;
//INTERFACES
//are another way to name an object type
interface Dot {
    x: number;
    y: number;
}
//Type vs Interface --> let's use interface for now, until we need features from type.
//LITERAL TYPES
function printText(s: string, alignment: "left" | "center" | "right") {
    console.log(`${s} is at your ${alignment}`);
}
printText('gladys', "left");
printText('He', 'right');
function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1; 
}
let otherResult = compare('igual', 'igual');
console.log(otherResult);