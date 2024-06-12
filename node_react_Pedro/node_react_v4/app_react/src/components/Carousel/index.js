import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Image from 'react-bootstrap/Image';
import Styles from './index.module.css'

function Carossel() {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Image src="/images/supercell-1.jpg" fluid />
        <Carousel.Caption className={Styles.Caption}>
          <h3>ClashRoyale</h3>
          <p>Entre na arena! Monte seu deck de batalha e leve a melhor em disputas rápidas em tempo real. Dos criadores de CLASH OF CLANS, chegou um jogo multijogador em tempo real com seus personagens preferidos de Clash. Batalhe já contra jogadores do mundo todo!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Image src="/images/supercell-2.jpg" fluid />
        <Carousel.Caption className={Styles.Caption}>
          <h3>BrawlStars</h3>
          <p>Batalhas 3x3 agitadas e batalha de último sobrevivente feitas para celular! Jogue com seus amigos ou sozinho em inúmeros modos de jogo em menos de três minutos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Image src="/images/supercell-3.jpg" fluid />
        <Carousel.Caption className={Styles.Caption}>
          <h3>SquadBusters</h3>
          <p>Todas as batalhas transbordam de diversão e lances imprevisíveis!  Aumente seu esquadrão, acabe com chefões, derrote seus amigos, colete e melhore personagens renomados de Clash of Clans, Brawl Stars, Hay Day, Clash Royale e Boom Beach.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carossel;