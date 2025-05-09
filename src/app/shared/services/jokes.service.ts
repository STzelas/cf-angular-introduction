import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadJoke, ChuckNorrisJoke } from '../interfaces/joke';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/'
const CHUCK_NORRIS_JOKES_API_URL = 'https://api.chucknorris.io/jokes/random'

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  http: HttpClient = inject(HttpClient)

  constructor() {}

  getDadJokes() {
    return this.http.get<DadJoke>(DAD_JOKES_API_URL, {
      headers: {
        Accept: "application/json"
      }
    })
  }

  getChuchNorrisJoke() {
    return this.http.get<ChuckNorrisJoke>(CHUCK_NORRIS_JOKES_API_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
  }
}
