


export const fetchAllData = async () => {

    const API_KEY = 'b3d73c3385d8dc59f4408eb82dad9545';
    const API_URL = 'https://gateway.marvel.com:443/v1/public/';

    const response = await fetch(`${API_URL}characters?apikey=${API_KEY}`);

    if(!response.ok) {
        throw new Error(console.log('error'));
        
    }

    

}




