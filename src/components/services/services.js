

class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'b3d73c3385d8dc59f4408eb82dad9545';

    getResources = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error('could not fetch');
        }
        return await res.json();
    }


    getAllCharacters = async () => {
    const res = await this.getResources(`${this._apiBase}characters?limit=9&offset=210&apikey=${this._apiKey}`);
    return res.data.results.map(this._transformCharacter);
    }
   
    getCharacter = async (id) => {
    const res = await this.getResources(`${this._apiBase}characters/${id}?&apikey=${this._apiKey}`); 
    return this._transformCharacter(res.data.results[0]);
    }

    _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description,
            thumbnail: char.thumbnail.path +'.'+ char.thumbnail.extension ,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics
        }
    }
}

export default MarvelService;