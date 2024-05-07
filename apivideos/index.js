fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db')
    .then(response => response.json())
    .then(data => {
        const lista = printVideos(data);
        const listaContainer = document.getElementById("lista-videos");
        listaContainer.innerHTML = lista.join("");
    })
    .catch(error => console.error('Erro ao buscar os Dados:', error));

function printVideos(data) {
    if (data && data.videos) {
        return data.videos.map(video => `<div>${video.titulo}</div>`);
    } else {
        console.error('Não foram encontrados videos na resposta');
        return [];
    }
}