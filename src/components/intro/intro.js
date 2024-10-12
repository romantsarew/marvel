import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import './intro'
import Spinner from '../spinner/spinner'
import ErrorMessage from '../error/error';

class Intro extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    hero: {},
    loading: true,
    error: false
  }

  marvelService = new MarvelService()

  componentDidMount() {
    this.updateHero();
  }

  componentWillUnmount() {
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
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
    this.onHeroLoading()
    this.marvelService
      .getCharacter(id)
      .then(this.onHeroLoaded)
      .catch(this.onError)
  }

  render() {
    const { hero, loading, error } = this.state
    const errorMessage = error ? <ErrorMessage /> : null
    const spinner = loading ? <Spinner /> : null
    const content = !(loading || error) ? <View hero={hero} /> : null

    return (
      <section className='intro'>
        {errorMessage}
        {spinner}
        {content}
        <div className='intro__static'>
          <p>Random character for today!<br />
            Do you want to get to know him better?</p>
          <p>Or choose another one</p>
          <a href='#' className='btn btn-red' onClick={this.updateHero}>Try it</a>
        </div>
      </section>
    )
  }
}

const View = ({ hero }) => {
  const { name, description, thumbnail, homepage, wiki } = hero

  const isNotAvailable = thumbnail.includes("not_available");

  return (
    <div className='intro__random'>
      <img src={thumbnail} width='180' height='180' alt='hero' className={isNotAvailable ? 'not-available' : ''} data-hero-image />
      <div className='intro__descr'>
        <h2 data-hero-name>{name}</h2>
        <p data-hero-text>{description}</p>
        <div className='intro__buttons'>
          <a href={homepage} className='btn btn-red'>Homepage</a>
          <a href={wiki} className='btn btn--grey'>Wiki</a>
        </div>
      </div>
    </div>
  )
}

export default Intro