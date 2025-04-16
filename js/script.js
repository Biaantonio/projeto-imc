document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const imc = peso / (altura * altura);

    document.getElementById('imc-valor').textContent = imc.toFixed(2);

    let categoria = '';
    if (imc < 18.5) {
        categoria = 'Baixo peso';
    } else if (imc >= 18.5 && imc < 24.99) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.99) {
        categoria = 'Sobrepeso';
    } else if (imc >= 30 && imc < 34.99) {
        categoria = 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 39.99) {
        categoria = 'Obesidade Grau II';
    } else {
        categoria = 'Obesidade Grau III';
    }

    document.getElementById('categoria').textContent = categoria;

    document.getElementById('resultado').style.display = 'block';
});