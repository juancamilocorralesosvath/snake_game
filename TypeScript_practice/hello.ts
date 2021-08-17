console.log("Hello World!");
function greet(person: string , date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()} and you look beautiful!`);
}
greet('Angela', new Date());
let msg = 'hello there!';
function printName(obj:{first: string, second?: string}){
    console.log(`hello ${obj.first} and ${obj.second}! Have a great day!`)
}
printName({first: "Manuel"})

printName({first: "Manuel", second: "angela"})