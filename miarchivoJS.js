
alert ("Buenos dias, ingresá tus notas para obtener un promedio y verificar si pasaste a la segunda instancia de evaluación")

let cantidadCalificaciones = prompt('Ingresá la cantidad de calificaciones')
let sumatoria = 0
let promedio = 0

for(let index = 1; index <= cantidadCalificaciones; index++) {
    let calificacion = prompt("Ingresá la calificacion: " + index)
    sumatoria = sumatoria + parseFloat(calificacion)

}

promedio = sumatoria / cantidadCalificaciones

if (promedio <= 4) {
    alert (`Tu promedio es de ${promedio.toFixed(2)} no podrás pasar a la próxima instancia, lo siento.`)
} else {
    alert (`Felicitaciones, tu promedio es de ${promedio.toFixed(2)} y te permite pasar a la próxima instancia`)
    
    let opciones = prompt (`Ingresá 1 para más información \n 2. ESC para salir.`)
    
    while (opciones != "ESC") {
        alert ("Envianos un mail a info@estudiantes.com.ar para recibir toda la información")
        console.log (nombre + SEPARADOR + typeof anios_actualizacion + SEPARADOR + aniosactualizacion)
    
    }
}