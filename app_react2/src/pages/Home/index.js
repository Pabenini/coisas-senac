import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardImage from '../../components/CardImage';
import dbjson from '../../json/db.json';

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