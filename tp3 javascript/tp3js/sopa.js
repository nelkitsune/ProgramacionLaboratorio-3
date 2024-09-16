function calcularVolumen(diametro, altura, unidad) {
    // Validar la unidad de medida
    if (unidad !== 'm' && unidad !== 'cm') {
        return false;
    }

    // Convertir a metros si la unidad es centímetros
    if (unidad === 'cm') {
        diametro /= 100;
        altura /= 100;
    }
    let radio = diametro/2
    // Calcular el volumen en metros cúbicos
    let volumenMetrosCubicos = Math.PI * (radio * radio)* altura;

    // Convertir el volumen a litros
    let volumenLitros = volumenMetrosCubicos * 1000;

    return volumenLitros;
}

// Ejemplo de uso
console.log(calcularVolumen(2, 5, 'm'));   // Debería ser 15.707963267949465 litros
console.log(calcularVolumen(200, 500, 'cm')); // Debería ser 1570796.3267949465 litros