// src/tests/starship.test.js
const axios = require('axios');

describe("Star Wars Starship API", () => {
  it("deve buscar os detalhes da nave Millennium Falcon", async () => {
    const response = await axios.get("https://swapi.dev/api/starships/10/"); // ID 10 é da Millennium Falcon
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("name", "Millennium Falcon");
  });

  it("deve retornar erro ao buscar uma nave inexistente", async () => {
    try {
      await axios.get("https://swapi.dev/api/starships/99999/");
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
