export default function Main() {
    // Variavel
    let nome = "Professor Nelci Mariano";
    // Objeto
    let usuario = {
        login : 'Nelcijunior',
        departamento: 'Tecnologia da informação'
    }
    return (
        <div>
            <p className="title">Olá, {nome}</p>
            <p className="text">Seu Login: é {usuario.login} e seu Dpt é {usuario.departamento}</p>
        </div>
    )
}
