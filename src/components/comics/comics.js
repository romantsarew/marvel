import { useEffect, useState } from "react";
import banner from "../../images/banner.jpg";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../error/error";
import Spinner from "../spinner/spinner";
import { NavLink } from "react-router-dom";

const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [offset, setOffset] = useState(50);
  const [comicsEnded, setComicsEnded] = useState(false);
  const [newItemLoading, setnewItemLoading] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  useEffect(() => onRequest(offset), []);

  const onRequest = (offset) => {
    getAllComics(offset).then(onComicsListLoaded);
  };

  const onComicsListLoaded = (newComicsList) => {
    let ended = false;
    if (newComicsList.length < 8) {
      ended = true;
    }

    setComicsList((comicsList) => [...comicsList, ...newComicsList]);
    setnewItemLoading((newItemLoading) => newItemLoading = false);
    setOffset((offset) => offset + 8);
    setComicsEnded((comicsEnded) => comicsEnded = ended);
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
        <li tabIndex={0} key={i}>
          <NavLink to={`/comics/${item.id}`}>
            <img src={item.thumbnail} alt={item.title} style={imgStyle} />
            <p>{item.title}</p>
            <span>{item.price}</span>
          </NavLink>
        </li>
      );
    });
    return <ul>{items}</ul>;
  }

  const items = renderItems(comicsList);
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading && !newItemLoading ? <Spinner /> : null;

  return (
    <>
      <img src={banner} alt="comics banner." />
      <div className="comics__choose" data-comics-list>
        {errorMessage}
        {spinner}
        {items}
        <button
          className="btn btn--long"
          disabled={newItemLoading}
          style={{ display: comicsEnded ? "none" : "flex" }}
          onClick={() => onRequest(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    </>
  );
};

export default ComicsList;
