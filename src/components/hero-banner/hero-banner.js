import { number } from "prop-types";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../error/error";
import Skeleton from "../skeleton/skeleton";
import Spinner from "../spinner/spinner";

class HeroBanner extends Component {

  state = {
    hero: null,
    loading: false,
    error: false
  }

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateHero()
  }

  componentDidUpdate(prevProps) {
    if (this.props.heroId !== prevProps.heroId) {
      this.updateHero()
    }
  }

  onHeroLoaded = (hero) => {
    this.setState({
      hero,
      loading: false
    })
  }

  onHeroLoading = () => {
    this.setState({
      loading: true
    })
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  updateHero = () => {
    const { heroId } = this.props
    if (!heroId) {
      return
    }

    this.onHeroLoading()
    this.marvelService
      .getCharacter(heroId)
      .then(this.onHeroLoaded)
      .catch(this.onError)
  }

  render() {
    const { hero, loading, error } = this.state;
    const skeleton = hero || loading || error ? null : <Skeleton />
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error || !hero) ? <View hero={hero} /> : null

    return (
      <div className="heroes__info">
        {skeleton}
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  };
}

const View = ({ hero }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = hero
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
      <p>
        {description}
      </p>
      <h4>Comics:</h4>
      <ul>
        {comics.length === 0 ? (
          <p>Unfortunately, we don't have data</p>
        ) : (
          comics.map((item, i) => (
            <li key={i}>
              {item.name}
            </li>
          ))
        )}
      </ul>
    </>
  )
}

HeroBanner.propTypes = {
  heroId: number
}

export default HeroBanner;
