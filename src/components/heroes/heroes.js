import React, { Component } from "react";
import PropTypes from "prop-types";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../error/error";
import Spinner from "../spinner/spinner";

class Heroes extends Component {
  state = {
    heroes: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 210,
    heroEnded: false,
    isLoading: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 &&
      !this.state.newItemLoading &&
      !this.state.heroEnded
    ) {
      this.onRequest(this.state.offset);
    }
  };

  onRequest = (offset) => {
    this.onHeroesLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onHeroesLoaded)
      .catch(this.onError);
  };

  onHeroesLoading = () => {
    this.setState({
      newItemLoading: true,
      isLoading: true,
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  onHeroesLoaded = (newHeroes) => {
    let ended = false;
    if (newHeroes < 9) {
      ended = true;
    }

    this.setState(({ offset, heroes }) => ({
      heroes: [...heroes, ...newHeroes],
      loading: false,
      newItemLoading: false,
      offset: offset + 9,
      heroEnded: ended,
      isLoading: false,
    }));
  };

  render() {
    const { heroes, loading, error, offset, newItemLoading, heroEnded, isLoading } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading || newItemLoading ? <Spinner /> : null;
    const content = !(loading || error) ? (
      <View heroes={heroes} onHeroSelected={this.props.onHeroSelected} />
    ) : null;

    return (
      <div className="heroes__choose">
        <h2 className="visually-hidden">Hero cards</h2>
        <div className="heroes__list">
          {spinner}
          {errorMessage}
          <ul>{content}</ul>
          <button
            type="button"
            className={isLoading ? "btn btn--long is-loading" : "btn btn--long"}
            disabled={newItemLoading}
            style={{ display: heroEnded ? "none" : "block" }}
            onClick={() => this.onRequest(offset)}
          >
            LOAD MORE
          </button>
        </div>
      </div>
    );
  }
}

class View extends Component {
  state = {
    selectedHeroId: null, // Состояние для хранения активного элемента
  };

  handleHeroClick = (id) => {
    this.setState({ selectedHeroId: id });
    this.props.onHeroSelected(id);
  };

  handleHeroFocus = (id) => {
    this.setState({ selectedHeroId: id });
  };

  render() {
    const { heroes } = this.props;
    const { selectedHeroId } = this.state;

    return (
      <>
        {heroes.map((hero) => {
          const { name, thumbnail, id } = hero;

          const liClass = id === selectedHeroId ? "active" : "";

          return (
            <li
              key={id}
              className={liClass}
              onClick={() => this.handleHeroClick(id)}
              onFocus={() => this.handleHeroFocus(id)} 
              tabIndex="0"
            >
              <img src={thumbnail} width={200} height={200} alt={name} />
              <div>{name}</div>
            </li>
          );
        })}
      </>
    );
  }
}

Heroes.propTypes = {
  onHeroSelected: PropTypes.func.isRequired,
};

export default Heroes;
