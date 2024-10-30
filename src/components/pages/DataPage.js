import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import banner from "../../images/banner.jpg";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../error/error";
import Spinner from "../spinner/spinner";
import { Helmet } from "react-helmet";

const DataPage = ({ type }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const { loading, error, getComicsId, getCharacter, clearError } =
    useMarvelService();

  useEffect(() => {
    if (id) {
      updateData();
    }
  }, [id]);

  const onDataLoaded = (data) => {
    setData(data);
  };

  const updateData = () => {
    clearError();

    if (!id) {
      console.error("ID не найден. Пожалуйста, убедитесь, что URL корректен.");
      return;
    }

    if (type === "comic") {
      getComicsId(id)
        .then(onDataLoaded)
        .catch((err) => {
          console.error("Ошибка при загрузке комикса:", err);
        });
    } else if (type === "hero") {
      getCharacter(id)
        .then(onDataLoaded)
        .catch((err) => {
          console.error("Ошибка при загрузке героя:", err);
        });
    }
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !data) ? (
    <View data={data} type={type} />
  ) : null;

  return (
    <>
      <img src={banner} alt="banner." />
      <div className="data">
        {errorMessage}
        {spinner}
        {content}
      </div>
    </>
  );
};

const View = ({ data, type }) => {
  if (type === "comic") {
    const { title, description, language, pageCount, thumbnail, price } = data;
    return (
      <>
        <Helmet>
          <meta name="description" content={`${title} comics book`} />
          <title>{title}</title>
        </Helmet>
        <img src={thumbnail} alt={title} />
        <div className="data__text">
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{pageCount}</p>
          <p>Language: {language}</p>
          <span>Price: {price}</span>
        </div>
        <NavLink to="/comics">Back to all</NavLink>
      </>
    );
  } else if (type === "hero") {
    const { name, description, thumbnail, homepage, wiki, comics } = data;
    return (
      <>
        <img src={thumbnail} alt={name} />
        <div className="data__text">
          <h1>{name}</h1>
          <p>{description}</p>
          <div className="data__links">
            <a
              href={homepage}
              className="btn btn-red"
              target="_blank"
              rel="noreferrer"
            >
              Homepage
            </a>
            <a
              href={wiki}
              className="btn btn--grey"
              target="_blank"
              rel="noreferrer"
            >
              Wiki
            </a>
          </div>
          <h3>Comics:</h3>
          <ul>
            {comics.length === 0 ? (
              <li>No available comics for this hero</li>
            ) : (
              comics.map((item, i) => (
                <NavLink
                  to={`/comics/${item.resourceURI.match(/\d+$/)[0]}`}
                  key={i}
                >
                  {item.name}
                </NavLink>
              ))
            )}
          </ul>
        </div>
        <NavLink to="/">Back</NavLink>
      </>
    );
  }

  return null;
};

export default DataPage;
