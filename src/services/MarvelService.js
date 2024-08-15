class MarvelService {
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`couldnt fetch ${url}, status ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = () => {
    return this.getResource();
  };
}

export { MarvelService };
