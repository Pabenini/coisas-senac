let form = document.getElementById("formulario")
form.addEventListener("submit", function (event) {
    let login = document.getElementById('login').value
    let senha = document.getElementById('senha').value
    alert(login +' '+senha)
})