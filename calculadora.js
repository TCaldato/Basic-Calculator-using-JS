function calculadora(){
    const operacao = Number(prompt(`Escolha uma operacao:\n 1 - Soma (+)\n 2 - Subtacao (-)\n 3 - Multiplicacao (*)\n 4 - Divisao Real (/)\n 5 - Divisao Inteira (%)\n 6 - Potenciacao (**)`))
   
    if(!operacao || operacao >= 7){
        alert('Erro - Operacao Invalida');
        calculadora();        
    }
    else{

        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o Segundo Valor:'));
        let resultado;

        if(!n1 || !n2) {
            alert('Erro - Parametro Invalido!')
            calculadora();
        }
        else{

            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();
            }
        
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();
            }
            function divisaoInteira(){
                resultado = n1 % n2;
                alert(`O resto da divisao entre ${n1} e ${n2} e igual a ${resultado}`)
                novaOperacao();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} e igual a ${resultado}`)
                novaOperacao();
            }
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operacao?\n 1 - Sim\n 2 - Nao');
            }
            function novaOperacao(){
                let opcao = prompt('Deseja fazer outra operacao?\n 1 - Sim\n 2 - Nao');
        
                if (opcao == 1) {
                    calculadora();
                }
                else if (opcao == 2) {
                    alert('Ate mais')
                }
                else {
                    alert('Digite uma opcao valida')
                    novaOperacao();
                }
            }

        }
                
        
        /* if (operacao == 1) {
            soma();
        }
        else if(operacao == 2) {
            subtracao();
        }
        else if(operacao == 3){
            multiplicacao();
        }
        else if (operacao == 4) {
            divisaoReal();
        }
        else if(operacao == 5) {
            divisaoInteira();
        }
        else if(operacao == 6){
            potenciacao();
        } */

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;


        }

    }
   
}

calculadora();