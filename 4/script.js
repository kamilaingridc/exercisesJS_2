// Faça uma calculadora: Soma, subtração, multiplicação, divisão, exponenciação, raiz quadrada, percentual, Fibonacci e fatorial. 

function Calculator(n1, n2){ 

    let soma = parseInt(n1) + parseInt(n2)
    let subtracao = parseInt(n1) - parseInt(n2)
    let multiplicacao = parseInt(n1) * parseInt(n2)
    let divisao = parseInt(n1) / parseInt(n2)
    let exponenciacao = Math.pow(n1,n2)
    let raiz = Math.sqrt(n1,n2)
    let percentual = (n1 / n2) * 100
    function GenerateFibonacci(n1){
        var Fibonacci = [];
        Fibonacci[0]=0;
        Fibonacci[1]=1;
        for (var i = 2; i < n1; i++){
            Fibonacci[i] = Fibonacci[i - 2] + Fibonacci [i-1];
            return Fibonacci
        }
    }
    var f = GenerateFibonacci(n1);
    
    function Factorialize(n1){
        if (n1 < 0){
            return -1;
        } else if (n1 == 0){

        } else {
            return (n1 * Factorialize(n1 - 1));
        }
    }

    if(escolha == 1){
        return alert("Result: " + soma)
    } else if (escolha == 2){
        return alert("Result: " + subtracao)
    } else if (escolha == 3){
        return alert("Result: " + multiplicacao)
    } else if (escolha == 4){
        return alert("Result: " + divisao)
    } else if (escolha == 5){
        return alert("Result: " + exponenciacao)
    } else if (escolha == 6){
        return alert("Result: " + raiz)
    } else if (escolha == 7){
        return alert("Result: " + percentual)
    } else if (escolha == 8){
        return alert("Result: " + f)
    } else if (escolha == 9){
        return alert("Result: " + Factorialize(n1))
    } 
}

escolha = prompt("Escolha a operação desejada:\n[1] Soma | [2] Subtração\n[3] Multiplicação | [4] Divisão\n[5] Exponenciação | [6] Raiz Quadrada\n[7] Percentual | [8] Fibonacci | [9] Fatorial")

n1 = prompt("Type the first: ")
n2 = prompt("Type the second number: ")

Calculator(n1, n2)
