import CatFactsApiClient from '../client/CatFactsApiClient';
import { expect } from 'chai';

describe('Cat fact API check', () => {
  const client: CatFactsApiClient = new CatFactsApiClient();

  it('should return random fact about cat', async () =>
    client.getRandomCatFact().then(async (response) => {
      expect(response.status).to.eq(200);

      const responseContent = await response.json();
      expect(responseContent).to.have.keys('fact', 'length');
      expect(responseContent.fact).to.be.a('string').and.to.be.not.empty;
      expect(responseContent.length).to.be.a('number').and.to.be.greaterThan(0);
    }));
});
