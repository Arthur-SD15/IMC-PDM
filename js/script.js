document.getElementById('calc').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (altura === 0 || peso === 0) {
        document.getElementById('resultado').innerHTML = 'Por favor, digite valores válidos.';
        return;
    }
    
    const bmi = peso / (altura * altura);
    const bmiFormatted = bmi.toFixed(2);

    let bmiCategory = '';
    if (bmi < 18.5) {
        bmiCategory = 'Abaixo do peso normal';
    } else if (bmi < 24.9) {
        bmiCategory = 'Peso normal';
    } else if (bmi < 29.9) {
        bmiCategory = 'Sobrepeso';
    } else if (bmi < 34.9){
        bmiCategory = 'Obesidade classe I';
    } else if (bmi < 39.9){
        bmiCategory = 'Obesidade classe II';
    } else{
        bmiCategory = 'Obesidade classe III';
    }
    
    const resultText = `O cliente ${name}, possui IMC de ${bmiFormatted}, na categoria "${bmiCategory}".`;
    document.getElementById('resultado').innerHTML = resultText;
});