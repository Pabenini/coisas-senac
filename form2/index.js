let form = document.getElementById("formulario")
let error = document.getElementById("error")
form.addEventListener("submit", function (event) {
    event.preventDefault()
    let login = document.getElementById("login").value
    let senha = document.getElementById("senha").value
    // alert(login +" "+ senha)
    validarLogin(login, senha)
})

function validarLogin(login, senha){
    // alert(login +' '+ senha)
    if(login == 'user' && senha == '123'){
        // alert('login correto')
        localStorage.setItem('acessorestrito', true)
        window.location.href = 'admin/home.html'
        // alert(acessorestrito)
    } else {
        // alert('login errado')
        error.innerHTML = "Login ou Senha Inválido"
    }
}

function saire(){
    alert('logout efetuado!')
    localStorage.setItem('acessorestrito', false)
    window.location.href = '../index.html'
}

function verificaacesso(){
    acesso = localStorage.getItem("acessorestrito")
    if (acesso === 'false'){
        window.location.href = '../index.html'
    }
}