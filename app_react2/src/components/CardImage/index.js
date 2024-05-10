import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/image';

export default function CardImage({id, images}){
    return (
        <Col xs={8} md={4} lg={3}>
            <figure>
                {/* <Image src="/images/images-1.jpg" fluid /> */}
                <Image src={images} fluid></Image>
            </figure>
        </Col>
    )
}