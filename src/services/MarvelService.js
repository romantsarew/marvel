import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, error, request, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=ff64a0784b5d6e42a6564ae4ba4b8975";
  const _baseOffset = 210;
  const _comicsOffset = 50;

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformHero);
  };

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
    return _transformHero(res.data.results[0]);
  };

  const _transformHero = (hero) => {
    return {
      id: hero.id,
      name: hero.name,
      description:
        hero.description ||
        "unfortunatly, this hero still hasnt his own description...",
      thumbnail: hero.thumbnail.path + "." + hero.thumbnail.extension,
      homepage: hero.urls[0].url,
      wiki: hero.urls[1].url,
      comics: hero.comics.items.slice(0, 10),
    };
  };

  const getComicsId = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  };

  const getAllComics = async (offset = _comicsOffset) => {
    const res = await request(
      `${_apiBase}comics?&limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComics);
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      thumbnail: comics.thumbnail.path + "." + comics.thumbnail.extension,
      price: comics.prices.price
        ? `${comics.prices[0].price}$`
        : "not available",
      language: comics.textObjects.language || "en-us",
      pageCount: comics.pageCount ? `${comics.pageCount} p.` : "No info",
      description: comics.description || "No info",
    };
  };

  return {
    loading,
    error,
    getCharacter,
    getAllCharacters,
    clearError,
    getAllComics,
    getComicsId,
  };
};

export default useMarvelService;
