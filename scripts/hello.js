// Good old Javascript
function sayHello (name) {
    // console.log("Hello");
    return "Hello, " + name;
} 

/* function sayHello () {
    console.log("Hello");
    // return "Hello";
} */

// Llamaríamos a la función así: console.log(sayHello("Pepe")) / sayHello()

// ES6
const sayHello2 = () => console.log("Hello") // fat arrow functions
const sayHello3 = (name) => `Hello, ${name}` // fat arrow (return omitido por ser una sola linea de código)


const sayHello4 = () => {
    return "Hello" // fat arrow 

}

