

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