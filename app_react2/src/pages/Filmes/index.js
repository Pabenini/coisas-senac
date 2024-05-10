import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';
//useState é um Hook do react para trabalhar com o estado em componentes, com este é possivel iniciar
//useEffect é outro hook do react usado para executar efeitos colaterais em componentes funcionais
export default function Filmes() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db')
            .then(response => response.json())
            .then(data => {
                setMovies(data.videos);
            })
            .catch(error => console.error('Erro ao carregar os videos:', error));
    }, []);
    return (
        <Container>
            <Row>
                {movies.map(json => (
                    <p>{json.id} - {json.titulo}</p>
                ))}
            </Row>
        </Container>
    )
}
