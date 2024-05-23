//import serve para importar componentes
// Componentes: Container, Row, CardImage, dbjson
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardImage from 'components/CardImage';
import dbjson from 'json/db.json';

//Função Home
export default function Home() {
    return (
        <Container>
            <Row>
                {
                    dbjson.data.map((json) => {
                        return <CardImage {...json} key={json.id} />
                    })
                }
            </Row>
        </Container>
    )
}