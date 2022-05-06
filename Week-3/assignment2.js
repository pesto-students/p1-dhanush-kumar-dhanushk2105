// Create 3 simple functions where call, bind and apply are used. 
// The intention of this exercise isto understand how they work and their differences.

var person1 = {firstName: 'Dhanush', lastName: 'Kumar'};
var person2 = {firstName: 'Manan', lastName: 'Tyagi'};
var person3 = {firstName: 'Arnab', lastName: 'Modal'};

function say(greeting) {
    console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

function say() {
    console.log('Hello' + ' ' + this.firstName + ' ' + this.lastName);
}

var sayHelloDhanush = say.bind(person1);


console.log(sayHelloDhanush());

console.log(say.call(person2, 'Hello')); 
console.log(say.apply(person3, ['Hello']));