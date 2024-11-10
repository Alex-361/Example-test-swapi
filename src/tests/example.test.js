// src/test/teste.js
const axios = require('axios');

describe('Testes da API Star Wars (SWAPI)', () => {
  const baseURL = 'https://swapi.dev/api';

  beforeAll(() => {
    // Configurações iniciais ou variáveis, se necessário
  });

  test('GET /planets - deve retornar uma lista de planetas', async () => {
    const response = await axios.get(`${baseURL}/planets/`);
    expect(response.status).toBe(200);
    expect(response.data.results).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0); // Verifica se a lista tem itens
  });

  test('GET /starships - deve retornar uma lista de naves', async () => {
    const response = await axios.get(`${baseURL}/starships/`);
    expect(response.status).toBe(200);
    expect(response.data.results).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0); // Verifica se a lista tem itens
  });

  test('GET /films - deve retornar uma lista de filmes', async () => {
    const response = await axios.get(`${baseURL}/films/`);
    expect(response.status).toBe(200);
    expect(response.data.results).toBeDefined();
    expect(response.data.results.length).toBeGreaterThan(0); // Verifica se a lista tem itens
  });

  test('GET /people/1 - deve retornar detalhes de um personagem', async () => {
    const response = await axios.get(`${baseURL}/people/1/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Luke Skywalker'); // Verifica o nome do personagem
  });

  // Adicione mais testes conforme necessário
});
