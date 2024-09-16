"use strict";
//punto 3
const nombre = "ramiro";
const edad = 22;
const estaVivo = true;
const fechaNac = new Date(2002, 5, 30);
const divPunto3 = document.getElementById(`punto3`);
crearNuevoP("Nombre: " + nombre, divPunto3);
crearNuevoP("Edad: " + edad, divPunto3);
crearNuevoP("Esta vivo?: " + estaVivo, divPunto3);
crearNuevoP("Fecha de nacimiento: " + fechaNac, divPunto3);
function crearNuevoP(nuevoP, divAeditar) {
    let nuevoParrafo = document.createElement(`p`);
    nuevoParrafo.textContent = nuevoP;
    divAeditar.appendChild(nuevoParrafo);
}
//punto 4
function pasarNumeroString(num) {
    let numeroString = num.toString();
    return numeroString;
}
const divPunto4 = document.getElementById(`punto4`);
const numPunto4 = 1234;
crearNuevoP("el numero pasado a string: " + pasarNumeroString(numPunto4), divPunto4);
//punto 5
const arrayPunto5 = [5, 6, 2, 4, 5, 6, 7, 8, 2, 34, 5, 3];
const divPunto5 = document.getElementById(`punto4`);
function sumarArray(arrayDeNumeros) {
    let resultado = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
        resultado += arrayDeNumeros[i];
    }
    return resultado;
}
crearNuevoP("la suma del array es: " + sumarArray(arrayPunto5), divPunto5);
const estudiante = {
    nombre: "jose",
    edad: 23,
    curso: "matematica"
};
const divPunto6 = document.getElementById(`punto6`);
crearNuevoP("nombre: " + estudiante.nombre, divPunto6);
crearNuevoP("edad: " + estudiante.edad, divPunto6);
crearNuevoP("curso: " + estudiante.curso, divPunto6);
const direcionCasaPunto7 = {
    calle: "granaderos",
    ciudad: "mendoza",
    codigoPostal: 5500
};
const divPunto7 = document.getElementById(`punto7`);
crearNuevoP("calle: " + direcionCasaPunto7.calle, divPunto7);
crearNuevoP("ciudad: " + direcionCasaPunto7.ciudad, divPunto7);
crearNuevoP("codigo Postal: " + direcionCasaPunto7.codigoPostal, divPunto7);
//punto 8
const divPunto8 = document.getElementById(`punto8`);
const personaPunto8 = {
    nombre: "pedro",
    correo: "pedro@gmail.com",
    saludar(nombre, correo) {
        crearNuevoP("Hola soy: " + nombre + " y mi correo es: " + correo, divPunto8);
    }
};
personaPunto8.saludar(personaPunto8.nombre, personaPunto8.correo);
//punto 9
class PersonaPunto9 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        return "hola me llamo " + this.nombre + " y tengo " + edad + " años";
    }
}
const divPunto9 = document.getElementById(`punto9`);
const nuevaPersona = new PersonaPunto9("raul", 45);
crearNuevoP(nuevaPersona.presentarse(), divPunto9);
//punto 10
class CajaPunto10 {
    constructor(parametro) {
        this.parametro = parametro;
    }
    mostrarTexto() {
        return `${this.parametro}`;
    }
}
const divPunto10 = document.getElementById(`punto10`);
const caja1Punto10 = new CajaPunto10("mensaje Secreto");
const caja2Punto10 = new CajaPunto10(1234);
crearNuevoP("la caja uno contiene: " + caja1Punto10.mostrarTexto(), divPunto10);
crearNuevoP("la caja dos contiene: " + caja2Punto10.mostrarTexto(), divPunto10);
// punto11
function identidad(parametro) {
    return parametro;
}
const divPunto11 = document.getElementById(`punto11`);
const parametro1Punto11 = 12345;
const parametro2Punto11 = "antonio";
crearNuevoP("identidad del numero: " + identidad(parametro1Punto11), divPunto11);
crearNuevoP("identidad del texto: " + identidad(parametro2Punto11), divPunto11);
//punto12
var Color;
(function (Color) {
    Color["Rojo"] = "Rojo";
    Color["Verde"] = "Verde";
    Color["Azul"] = "Azul";
})(Color || (Color = {}));
const colorFavorito = Color.Verde;
const divPunto12 = document.getElementById('punto12');
crearNuevoP("Mi color favorito es: " + colorFavorito, divPunto11);
