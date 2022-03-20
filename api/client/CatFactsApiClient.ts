import fetch from 'node-fetch';
import { Response } from 'node-fetch';

export default class CatFactsApiClient {
  constructor(private readonly baseUrl: string = 'https://catfact.ninja/') {}

  public getRandomCatFact(): Promise<Response> {
    return fetch(new URL('/fact', this.baseUrl).href);
  }
}
