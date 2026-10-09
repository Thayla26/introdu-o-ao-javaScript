// BLOCO 1 - VARIÁVEIS E TIPOS PRIMITIVOS

let pontos = 20;
pontos += 10;
console.log("Pontos:", pontos);

const MAX_PONTOS = 100;
console.log("Máximo de pontos:", MAX_PONTOS);

try {
    MAX_PONTOS = 200;
} catch (erro) {
    console.log("Erro ao alterar a constante:", erro.name);
}

let nome = "Lavinia";
let idade = 18;
let estudante = true;
let curso;
let endereco = null;

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof estudante);
console.log(typeof curso);
console.log(typeof endereco);

let aluno = "Lavinia";
let disciplina = "JavaScript";

console.log(`A aluna ${aluno} está estudando ${disciplina}.`);
console.log("A aluna " + aluno + " está estudando " + disciplina + ".");


// BLOCO 2 - FUNÇÕES

console.log("Maior de idade:", ehMaiorDeIdade(18));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro antes da declaração:", erro.name);
}

const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

console.log("Função de expressão:", ehMaiorDeIdadeExpressao(20));

function dobro(n) {
    return n * 2;
}

console.log("Dobro declarado:", dobro(5));

const dobroExpressao = function(n) {
    return n * 2;
};

console.log("Dobro expressão:", dobroExpressao(5));

const dobroArrow = n => n * 2;

console.log("Dobro arrow:", dobroArrow(5));

function dobroPadrao(n = 1) {
    return n * 2;
}

console.log("Dobro sem argumento:", dobroPadrao());
console.log("Dobro com argumento:", dobroPadrao(4));


// BLOCO 3 - CONTROLE DE FLUXO

function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

console.log(classificarNota(8));
console.log(classificarNota(4));

let corSemaforo = "amarelo";

switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor inválida");
}

console.log("Tabuada do 5");

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

console.log("Contagem regressiva");

let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

console.log("Números pares e ímpares com for");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " é par");
    } else {
        console.log(i + " é ímpar");
    }
}

console.log("Números pares e ímpares com while");

let numero = 1;

while (numero <= 20) {
    if (numero % 2 === 0) {
        console.log(numero + " é par");
    } else {
        console.log(numero + " é ímpar");
    }

    numero++;
}

function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";
        default:
            return "Número inválido";
    }
}

console.log(diaDaSemana(2));
console.log(diaDaSemana(7));
console.log(diaDaSemana(9));

