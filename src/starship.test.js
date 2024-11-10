const axios = require('axios'); // Importa o axios para fazer as requisições HTTP

describe("Star Wars Starship API", () => {
  // Teste para verificar a Millennium Falcon
  it("should fetch the details of the Millennium Falcon", async () => {
    // Faz uma requisição GET para o endpoint da Millennium Falcon
    const response = await axios.get("https://swapi.dev/api/starships/10/");
    
    // Verifica se a resposta tem o status 200 (OK)
    expect(response.status).toBe(200);
    
    // Verifica se o nome da nave é "Millennium Falcon"
    expect(response.data.name).toBe("Millennium Falcon");
  });

  // Teste para verificar uma nave inexistente
  it("should return 404 for an invalid starship", async () => {
    try {
      // Faz uma requisição GET para um ID que não existe (exemplo: 9999)
      await axios.get("https://swapi.dev/api/starships/9999/");
    } catch (error) {
      // Verifica se a resposta de erro tem o status 404 (não encontrado)
      expect(error.response.status).toBe(404);
    }
  });
});
