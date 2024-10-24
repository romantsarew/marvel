import { NavLink, useParams } from "react-router-dom";
import banner from "../../images/banner.jpg";

import { useEffect, useState } from "react";
import ErrorMessage from "../error/error";
import Spinner from "../spinner/spinner";
import useMarvelService from "../../services/MarvelService";

const ComicsData = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);

  const { loading, error, getComicsId, clearError } = useMarvelService();

  useEffect(() => {
    updateComic();
  }, [comicId]);

  const onComicLoaded = (comic) => {
    setComic(comic);
  };

  const updateComic = () => {
    clearError();

    getComicsId(comicId).then(onComicLoaded);
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !comic) ? <View comic={comic} /> : null;

  return (
    <>
      <img src={banner} alt="comics banner." />
      <div className="comics__data">
        {errorMessage}
        {spinner}
        {content}
      </div>
    </>
  );
};

const View = ({ comic }) => {
  const { title, description, language, pageCount, thumbnail, price } = comic;
  return (
    <>
      <img src={thumbnail} alt={title} />
      <div className="comics__text">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{pageCount}</p>
        <p>Language: {language}</p>
        <span>Price: {price}</span>
      </div>
      <NavLink to="/comics">Back to all</NavLink>
    </>
  );
};

export default ComicsData;
