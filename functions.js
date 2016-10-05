//Read about the Array.prototype.sort method. 
//Create a function that can be used with sort. 
//This function should take two strings, and return a value that sort can use 
//to determine which is the longest string. 
//Finally, create an array of strings and try to get it sorted using your new function.

function longuestString(string1, string2) {
    if (string1.length > string2.length) {
        return 1;
    }
    else if (string2.length < string1.length) {
        return -1;
    }
    else {
        return 0;
    }
}

var myArray = ['hello', 'cat', 'dog', 'dictionnary'];

//console.log(myArray.sort(longuestString));

//Create an array of objects (don’t need to use new here, just regular object literals). 
//These objects will contain a name and email property. Then, run some code that 
//will sort your array by the longest name. Then, run some code that will sort 
//your array by e-mail address in alphabetical order.

function Person (name, email, num) {
    this.name = name;
    this.email = email;
    this.num = num;
}

var info = new Array ();
info[0] = new Person ('Eve', 'eve.papineau@hotmail.fr', 3);
info[1] = new Person ('Adam', 'blabla@gmail.com', 4);
info[2] = new Person ('Gabrielle', 'Salut@yahoo.fr', 5)


function longuest(name1, name2) {
    if (name1.name.length > name2.name.length) {
        return 1;
    }
    else if (name1.name.length < name2.name.length) {
        return -1;
    }
    else {
        return 0;
    }
}

//console.log(info.sort(longuest));

function longuest(email1, email2) {
    if (email1.email.toLowerCase() > email2.email.toLowerCase()) {
        return 1;
    }
    else if (email1.email.toLowerCase() < email2.email.toLowerCase()) {
        return -1;
    }
    else {
        return 0;
    }
}

//console.log(info.sort(longuest));

//Create a function that can be used with Array.prototype.map. 
//This function should take a number and return its square. 
//Then, use this function with map on an array of numbers to check the result.

function square(num) {
    return num * num
};

var myArray = [9,3,2,7];
var myArray2 = myArray.map(square);

//console.log(myArray2);

//Create a function that can be used with Array.prototype.map. 
//This function should be able to take an object and square its “num” property. 
//Then, use this function with map on an array of objects each containming a “num” property.

function square2(info) {
    return info.num * info.num;
}

var square3 = info.map(square2);

//console.log(square3);

//In a previous workshop, you had to create a function that took two numbers and 
//an operation (add, sub, mult, …) and returned the result of the operation on 
//the two numbers. Here we are going to do the same but at a higher order. 
//Create a function called operationMaker that takes only a string called operation as argument. 
//This string could be “add”, “subtract”, “mult” or “div”. Your function will return 
//a function that will take two numbers and return the result of running operation on these numbers. 
//The end result should let me do something like this:

function operationMaker (operation) {
    var outputResult;
    switch(operation) {
        case 'add':
            outputResult = function (number1, number2) {
                return number1 + number2;
            }
        break;
        case 'substract':
            outputResult = function (number1, number2) {
                return number1 - number2;
            }
        break;
        case 'mult':
            outputResult = function (number1, number2) {
                return number1 * number2;
            }
        break;
        case 'div':
            outputResult = function (number1, number2) {
                return number1 / number2;
            }
        break;
    }
    return outputResult; 
}

var adder = operationMaker('add');
console.log(adder);
var sum = adder(5, 10);
console.log(sum);