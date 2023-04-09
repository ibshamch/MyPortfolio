/*Memory Leaks*/
const a = 3; // Suppose this variable is not getting used then it will cause memory leak
const b = 23;
const c = 33;

// Call Stack
// Synchroniz Programming
// First Happens then next happen
console.log(`1`);
console.log(2);
console.log(3);


const one = () => {
    const two = () => {
        console.log(4);
    }
    two();
};


//Recursion 
function foo() {
    foo();
}

//Async Programming
console.log(`1`);
setTimeout(() => { console.log(`2`) }, 2000);
console.log(3);


//CALL STACK

setTimeout(), 2000 // After time limit is done data goes to callback
//WEB API

callback()
//CALLBACK QUEUE


//EVENT LOOP(Keeps checking if call stack is empty if its empty it ask callback queue to run any function if they are there) from here callback() goes back to call stack for execution.

//Advanced Objects
//reference type: methods does not change the reference assignments does

//context (this keyword):
const obj1 = {
    name: "Ibsham",
    age: 21,
    //Arrow function does not have "this"
    objfunc: function() {
        return `Hi, my name is ${this.name} & I am ${this.age} years old`;
    },
    objinobj: {
        name: "Aisham",
        age: 40,
        print: function() {
            console.log(`Hi, my name is ${this.name} and I am ${this.age} years old!`);
        }
    }
};

//Instantiation

class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name},I am a ${this.type}`)
    };
};

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`Weeeee i am a ${this.type}`);
    }

}
const Wizard1 = new Wizard('Ibsham', 'Magician');



// ES7 Features 
//includes method
//exponential operator
console.log(2 ** 3);


// Advanced Loops
//forEach
const basket =['apple' , 'banana' , "grapes"];

basket.forEach((element)=> console.log(element));

//for of loop
//Iterating
// Both strings and array are iterable
for(item of basket) {
    console.log(item);
}
//for in loop
// - Loop over and see object properties
// This is called enumerating
// Because object properties are called enumerable 
const detailedbasket = {
    apples:5,
    oranges:10,
    grapes:1000,
}
for (item in detailedbasket){
    console.log(item);
}


