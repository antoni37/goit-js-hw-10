import axios from 'axios';

export async function fetchBreeds(){
  axios.defaults.headers.common['x-api-key'] =
    'live_hh9CJ1Zv3VjgdteBeK5GM69kWDvndHkSFUjeUTCMstCGHpdv6vj31di8mmLPVDpC';
    const response = await axios
    .get(`https://api.thecatapi.com/v1/breeds`);
    return response.data;
};

export async function fetchCatByBreed(breedId) {
  const breedIdResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
  return breedIdResponse.data;
};
