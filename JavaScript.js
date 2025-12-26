JavaScript
/**
 * Desafio: Classificador de Nível de Herói
 * Requisitos: Variáveis, Operadores, Laços de repetição, Estruturas de decisões
 */

// 1.Variáveis e Operadores
// Lista de heróis para demonstrar laços de repetição.
const herois = [
    { nome: "Arthur", xp: 900 },
    { nome: "Diana", xp: 1500 },
    { nome: "Logan", xp: 3000 },
    { nome: "Selina", xp: 6000 },
    { nome: "Bruce", xp: 7500 },
    { nome: "Clark", xp: 8500 },
    { nome: "Victor", xp: 9500 },
    { nome: "Barry", xp: 11000 }
];

// 2. Laço de repetição
// Percorrendo a lista de heróis
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    // 3. Estruturas, decisões e Operadores
    if (xp < 1000) {
        nivel = "Iron";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Diamante";
    }

    // 4. Saída formatada
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}