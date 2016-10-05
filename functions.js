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

function Person (name, email) {
    this.name = name;
    this.email = email;
}

var info = new Array ();
info[0] = new Person ('Eve', 'eve.papineau@hotmail.fr');
info[1] = new Person ('Adam', 'blabla@gmail.com');
info[2] = new Person ('Gabrielle', 'Salut@yahoo.fr')

/*function longuest(name1, name2) {
    if (name1.name.length > name2.name.length) {
        return 1;
    }
    else if (name1.name < name2.name) {
        return -1;
    }
    else {
        return 0;
    }
}

console.log(info.sort(longuest));*/

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

console.log(info.sort(longuest));

//Create a function that can be used with Array.prototype.map. 
//This function should take a number and return its square. 
//Then, use this function with map on an array of numbers to check the result.



