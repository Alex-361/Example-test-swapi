const axios = require('axios');

// URL base da API para filmes
const baseUrl = 'https://swapi.dev/api/films/';

describe('Film API Tests', () => {
  // Teste para verificar se todos os filmes podem ser recuperados
  it('should fetch all films', async () => {
    try {
      const response = await axios.get(baseUrl); // Fazendo requisição GET para a lista de filmes
      expect(response.status).toBe(200); // Verifica se o status da resposta é 200
      expect(Array.isArray(response.data.results)).toBe(true); // Verifica se o retorno é um array
    } catch (error) {
      expect(error).toBeUndefined(); // Caso haja erro, falha o teste
    }
  });

  // Teste para verificar se um filme específico pode ser recuperado pelo ID
  it('should fetch a specific film by ID', async () => {
    try {
      const response = await axios.get(`${baseUrl}1/`); // Faz a requisição para o filme com ID 1
      expect(response.status).toBe(200); // Verifica se o status da resposta é 200
      expect(response.data.title).toBe('A New Hope'); // Verifica se o título do filme é 'A New Hope'
    } catch (error) {
      expect(error).toBeUndefined(); // Caso haja erro, falha o teste
    }
  });
});
