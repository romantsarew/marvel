import { useEffect, useState } from "react";
import "./intro";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error/error";
import useMarvelService from "../../services/MarvelService";

const Intro = () => {
  const [hero, setHero] = useState(null);

  const {loading, error, getCharacter, clearError} = useMarvelService();

  useEffect(() => updateHero(), []);

  const onHeroLoaded = (hero) => {
    setHero(hero);
  };

  const updateHero = () => {
    clearError()
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    getCharacter(id).then(onHeroLoaded);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error) ? <View hero={hero} /> : null;

  return (
    <section className="intro">
      {errorMessage}
      {spinner}
      {content}
      <div className="intro__static">
        <p>
          Random character for today!
          <br />
          Do you want to get to know him better?
        </p>
        <p>Or choose another one</p>
        <a href="#" className="btn btn-red" onClick={() => updateHero()}>
          Try it
        </a>
      </div>
    </section>
  );
};

const View = ({ hero }) => {
  if (!hero) return null;

  const { name, description, thumbnail, homepage, wiki } = hero;
  const isNotAvailable = thumbnail.includes("not_available");

  return (
    <div className="intro__random">
      <img
        src={thumbnail}
        width="180"
        height="180"
        alt="hero"
        className={isNotAvailable ? "not-available" : ""}
        data-hero-image
      />
      <div className="intro__descr">
        <h2 data-hero-name>{name}</h2>
        <p data-hero-text>{description}</p>
        <div className="intro__buttons">
          <a href={homepage} className="btn btn-red">
            Homepage
          </a>
          <a href={wiki} className="btn btn--grey">
            Wiki
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
