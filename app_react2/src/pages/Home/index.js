import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export default function Home() {
    return (
        <Container>
            <Row>
                <p> Home </p>

                <Button variant="primary">Primary</Button>

                <Col xs={12} sm={6}  md={4} lg={3}>
                    <figure>
                        <Image src="/images/images-1.jpg" fluid />
                        {/* <img src="/images/images-1.jpg"  /> */}
                    </figure>
                </Col>
                <Col xs={12} sm={6}  md={4} lg={3}>
                    <figure>
                        <Image src="/images/images-1.jpg" fluid />
                        {/* <img src="/images/images-1.jpg"  /> */}
                    </figure>
                </Col>

                <Col xs={12} sm={6}  md={4} lg={3}>
                    <figure>
                        <Image src="/images/images-1.jpg" fluid />
                        {/* <img src="/images/images-1.jpg"  /> */}
                    </figure>
                </Col>
                
            </Row>
        </Container>

    )
}