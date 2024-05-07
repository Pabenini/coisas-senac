function enviarCep(){
    // alert('Botão Clicado')
    var cep = document.getElementById('cep').value.replace(/\D/g, '');
    var rua = document.getElementById('rua').value;
    // var bairro = document.getElementById('bairro').value;
    // var cidade = document.getElementById('cidade').value;

    document.getElementById('exibirCep').innerHTML = 'Cep ' + cep
    document.getElementById('exibirRua').innerHTML = ' ' + rua
    
    // alert(cep)
    // alert(rua)
    // alert(bairro)
    // alert(cidade)

    return;
}