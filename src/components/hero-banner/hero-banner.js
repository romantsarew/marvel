import { number } from "prop-types";
import { useEffect, useState } from "react";
import ErrorMessage from "../error/error";
import Skeleton from "../skeleton/skeleton";
import Spinner from "../spinner/spinner";
import useMarvelService from "../../services/MarvelService";
import { NavLink } from "react-router-dom";

const HeroBanner = (props) => {
  const [hero, setHero] = useState(null);

  const { loading, error, getCharacter, clearError } =
    useMarvelService();

  useEffect(() => {
    updateHero();
  }, [props.heroId]);

  const onHeroLoaded = (hero) => {
    setHero(hero);
  };

  const updateHero = () => {
    clearError();
    if (!props.heroId) {
      return;
    }

    getCharacter(props.heroId).then(onHeroLoaded);
  };

  const skeleton = hero || loading || error ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !hero) ? <View hero={hero} /> : null;

  return (
    <div className="heroes__info">
      {skeleton}
      {errorMessage}
      {spinner}
      {content}
    </div>
  );
};

const View = ({ hero }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = hero;
  
  return (
    <>
      <div className="heroes__top">
        <img src={thumbnail} width={150} height={150} alt={name} />
        <div className="hero__buttons">
          <h3>{name}</h3>
          <a href={homepage} className="btn btn-red">
            Homepage
          </a>
          <a href={wiki} className="btn btn--grey">
            Wiki
          </a>
        </div>
      </div>
      <p>{description}</p>
      <h4>Comics:</h4>
      <ul>
        {comics.length === 0
          ? (<p>Unfortunately, we don't have data</p>)
          : comics.map((item, i) => (
              <NavLink to={`/comics/${item.resourceURI.match(/\d+$/)[0]}`} key={i}>
                {item.name}
              </NavLink>
            ))}
      </ul>
    </>
  );
};

HeroBanner.propTypes = {
  heroId: number,
};

export default HeroBanner;
