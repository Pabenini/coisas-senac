//alert('Digite um CEP válido')
function buscarCEP() {
    var cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length !== 8) {
        alert('Digite um CEP válido');
        return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //fetch(`https://api.brasilaberto.com/v1/zipcode/${cep}`)
        .then(response => response.json())//converte a resposta em JSON
        .then(data => preencherFormulario(data))//chama a função formulário
        .catch(error => console.error('Erro ao buscar CEP:', error));
}// Fecha a function buscarCEP
// console.log(JSON.stringify(data))

function preencherFormulario(data) {
    document.getElementById('logradouro').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('localidade').value = data.localidade;
    document.getElementById('uf').value = data.uf;
    document.getElementById('str').innerHTML = JSON.stringify(data)
}