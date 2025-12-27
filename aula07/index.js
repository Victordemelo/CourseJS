//Exercício
//Resultado esperado
//Victor de melo da Rosa tem 22 anos, nasceu em 22/12/2003, pesa 77 kg
//Tem 1.70 de altura e seu IMC é de (Calculo IMC)

const anoDoExercicio = 2025;
const nome = "Victor de Melo da Rosa";
let idade = 22;
let peso = 77.0;
let altura = 1.7;
const nascimento = anoDoExercicio - idade;
let IMC = peso / altura ** 2;

console.log(nome, "tem", idade, "nasceu em", nascimento, "e pesa", peso, "Kg");
console.log("Tem", altura, "de altura e seu IMC é de:", IMC.toFixed(3));
