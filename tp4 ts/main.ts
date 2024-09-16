//punto 3
const nombre:string = "ramiro";
const edad:number = 22;
const estaVivo:boolean = true;
const fechaNac:Date = new Date(2002, 5, 30);
const divPunto3 = document.getElementById(`punto3`) as HTMLDivElement;
crearNuevoP("Nombre: " + nombre,divPunto3)
crearNuevoP("Edad: " + edad,divPunto3)
crearNuevoP("Esta vivo?: " + estaVivo,divPunto3)
crearNuevoP("Fecha de nacimiento: " + fechaNac,divPunto3)

function crearNuevoP( nuevoP:string, divAeditar:HTMLDivElement):void{
    let nuevoParrafo = document.createElement(`p`);
    nuevoParrafo.textContent = nuevoP;
    divAeditar.appendChild(nuevoParrafo);
}
//punto 4
function pasarNumeroString(num:number):string{
    let numeroString:string = num.toString();
    return numeroString;
}
const divPunto4 = document.getElementById(`punto4`) as HTMLDivElement;
const numPunto4:number = 1234
crearNuevoP("el numero pasado a string: " + pasarNumeroString(numPunto4),divPunto4)
//punto 5

const arrayPunto5:Array<number> = [5,6,2,4,5,6,7,8,2,34,5,3]
const divPunto5 = document.getElementById(`punto4`) as HTMLDivElement

function sumarArray( arrayDeNumeros:Array<number>): number{
    let resultado:number = 0
    for(let i = 0; i < arrayDeNumeros.length; i++ ){
        resultado += arrayDeNumeros[i];
    }
    return resultado
}
crearNuevoP("la suma del array es: "+ sumarArray(arrayPunto5),divPunto5)

//punto6

interface EstudianteOb{
    nombre:string
    edad:number
    curso:string
}
const estudiante:EstudianteOb = {
    nombre: "jose",
    edad:23,
    curso:"matematica"
}
const divPunto6 = document.getElementById(`punto6`) as HTMLDivElement;

crearNuevoP("nombre: " + estudiante.nombre,divPunto6);
crearNuevoP("edad: " + estudiante.edad,divPunto6);
crearNuevoP("curso: " + estudiante.curso,divPunto6);

//punto 7

type direccionType ={
    calle: string;
    ciudad:string;
    codigoPostal:number;
}

const direcionCasaPunto7:direccionType={
    calle: "granaderos",
    ciudad: "mendoza",
    codigoPostal: 5500
}
const divPunto7 = document.getElementById(`punto7`) as HTMLDivElement

crearNuevoP("calle: "+direcionCasaPunto7.calle,divPunto7)
crearNuevoP("ciudad: "+direcionCasaPunto7.ciudad,divPunto7)
crearNuevoP("codigo Postal: "+direcionCasaPunto7.codigoPostal,divPunto7)

//punto 8
const divPunto8= document.getElementById(`punto8`) as HTMLDivElement
interface persona{
    nombre:string
    correo:string
    saludar(nombre:string,correo:string):void
}
const personaPunto8: persona = {
    nombre : "pedro",
    correo : "pedro@gmail.com",
    saludar(nombre,correo){
        crearNuevoP("Hola soy: "+ nombre + " y mi correo es: "+correo ,divPunto8)
    }
}
personaPunto8.saludar(personaPunto8.nombre,personaPunto8.correo)

//punto 9

class PersonaPunto9{
    nombre:string;
    edad:number;
    constructor(nombre: string, edad:number){
        this.nombre = nombre
        this.edad = edad
    }
    presentarse():string{
        return "hola me llamo " + this.nombre + " y tengo " + edad + " años"
    }
}
const divPunto9 = document.getElementById(`punto9`) as HTMLDivElement
const nuevaPersona = new PersonaPunto9("raul",45)
crearNuevoP(nuevaPersona.presentarse(), divPunto9);

//punto 10

class CajaPunto10 <T>{
    parametro:T
    constructor(parametro:T){
        this.parametro=parametro
    }
    mostrarTexto():string{
        return `${this.parametro}`;
    }
}

const divPunto10 = document.getElementById(`punto10`) as HTMLDivElement
const caja1Punto10 = new CajaPunto10("mensaje Secreto")
const caja2Punto10 = new CajaPunto10(1234)
crearNuevoP("la caja uno contiene: "+caja1Punto10.mostrarTexto(),divPunto10)
crearNuevoP("la caja dos contiene: "+caja2Punto10.mostrarTexto(),divPunto10)

// punto11

function identidad<T>(parametro: T) : T{
    return parametro
}
const divPunto11 = document.getElementById(`punto11`) as HTMLDivElement
const parametro1Punto11 = 12345;
const parametro2Punto11 = "antonio"
crearNuevoP("identidad del numero: "+ identidad(parametro1Punto11),divPunto11)
crearNuevoP("identidad del texto: "+ identidad(parametro2Punto11),divPunto11)

//punto12
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul'
}
const colorFavorito: Color = Color.Verde;
const divPunto12 = document.getElementById('punto12') as HTMLDivElement;

crearNuevoP("Mi color favorito es: " + colorFavorito, divPunto11);
