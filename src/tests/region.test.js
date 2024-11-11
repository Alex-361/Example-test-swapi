const axios = require('axios');  // Importa o axios para fazer requisições HTTP

describe('Region API Tests', () => {
  // Teste para obter todas as regiões
  it('should fetch all regions', async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/planets/');  // Requisição para pegar todos os planetas (regiões)
      expect(Array.isArray(response.data.results)).toBe(true);  // Verifica se a resposta contém um array de planetas
    } catch (error) {
      console.error('Error fetching all regions:', error);  // Caso haja erro, exibe no console
      throw error;
    }
  });

  // Teste para pegar uma região (planeta) específica pelo ID
  it('should fetch a specific region by ID', async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/planets/1/');  // Requisição para pegar o planeta com ID 1
      expect(response.data.name).toBe('Tatooine');  // Verifica se o nome do planeta é 'Tatooine'
    } catch (error) {
      console.error('Error fetching specific region:', error);  // Caso haja erro, exibe no console
      throw error;
    }
  });
});
