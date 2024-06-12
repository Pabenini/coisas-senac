//import serve para importar componentes
// Componentes: Container, Row, CardImage, dbjson
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardImage from 'components/CardImage';
import supercelljson from 'json/supercell.json';
import Carousel from '../../components/Carousel';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Styles from './index.module.css';

//Função Home
export default function Home() {
    return (
        <>
            <Carousel />
            <br />
            <Container>
                <Row>
                    <h2 className={Styles.h2}>Games</h2>
                    <hr />
                    {
                        supercelljson.data.map((json) => {
                            return <CardImage {...json} key={json.id} />
                        })
                    }
                </Row>
                <br />
                <h2 className={Styles.h2}>Sobre os Jogos</h2>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <figure>
                            <Image src="/images/capa-4.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className={Styles.Col}>
                        <h3>Clash Royale</h3>
                        <hr />
                        <p>Clash Royale é um videojogo de estratégia freemium desenvolvido e publicado pela Supercell, empresa sediada em Helsinki, na Finlândia. O jogo foi lançado em Canadá, Hong Kong, Austrália, Suécia, Noruega, Dinamarca, Islândia, Finlândia, Nova Zelândia, Brasil, Estados Unidos, Reino Unido e muitos outros países para os dispositivos iOS em 4 de janeiro de 2016. O jogo foi lançado para Android para os mesmos países acima mencionados em 16 de fevereiro de 2016. Ambas as plataformas receberam o lançamento mundial do jogo em 2 de março de 2016.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} className={Styles.Col}>
                        <h3>Squad Busters</h3>
                        <hr />
                        <p>Squad Busters é um jogo mobile da desenvolvedora finlandesa de videogames Supercell, com sede em Helsinque.É um jogo de estratégia casual em que o jogador coleta moedas e joias de outros esquadrões, de saques espalhados pelo mapa e de monstros. As moedas permitem que você compre baús com os quais você pode conseguir novos personagens para se juntarem ao seu time. As joias permitem que você se classifique no jogo, já que o jogador com mais joias no final do tempo vence.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <figure>
                            <Image src="/images/capa-1.jpg" fluid />
                        </figure>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <figure>
                            <Image src="/images/capa-6.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className={Styles.Col}>
                        <h3>Brawl Stars</h3>
                        <hr />
                        <p>Clash Royale é um videojogo de estratégia freemium desenvolvido e publicado pela Supercell, empresa sediada em Helsinki, na Finlândia. O jogo foi lançado em Canadá, Hong Kong, Austrália, Suécia, Noruega, Dinamarca, Islândia, Finlândia, Nova Zelândia, Brasil, Estados Unidos, Reino Unido e muitos outros países para os dispositivos iOS em 4 de janeiro de 2016. O jogo foi lançado para Android para os mesmos países acima mencionados em 16 de fevereiro de 2016. Ambas as plataformas receberam o lançamento mundial do jogo em 2 de março de 2016.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} className={Styles.Col}>
                        <h3>Clash of Clans</h3>
                        <hr />
                        <p>O jogo consiste no desenvolvimento de uma vila com a nomeação da preferência do jogador, com o objetivo de melhorá-la e torná-la capaz de defender-se de ataques de outros jogadores. Em 2014 a Supercell introduziu no jogo o modelo de Guerra entre Clãs, que aprimorou ainda mais a competitividade entre os players ao redor do mundo. Essas vilas tem como finalidade combater com outros jogadores para evoluir seu clã e sua própria vila. Com a atualização 8.332.9, foi introduzido o sistema de ataque entre companheiros do mesmo clã, assim tornando o jogo com uma dinâmica mais moderna, para também decidir rivalidades dentro do clã e mais importante como um treinamento de estratégia, que seriam usadas na guerra e sem haver nenhum custo no elixir e nenhuma despesa para o que recebe o ataque, onde o ataque só deve ser permitido com a decisão do dono da vila que irá receber o ataque.</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <figure>
                            <Image src="/images/capa-2.jpg" fluid />
                        </figure>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <figure>
                            <Image src="/images/capa-3.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} className={Styles.Col}>
                        <h3>Hay Day</h3>
                        <hr />
                        <p>Este é o Hay Day! Construa uma fazenda, pesque, crie animais, explore o vale, plante, decore e personalize seu próprio pedacinho de céu.</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6} className={Styles.Col}>
                        <h3>Boom Beach</h3>
                        <hr />
                        <p>Use a mente e os músculos para combater a maligna Guarda Sombria neste jogo épico de estratégia de combate. Ataque bases inimigas para libertar nativos escravizados e descubra os segredos deste paraíso tropical. Crie uma força-tarefa com jogadores do mundo todo e enfrentem o inimigo juntos. Observe, planeje e então EXPLODA A PRAIA!</p>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <figure>
                            <Image src="/images/capa-5.jpg" fluid />
                        </figure>
                    </Col>
                </Row>
            </Container>
            <br />
            <Row className={Styles.Row}>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <figure>
                                <Image src="/images/superlogo.jpg" fluid />
                            </figure>
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <h3>Sobre a Supercell</h3>
                            <hr />
                            <p>Supercell é uma empresa de jogos com sede em Helsinque, Finlândia, com escritórios em São Francisco, Seul e Xangai. Desde o nosso lançamento em 2010, trouxemos seis jogos para o mercado global – Hay Day, Clash of Clans, Boom Beach, Clash Royale, Brawl Stars e Squad Busters. Nosso sonho é criar ótimos jogos que o maior número possível de pessoas joguem durante anos e que sejam lembrados para sempre.</p>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <figure>
                            <Image src="/images/superlogo.jpg" fluid />
                        </figure>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <h3>Sobre a Supercell</h3>
                        <hr />
                        <p>Supercell é uma empresa de jogos com sede em Helsinque, Finlândia, com escritórios em São Francisco, Seul e Xangai. Desde o nosso lançamento em 2010, trouxemos seis jogos para o mercado global – Hay Day, Clash of Clans, Boom Beach, Clash Royale, Brawl Stars e Squad Busters. Nosso sonho é criar ótimos jogos que o maior número possível de pessoas joguem durante anos e que sejam lembrados para sempre.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}