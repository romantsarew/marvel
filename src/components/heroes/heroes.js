import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./heroes.scss";
import ErrorMessage from "../error/error";
import Spinner from "../spinner/spinner";
import useMarvelService from "../../services/MarvelService";

const HeroList = (props) => {
  const [heroList, setHeroList] = useState([]);
  const [newItemLoading, setnewItemLoading] = useState(false);
  const [offset, setOffset] = useState(210);
  const [heroEnded, setHeroEnded] = useState(false);

  const { loading, error, getAllCharacters } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onRequest = (offset, init) => {
    init ? setnewItemLoading(false) : setnewItemLoading(true);
    getAllCharacters(offset).then(onHeroListLoaded);
  };

  const onHeroListLoaded = (newHeroList) => {
    let ended = false;
    if (newHeroList.length < 9) {
      ended = true;
    }

    setHeroList((heroList) => [...heroList, ...newHeroList]);
    setnewItemLoading((newItemLoading) => false);
    setOffset((offset) => offset + 9);
    setHeroEnded((heroEnded) => ended);
  };

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) => {
      if (item) {
        item.classList.remove("char__item_selected");
      }
    });

    if (itemRefs.current[id]) {
      itemRefs.current[id].classList.add("char__item_selected");
      itemRefs.current[id].focus();
    }
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      let imgStyle = { objectFit: "cover" };
      if (
        item.thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        imgStyle = { objectFit: "unset" };
      }

      return (
        <li
          className="char__item"
          tabIndex={0}
          ref={(el) => (itemRefs.current[i] = el)}
          key={item.id}
          onClick={() => {
            props.onHeroSelected(item.id);
            focusOnItem(i);
          }}
          onKeyPress={(e) => {
            if (e.key === " " || e.key === "Enter") {
              props.onHeroSelected(item.id);
              focusOnItem(i);
            }
          }}
        >
          <img src={item.thumbnail} alt={item.name} style={imgStyle} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });
    return <ul className="char__grid">{items}</ul>;
  }
  const items = renderItems(heroList);

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <div className="char__list">
      {errorMessage}
      {spinner}
      {items}
      <button
        className="btn btn--long"
        disabled={newItemLoading}
        style={{ display: heroEnded ? "none" : "flex" }}
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

HeroList.propTypes = {
  onHeroSelected: PropTypes.func.isRequired,
};

export default HeroList;
