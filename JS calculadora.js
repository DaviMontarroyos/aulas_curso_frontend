function pegarNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

function somar() {
    const { num1, num2 } = pegarNumeros();
    const resultado = num1 + num2;
    mostrarResultado(resultado);
}

function subtrair() {
    const { num1, num2 } = pegarNumeros();
    const resultado = num1 - num2;
    mostrarResultado(resultado);
}

function multiplicar() {
    const { num1, num2 } = pegarNumeros();
    const resultado = num1 * num2;
    mostrarResultado(resultado);
}

function dividir() {
    const { num1, num2 } = pegarNumeros();
    if (num2 === 0) {
        mostrarResultado('Erro: Divisão por zero não é permitida.');
        return;
    }
    const resultado = num1 / num2;
    mostrarResultado(resultado);
}

function potenciar() {
    const { num1, num2 } = pegarNumeros();
    const resultado = Math.pow(num1, num2);
    mostrarResultado(resultado);
}

function mostrarResultado(valor) {
    document.getElementById('resultado').innerText = `Resultado: ${valor}`;
}
