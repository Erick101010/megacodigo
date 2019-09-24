// console.log("jalando");

// // prompt("ingresa un numero");
// // var n1 = prompt("ingresa el primer numero");
// // var n2 = prompt("ingresa el segundo numero");
// // var suma = n1 + n2;
// // var suma =parseInt(n1) + parseInt(n2);
// // la suma debe estar arriba
// // aunque son letras pero va a ser una suma y no le ponen comillas;
// // console.log(suma);
// // método para enviar variables a la pantalla del usuario;
// // document.write(suma);
// // Una sintaxis es la forma correcta de escribir un codigo;
// // function seguida del nombre del nombre del evento o del metodo seguido
// function Suma() {
// var n1 = prompt("dime el primer número");
// var n2 = prompt("dime el segundo numero");
// // concatenando;
// document.write("La suma de " + n1 + " y " + n2 + " es: ");
// // sumando y optimizando;
// document.write(parseInt(n1) + parseInt(n2) );
// }
// function Resta(){
//     var n1 = document.getElementById('txtN1').value;
//     var n2 = document.getElementById('txtN2').value;
//     var resta = parseInt(n1) - parseInt(n2);
//     alert("La resta es: " + resta);

// }
// // es para obtener el elemento y luego el valor;
// function multi(){
//     var n1 = document.getElementById('txtN1').value;
//     var n2 = document.getElementById('txtN2').value;
//     var multi = parseInt(n1) * parseInt(n2);
//     alert("La multiplicación es: " + multi);

// }
// function divi(){
//     var n1 = document.getElementById('txtN1').value;
//     var n2 = document.getElementById('txtN2').value;
//     var divi = parseInt(n1) / parseInt(n2);
//     alert("La división es: " + divi);

// }
// function suma(){
//     var n1 = document.getElementById('txtN1').value;
//     var n2 = document.getElementById('txtN2').value;
//     var suma = parseInt(n1) + parseInt(n2);
//     alert("La suma es: " + suma);

// }

// /function para sumar
function Suma() {
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    // realizando la operacion con variables que estan parseadas a enteros
    var suma = parseInt(n1) + parseInt(n2);
    // disparando unalerta con una concatenacion de un texto y el valor de la operacion
    alert("La Suma  de  " + n1 + "  + " + n2 + " es : " + suma);
}


// funcion para restar
function Resta() {
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    // realizando la operacion con variables que estan parseadas a enteros
    var resta = parseInt(n1) - parseInt(n2);
    // disparando unalerta con una concatenacion de un texto y el valor de la operacion
    alert("La Resta de  " + n1 + "  - " + n2 + " es : " + resta);
}
// funcion para multiplicar
function Multi() {
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    // realizando la operacion con variables que estan parseadas a enteros
    var multiplicacion = parseInt(n1) * parseInt(n2);
    // disparando unalerta con una concatenacion de un texto y el valor de la operacion
    alert("La multiplicación de  " + n1 + "  X " + n2 + " es : " + multiplicacion);
}


// funcion para Dividir
function Divi() {
    // asignando variables
    var n1 = document.getElementById('txtN1').value;
    var n2 = document.getElementById('txtN2').value;
    // realizando la operacion con variables que estan parseadas a enteros
    var division = parseInt(n1) / parseInt(n2);
    // disparando unalerta con una concatenacion de un texto y el valor de la operacion
    alert("La multiplicación de  " + n1 + "  / " + n2 + " es : " + division);
}




