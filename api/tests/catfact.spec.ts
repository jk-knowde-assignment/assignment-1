import CatFactsApiClient from '../client/CatFactsApiClient';

describe('Cat fact API check', () => {
  const client: CatFactsApiClient = new CatFactsApiClient();

  it('should return random fact about cat', async () =>
    client.getRandomCatFact().then(async (response) => {
      expect(response.status).toBe(200);

      const responseContent = await response.json();
      expect(responseContent).toHaveProperty('fact');
      expect(typeof responseContent.fact).toBe('string');
      expect(responseContent.fact).not.toBe('');

      expect(responseContent).toHaveProperty('length');
      expect(typeof responseContent.length).toBe('number');
      expect(responseContent.length).not.toBe(0);
    }));
});
