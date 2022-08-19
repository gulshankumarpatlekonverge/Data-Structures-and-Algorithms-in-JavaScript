// stack implementation using array - Palindrome Number
// command to run using node :- node stackCode.js
let letters = [];

let word = "racecar";

let reverseword = "";

for(let i=0; i < word.length; i++){
    letters.push(word[i]);
}

for(let i=0; i < word.length; i++){
    reverseword += letters.pop();
}

if(reverseword === word){
    console.log(word+ " is a palindrome.");
} else{
    console.log(word+ " is not a palindrome.")
}

// stack functions and there implementation

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};

        // Add a value onto the end of the stack
        this.push = function (value) {
            this.storage[this.count] = value;
            this.count++;
        };

        // Remove and return the value at the end of the stack
        this.pop = function () {
            if (this.count === 0) {
                return undefined;
            }

            this.count--;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        };

        // reteun the size of an stack
        this.size = function () {
            return this.count;
        };

        // retuen the value at the end of the stack and not need to pass an value as parameter here
        this.peek = function () {
            return this.storage[this.count - 1];
        };
    }
}

let myStack = new Stack();

myStack.push("gulshankumar");
myStack.push("navin");
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());

myStack.push("Subrathu");
myStack.push("saniya");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());




