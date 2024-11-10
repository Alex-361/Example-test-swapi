const axios = require('axios');

// Define o URL base para a API SWAPI
const BASE_URL = 'https://swapi.dev/api/starships/';

describe('Star Wars Starship API', () => {
  it('should fetch the details of the first Star Wars starship', async () => {
    const response = await axios.get(BASE_URL + '2/'); // ID 2 corresponde à nave "CR90 corvette"

    expect(response.status).toBe(200);
    expect(response.data.name).toBe('CR90 corvette');
    expect(response.data.model).toBe('CR90 corvette');
  });

  it('should return 404 for a non-existent starship', async () => {
    try {
      await axios.get(BASE_URL + '9999/'); // Tentando acessar uma nave inexistente
    } catch (error) {
      expect(error.response.status).toBe(404); // Espera-se que o erro seja 404
    }
  });
});
