let Pedro ={
    peso: 78,
    altura: 1.69
};

let Lucas ={
    peso: 92,
    altura: 1.95
};

let Lucia ={
    peso: 60,
    altura: 1.65
};

let Estrella ={
    peso: 65,
    altura: 1.75
};

function calcularIMC(peso, altura){
    return peso / (altura * altura);
}       

let imcPedro = calcularIMC(Pedro.peso, Pedro.altura);
let imcLucas = calcularIMC(Lucas.peso, Lucas.altura);
let imcLucia = calcularIMC(Lucia.peso, Lucia.altura);
let imcEstrella = calcularIMC(Estrella.peso, Estrella.altura);

console.log(imcPedro);
console.log(imcLucas);
console.log(imcLucia);
console.log(imcEstrella);

