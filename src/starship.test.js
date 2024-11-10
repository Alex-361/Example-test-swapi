const axios = require('axios');

describe("Star Wars Starship API", () => {
  it("should fetch the details of the first Star Wars starship ", async () => {
    const response = await axios.get("https://swapi.dev/api/starships/");
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("nome/model", "CR90 corvette");
  });
});