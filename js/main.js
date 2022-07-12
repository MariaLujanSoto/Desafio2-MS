alert("Bienvenido a la calculadora de condicion academica")
let alumno = prompt("ingrese el nombre del alumno: ")
let nota1 = parseInt (prompt("ingrese la primer nota: "));
let nota2 = parseInt (prompt("ingrese la segunda nota: "));
let nota3 = parseInt (prompt("ingrese la tercera nota: "));
let nota4 = parseInt (prompt("ingrese la cuarta nota: "));

let listaNotas = [nota1, nota2, nota3, nota4]


function sumadorDeNotas(listaNotas){
    let sumadorDeNotas = 0
    for (let i = 0; i < 4 ; i++){
    sumadorDeNotas += listaNotas[i]
    }
    return sumadorDeNotas
}

let totalNotas = sumadorDeNotas(listaNotas)

function promedio(totalNotas){
    let promedio = Math.round(totalNotas/4)
    return promedio
}

let promedioTotal = promedio(totalNotas)


if (promedioTotal >= 8){
    alert("el alumno: "+alumno+" tiene la condicion de PROMOCIONADO")
}else if (promedioTotal >= 6){
    alert("el alumno: "+alumno+" tiene la condicion de REGULAR")

}else{
    alert("el alumno: "+alumno+" tiene la condicion de LIBRE")

}


