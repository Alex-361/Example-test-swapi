const axios = require('axios');

describe("Star Wars Starship API", () => {
  it("should fetch the details of the Millennium Falcon", async () => {
    const response = await axios.get("https://swapi.dev/api/starships/10/"); // URL da Millennium Falcon
    expect(response.status).toBe(200); // Verifique se a resposta tem status 200
    expect(response.data.name).toBe("Millennium Falcon"); // Verifique o nome da nave
  });

  it("should return 404 for an invalid starship", async () => {
    try {
      await axios.get("https://swapi.dev/api/starships/9999/"); // URL inválida
    } catch (error) {
      expect(error.response.status).toBe(404); // Verifique se a resposta é 404
    }
  });
});
