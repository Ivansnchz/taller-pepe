// Good old Javascript
function sayHello () {
    const form = document.querySelector("form");
    console.log("Hello, " + form.elements.hello.value);
    alert("Hello, " + form.elements.hello.value);
} 


// ES6
const sayHello2 = () => console.log("Hello") // fat arrow functions
const sayHello3 = (name) => `Hello, ${name}` // fat arrow (return omitido por ser una sola linea de código)


const sayHello4 = () => {
    return "Hello" // fat arrow 

}

