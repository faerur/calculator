function soma(n1, n2){
    return n1 + n2;
}

function multiplicacao(n1,n2){
    return n1 * n2;
}

function divisao(n1,n2){
    return n1 / n2;
}

function subtracao(n1,n2){
    return n1 - n2;
}

function perguntarPrimeiroOperando(){
    var primeiraResposta = parseInt(prompt("Digite o primeiro operando"));
    return primeiraResposta;
}

function perguntarSegundoOperando(){
    var segundaResposta = parseInt(prompt("Digite o segundo operando"));
    return segundaResposta;
}

var resultado;
var primeiroValor;
var segundoValor;
var repita = true;

while (repita){
    var operacao = prompt("Qual operação matemática você deseja realizar?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n***DIGITE '0' para encerrar a calculadora***");
    switch (operacao) {
        case '1':
            primeiroValor = perguntarPrimeiroOperando();
            segundoValor = perguntarSegundoOperando();
            resultado = soma(primeiroValor,segundoValor);
            alert(`O resultado da soma é ${resultado}`);
            break;
        case '2':
            primeiroValor = perguntarPrimeiroOperando();
            segundoValor = perguntarSegundoOperando();
            resultado = subtracao(primeiroValor, segundoValor);
            alert(`O resultado da subtração é ${resultado}`);
            break;
        case '3':
            primeiroValor = perguntarPrimeiroOperando();
            segundoValor = perguntarSegundoOperando();
            resultado = multiplicacao(primeiroValor, segundoValor);
            alert(`O resultado da multiplicação é ${resultado}`);
            break;
        case '4':
            primeiroValor = perguntarPrimeiroOperando();
            segundoValor = perguntarSegundoOperando();
            resultado = divisao(primeiroValor, segundoValor);
            alert(`O resultado da divisão é ${resultado}`);
            break;
        case '0':
            repita = false
            alert(`Até a próxima`);
            
        default:
            console.log(`${operacao} é inválido.`);
            
    } 

}