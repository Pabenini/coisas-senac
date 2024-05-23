import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';

export default function Students() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        //fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db')
         fetch('http://localhost:4000/select-students')
            .then(response => response.json())
            .then(data => {
                setStudents(data.students);
            })
            .catch(error => console.error('Erro ao carregar Students:', error));
    }, []);
    return (
        <Container>
            <Row>
                {students.map(json => (
                    <p>{json.stu_id} - {json.stu_name} - {json.stu_login}</p>
                ))}
            </Row>
        </Container>
    )
}

//useState é um Hook do react para trabalhar com o estado em componentes. Com este é possível iniciar e atualizar o estado de uma função
//useEffect é outro hook do React usado para executar efeitos colaterais em componentes funcionais, qualquer operação que não seja diretamente relacionada à renderização do componente, como chamadas de API, manipulação de DOM


// {
//     dbjson.data.map((json) => {
//         return <CardImage {...json} key={json.id} />
//     })
// }