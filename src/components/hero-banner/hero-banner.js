import loki from "../../images/loki.jpg";
import Skeleton from "../skeleton/skeleton";

const HeroBanner = () => {
  return (
    <div className="heroes__info">
      <div className="heroes__top">
        <img src={loki} width={150} height={150} alt="hero ava" />
        <div className="hero__buttons">
          <h3>Loki</h3>
          <a href="#" className="btn btn-red">
            Homepage
          </a>
          <a href="#" className="btn btn--grey">
            Wiki
          </a>
        </div>
      </div>
      <p>
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </p>
      <h4>Comics:</h4>
      <ul>
        <li>All-Winners Squad: Band of Heroes (2011) #3</li>
        <li>Alpha Flight (1983) #50</li>
        <li>Amazing Spider-Man (1999) #503</li>
        <li>Amazing Spider-Man (1999) #504</li>
        <li>
          AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
        </li>
        <li>Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)</li>
        <li>
          Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
        </li>
        <li>Vengeance (2011) #4</li>
        <li>Avengers (1963) #1</li>
        <li>Avengers (1966) #1</li>
      </ul>
      <Skeleton />
    </div>
  );
};

export default HeroBanner;
