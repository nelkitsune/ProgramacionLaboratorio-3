

//seccion 1 Introducción a JavaScript
function seccion1Punto2(){
  //Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y haz que c sea la suma de a y b. Imprime el resultado en la consola. 
  //Requisito: mostrar por consola el resultado de los valores declarados en el codigo si a(5), b(10) c = 15 
  //----
  let a = 5;
  let b = 10;
  let c = a + b;
  console.log(" la suma de a y b es: " + c);

}
seccion1Punto2();


function seccion1Punto3(){
  //Escribe un programa que pida al usuario su nombre y lo almacene en una variable. Luego, imprime un saludo en la consola que incluya el nombre del usuario. 
  //Requisito: se debe utilizar la instrucción prompt y pedir mediante este elemento el nombre y luego mostrarlo en consola 
  //-----
  let nombre = prompt("Ingrese su nombre!");
  console.log("Hola " + nombre);
}

seccion1Punto3();


//seccion 2 Operadores lógicos y condicionales
console.log("------------------");
function seccion2Punto1(){
  //Crea un script que declare tres variables: a, b, y c. Asigna a a y b valores numéricos y determina cual es el mayor. Imprime el resultado en la consola.
  //----
  let a = 9;
  let b = 2;
  let c = 15;
  if (a > b && a > c){
    console.log("EL mayor de los numeros es: " + a)
  }else if (b > c){
    console.log("EL mayor de los numeros es: " + b)
  }else{
    console.log("EL mayor de los numeros es: " + c)
  }
}
seccion2Punto1();

function seccion2Punto2(){
  //Crea un programa que pida al usuario un número y determine si es par o impar. 
  //Requisitos:  utilice la instrucción propmt  si es par, debe mostrar "El número (numeroIngresado) es par", y si es impar, "El número  (numeroIngresado) es impar". 
  //-----
  let numeroIngresado = prompt("Ingrese un numero para determinar si es par o impar")
  if (numeroIngresado % 2 == 0) {
    console.log("El numero " + numeroIngresado + " es par")
  } else{
    console.log("El numero " + numeroIngresado + " es impar")
  }
}
seccion2Punto2();


//3. Operadores de asignación y bucles 
console.log("-----------------")

function seccion3Punto1(){
  //Crea un script que inicialice una variable en 10 y luego use un bucle while para restarle 1 en cada iteración hasta que la variable sea igual a 0. 
  //Imprime el valor de la variable en cada iteración.
  let contador = 10
  while(contador > 0){
    console.log(contador)
    contador-- 
  }
}
seccion3Punto1()

function seccion3Punto2(){
  //Escribe un programa que utilice un bucle do...while para pedirle al usuario que ingrese un número mayor a 100. El bucle debe repetirse hasta que el usuario ingrese un número mayor a 100. 
  //Requisitos: Debe utilizarse la instrucción prompt y luego mostrar por consola el numero ingresado de la manera que se muestra abajo 
  let contador = 0
  do{
    contador = prompt("ingrese un numero mayor a 100")
    if(contador <= 100){
      console.log("el numero ingresado es menor o igual a 100: " + contador)
    }
  }while(contador < 100)
    console.log("el numero ingresado es mayor a 100: " + contador)
}

seccion3Punto2()

console.log("------------")

//Funciones de JavaScript

function esPar(num1){
  if (num1 % 2 == 0){
    return true
  } else{
    return false
  }
}

function seccion4Ejercicio1(){
  let num1 = prompt("ingrese un numero para averiguar si es par o impar ");
  if(esPar(num1)){
    console.log("el " + num1 + " es par")
  }else{
    console.log("el " + num1 + " es impar")
  }
}

seccion4Ejercicio1()

function convertirCelsiusAFahrenheit(num1){
  return (num1 * 1.8 + 32)
}

function seccion4Ejercicio2(){
  let celsius = prompt("ingrese la temperatura en celsius: ")
  console.log("la convercion a fahrenheit es: "+ convertirCelsiusAFahrenheit(celsius))
}

seccion4Ejercicio2()

//objetos js

function seccion5Ejercicio1(){
  let persona = {
    nombre: "Ramiro",
    ferrari: "Ferrari",
    edad: 22,
    ciudad: "Mendoza",
    cambiarCiudad: function(nuevaCiudad){
      this.ciudad = nuevaCiudad
    }
  }
  console.log(persona.ciudad)
  persona.cambiarCiudad("san juan")
  console.log(persona.ciudad)
}

seccion5Ejercicio1()

function seccion5Ejercicio2(){
  let libro = {
    titulo : "loperista",
    autor : "pepito",
    anio: 2002,
    mas10anios: function(){
      if((2024 - this.anio) > 10){
        return true
      }else {
        return false
      }
    }
  }
  console.log("el libro tiene mas de 10 años: " + libro.mas10anios())
}
seccion5Ejercicio2()

//array

function seccion6Ejercicio1(){
  let primerArray = [1,2,3,4,5,6,7,8,9,10]
  let segundoArray =[]
  primerArray.forEach(function(primerArray){
    segundoArray.push(primerArray*2)
  })
  segundoArray.forEach(function(segundoArray){
    console.log(segundoArray)
  })
}

seccion6Ejercicio1()
console.log("----------------")
function seccion6Ejercicio2(){
  let arrayNumeroPar = []
  for(let i = 1 ; i<=20 ; i++){
    if(i % 2 == 0){
      arrayNumeroPar.push(i)
    }
  }
  arrayNumeroPar.forEach(function(arrayNumeroPar){
    console.log(arrayNumeroPar)
  })
}
seccion6Ejercicio2()

//doom
const botonCambiarColor = document.getElementById(`botonColor`)
const palabras = document.getElementById(`palabrasColor`)

botonCambiarColor.addEventListener(`click`, function(){
  palabras.style.color = "blue"
})

const botonTomarNombre = document.getElementById(`botonSacarNombre`)
const textoConNombre = document.getElementById(`inputSacarNombre`)

botonTomarNombre.addEventListener(`click`,function(){
  alert("El nombre ingresado es: " + textoConNombre.value)
})
//-------

//evento dom

const lista = document.querySelectorAll(`#miLista li`)

lista.forEach(function(item){
  item.addEventListener(`click`,function(){
    console.log(item.textContent)
  })
})

const inputDeshabilitable = document.getElementById('inputDeshabilitable');
const botonHabilitar = document.getElementById('botonDeHabilitar');
const botonDeshabilitar = document.getElementById('botonDeDeshabilitar');

botonDeshabilitar.addEventListener('click', function() {
    inputDeshabilitable.disabled = true;
});

botonHabilitar.addEventListener('click', function() {
    inputDeshabilitable.disabled = false;
});

function mostrarCorreoGuardado(){
  const emailGuardado = localStorage.getItem('email');
  if (emailGuardado) {
    correoGuardadoDiv.textContent = `Correo guardado: ${emailGuardado}`;
    correoGuardadoDiv.style.display = 'block';
    botonEliminarCorreo.style.display = 'inline';
  } else {
    correoGuardadoDiv.textContent = '';
    botonEliminarCorreo.style.display = 'none';
  }
}


const emails = document.getElementById('correo')
const botonEnviar = document.querySelector('form button[type="submit"]')
const botonEliminarCorreo = document.getElementById('eliminarCorreo')
const correoGuardadoDiv = document.getElementById('correoGuardado')

botonEnviar.addEventListener('click', function(event){
  event.preventDefault()
  const datos = emails.value
  localStorage.setItem('email', datos)
  mostrarCorreoGuardado()
});

botonEliminarCorreo.addEventListener('click', function(){
  localStorage.removeItem('email')
  mostrarCorreoGuardado()
});

document.addEventListener('DOMContentLoaded', mostrarCorreoGuardado)


