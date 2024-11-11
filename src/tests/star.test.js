const axios = require('axios'); // Importa o axios para fazer requisições à API

describe('Star API Tests', () => {
  const baseUrl = 'https://sua-api-de-stars.com/api/stars/'; // Substitua com a URL correta da sua API

  // Teste para pegar todos os stars
  it('should fetch all stars', async () => {
    const response = await axios.get(baseUrl);
    expect(response.status).toBe(200); // Verifica se o status da resposta é 200
    expect(Array.isArray(response.data.results)).toBe(true); // Verifica se o retorno é um array
  });

  // Teste para pegar um star específico pelo ID
  it('should fetch a specific star by ID', async () => {
    const response = await axios.get(`${baseUrl}1/`); // Faz uma requisição para o star com ID 1
    expect(response.status).toBe(200); // Verifica se o status da resposta é 200
    expect(response.data.name).toBe('Tatooine'); // Verifica se o nome do star é 'Tatooine'
  });
});
