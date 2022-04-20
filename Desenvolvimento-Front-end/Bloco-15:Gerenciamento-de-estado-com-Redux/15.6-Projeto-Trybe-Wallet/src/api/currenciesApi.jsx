const API_URL = 'https://economia.awesomeapi.com.br/json/all';

const api = async () => {
  const result = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
  return Object.keys(result).filter((element) => element !== 'USDT');
};

export default api;
