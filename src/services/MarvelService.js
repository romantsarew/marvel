class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/'
  _apiKey = 'apikey=ff64a0784b5d6e42a6564ae4ba4b8975'
  _baseOffset = 210

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`couldnt fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async(offset = this._baseOffset) => {
    const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`);
    return res.data.results.map(this._transformHero);
  };

  getCharacter = async (id) => {
    const res = await this.getResource(`${this._apiBase}characters/${id}?${this._apiKey}`);
    return this._transformHero(res.data.results[0])
  };

  _transformHero = (hero) => {
    return {
      id: hero.id,
      name: hero.name,
      description: hero.description || 'unfortunatly, this hero still hasnt his own description...',
      thumbnail: hero.thumbnail.path + '.' + hero.thumbnail.extension,
      homepage: hero.urls[0].url,
      wiki: hero.urls[1].url,
      comics: hero.comics.items.slice(0, 10)
    }
  }
}

export default MarvelService;
