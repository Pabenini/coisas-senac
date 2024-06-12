import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Styles from './index.module.css';

export default function CardImage({id, images, text}) {
    return (
        <Col xs={12} sm={6} md={4} lg={2}>
            <figure>
                <Image src={images} fluid />
                {/* <img src="/images/images-1.jpg"  /> */}
                <p className={Styles.text}>{text}</p>
            </figure>
        </Col>
    )
}